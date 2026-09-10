# Resumen Técnico de Despliegue e Infraestructura: TreeNet & Verla

**Fecha:** 04 de Septiembre de 2026  
**Servidor:** Google Cloud Platform (Compute Engine)  
**Instancia:** `verla-treenet` | **Zona:** `us-central1-a` | **IP Pública:** `35.254.244.64`  
**Sistema Operativo:** Debian GNU/Linux 13 (trixie) | **Node.js:** v20.19.2 | **npm:** 10.9.9  
**Memoria:** 4 GB RAM + 2 GB Swap preventiva (`vm.swappiness=10`)  

---

## 1. Arquitectura General del Servidor

El servidor opera como un entorno de producción multitenant utilizando **Nginx** como Reverse Proxy / Web Server principal en los puertos estándar de internet (80 HTTP y 443 HTTPS), distribuyendo el tráfico de acuerdo al nombre de dominio (`Host`):

```text
                                Internet (Puertos 80 y 443)
                                            │
                                            ▼
                                   [ Cloudflare CDN ]
                             (SSL Full / Modo Proxied Activo)
                                            │
                                            ▼
                               [ Google Cloud Firewall ]
                           (Tags: http-server, https-server)
                                            │
                                            ▼
                                     [ NGINX (Debian) ]
                                    /                  \
              Host: treenet.com.co /                    \ Host: verla.com.co
                                  ▼                      ▼
                   Proxy: 127.0.0.1:3000           1) Frontend Estático (dist/)
                     (treenet.service)             2) Proxy /api/: 127.0.0.1:3001
                     Next.js 16 SSR/APIs                 (verla.service)
```

---

## 2. Configuración de Red, Seguridad y DNS

1. **Firewall de Google Cloud:**
   - La máquina `verla-treenet` tiene asignadas las etiquetas de red:
     - `http-server` (Abre puerto TCP 80).
     - `https-server` (Abre puerto TCP 443).
   - Los puertos internos de aplicación (3000 y 3001) permanecen cerrados hacia internet y solo escuchan en la interfaz de bucle invertido (`127.0.0.1`).

2. **DNS en Cloudflare:**
   - Ambos dominios tienen registros tipo `A` apuntando a `35.254.244.64` con la nube naranja activada (Proxy).
   - Configuración SSL/TLS en Cloudflare: **Full** (permite validar con el certificado SSL de origen instalado en Nginx).

3. **Acceso Git / GitHub:**
   - Llave SSH ED25519 generada en el servidor:
     - Clave privada: `/root/.ssh/id_ed25519` y `/home/tecnologia/.ssh/id_ed25519`
     - Clave pública: `/home/tecnologia/clave_github.txt`
   - Configurada como Deploy Key autorizada en ambos repositorios.

---

## 3. Implementación 1: TreeNet (`treenet.com.co` y `www.treenet.com.co`)

- **Repositorio:** `git@github.com:Jhalmarm/webtreenet.git` (rama `main`)
- **Directorio de la aplicación:** `/var/www/treenet.com.co/web`
- **Stack Tecnológico:**
  - Next.js 16.3.3 (Turbopack)
  - React 19.2.8
  - Tailwind CSS v4
  - TypeScript 5
  - Web Audio API (síntesis de sonidos nativa)

### Configuración del Servicio (Systemd)
- **Archivo:** `/etc/systemd/system/treenet.service`
- **Usuario:** `tecnologia`
- **Puerto interno:** `127.0.0.1:3000`
- **Comando de arranque:** `/usr/bin/npm start -- -p 3000`
- **Variables de entorno:** `/var/www/treenet.com.co/web/.env.local` (permisos `600`, propietario `tecnologia`).
- **Integraciones:**
  - **NextCore FTTH:** Consulta de cobertura y viabilidad técnica por coordenadas (`lat`/`lng`) y dirección.
  - **Webhooks de Leads y PQR:** Conectados a `https://n8njh.verla.cloud/webhook/verlina-web-treenet`. El endpoint `/api/lead` opera con persistencia local obligatoria (`data/leads.jsonl`) y reenvío tolerante a fallos para garantizar que una eventual caída del webhook nunca bloquee al usuario.
  - **Integración Cobertura ➜ Verlina:** Al pulsar "Hablar con Verlina" tras validar cobertura, el widget se abre y envía automáticamente el mensaje redactado con los datos del usuario, el estado de viabilidad técnica y la autorización expresa de tratamiento de datos personales y mensajes de WhatsApp.
  - **Control de Scroll en Chat Verlina:** Algoritmo en `VerlinaWidget.tsx` que intercepta respuestas largas y sitúa el scroll en la primera línea del mensaje entrante, desplegando un indicador visual interactivo `Continuar leyendo ↓` cuando el contenido excede la altura visible.

### Virtual Host Nginx
- **Archivo:** `/etc/nginx/sites-available/treenet.com.co` (enlace en `sites-enabled`)
- **SSL de origen:** `/etc/ssl/certs/treenet.crt` y `/etc/ssl/private/treenet.key`
- **Características:**
  - Caché optimizada para `/_next/static/` (1 año, immutable).
  - Proxy pass a `http://127.0.0.1:3000` con soporte para WebSockets (`Upgrade`).
  - Reenvío de encabezados de cliente real: `X-Real-IP`, `X-Forwarded-For`, `CF-Connecting-IP`, `CF-Ray`.

### Módulo de Efectos de Sonido
- **Archivo:** `src/lib/sounds.ts`
- **Tecnología:** Web Audio API (síntesis procedural sin archivos de audio externos, 0 KB de carga de red).
- **Efectos implementados:**
  1. `playHiTechOpen`: Barrido armónico ascendente futurista (se reproduce en la primera interacción del usuario, al abrir planes *"Lo quiero"* o al desplegar el menú móvil).
  2. `playVictoryClin`: Arpegio mayor brillante (*Do-Mi-Sol-Do*) en consulta de cobertura positiva.
  3. `playDiscreetHorn`: Acorde grave suave y filtrado cuando la dirección no tiene viabilidad inmediata.
  4. `playFaintBell`: Campana cristalina tenue cuando aparece el popup "¿Sigues ahí?".

---

## 4. Implementación 2: Verla (`verla.com.co` y `www.verla.com.co`)

- **Repositorio:** `git@github.com:Ale-Bar989/VerlaCol-Landing-Page.git` (rama `main`)
- **Directorio de la aplicación:** `/var/www/verla.com.co`
- **Stack Tecnológico:**
  - React 19.1.1
  - Vite 7.2.4
  - Tailwind CSS v4
  - TypeScript 5.9
  - Vite PWA Plugin
  - Node.js nativo para el servicio backend

### Frontend SPA y Compilación
- Compilado de producción generado en `/var/www/verla.com.co/dist`.
- Nginx sirve los archivos HTML, CSS, JS e imágenes directamente desde `dist/`, con enrutamiento SPA (`try_files $uri $uri/ /index.html`).

### Backend API para Captura de Leads (`/api/lead`)
- **Archivo:** `/var/www/verla.com.co/server.mjs`
- **Propósito:** Reemplazo nativo en servidor de la serverless function de Vercel. Recibe los leads enviados por el formulario (`POST /api/lead`), valida campos, honeypot anti-spam, genera el payload estructurado de llamada sintética y lo reenvía al webhook de n8n con el header `x-verla-token`.
- **Servicio Systemd:** `/etc/systemd/system/verla.service`
  - **Usuario:** `tecnologia`
  - **Puerto interno:** `127.0.0.1:3001`
  - **Comando de arranque:** `/usr/bin/node /var/www/verla.com.co/server.mjs`
  - **Healthcheck:** `GET /api/health` ➜ `{ ok: true, app: "verla-backend" }`

### Virtual Host Nginx
- **Archivo:** `/etc/nginx/sites-available/verla.com.co` (enlace en `sites-enabled`)
- **SSL de origen:** `/etc/ssl/certs/verla.crt` y `/etc/ssl/private/verla.key`
- **Características:**
  - `root /var/www/verla.com.co/dist;`
  - Caché estática agresiva para `/assets/` y `/documents/` (365 días).
  - Enrutamiento API: `location /api/` redirigido a `http://127.0.0.1:3001`.
  - Reenvío de encabezados `CF-Connecting-IP`, `X-Forwarded-For`.

---

## 5. Tabla de Puertos y Procesos

| Servicio | Puerto Interno | Puerto Externo | Proceso / Gestor | Directorio Raíz |
| :--- | :--- | :--- | :--- | :--- |
| **Nginx** | `80`, `443` | `80`, `443` | systemd (`nginx.service`) | `/etc/nginx` |
| **TreeNet Web** | `127.0.0.1:3000` | Vía Nginx | systemd (`treenet.service`) | `/var/www/treenet.com.co/web` |
| **Verla API** | `127.0.0.1:3001` | Vía Nginx | systemd (`verla.service`) | `/var/www/verla.com.co` |
| **Verla Frontend**| Estático | Vía Nginx | Nginx DocumentRoot | `/var/www/verla.com.co/dist` |

---

## 6. Guía de Operación y Comandos de Mantenimiento

### Ver estado de los servicios
```bash
sudo systemctl status nginx
sudo systemctl status treenet
sudo systemctl status verla
```

### Reiniciar servicios
```bash
sudo systemctl restart nginx
sudo systemctl restart treenet
sudo systemctl restart verla
```

### Ver logs en tiempo real
```bash
# Logs de Next.js (TreeNet)
journalctl -u treenet -f

# Logs de la API de Leads (Verla)
journalctl -u verla -f

# Logs de acceso y error de Nginx
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log
```

### Actualización de código (Deploy de nuevas versiones)

#### Para TreeNet:
```bash
cd /var/www/treenet.com.co/web
git pull origin main
npm ci
npm run build
sudo systemctl restart treenet
```

#### Para Verla:
```bash
cd /var/www/verla.com.co
git pull origin main
npm ci
npm run build
sudo systemctl restart verla
```

### Probar sintaxis y recargar Nginx tras cambios de configuración
```bash
sudo nginx -t
sudo systemctl reload nginx
```

---

## 7. Herramienta de Notificaciones por Telegram (`telegram-send`)

Se implementó un script ejecutable en `/usr/local/bin/telegram-send` (con acceso rápido desde `~/telegram-send.sh`) para enviar alertas, mensajes y archivos adjuntos vía bot de Telegram:

- **Bot:** `@RtsJh_bot` (`7846218930:...`)
- **Chat ID Destino:** `958871570` (Jhalmar Molina)
- **Ejemplos de uso rápido:**
  ```bash
  # Mensaje de texto
  telegram-send "Despliegue finalizado exitosamente 🚀"

  # Entrada por tubería (pipe)
  tail -n 25 /var/log/nginx/error.log | telegram-send

  # Enviar archivo / documento
  telegram-send -f /home/tecnologia/RESUMEN_TECNICO_DEPLOY.md -m "Resumen técnico"

  # Enviar imagen / captura
  telegram-send -p /ruta/captura.png -m "Estado de la interfaz"
  ```
