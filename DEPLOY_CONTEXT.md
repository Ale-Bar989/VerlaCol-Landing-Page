# TreeNet & Verla - Contexto de Infraestructura y Despliegue

Fecha de configuración: 03-04/Sep/2026

---

## 1. Servidor e Infraestructura
- **Proveedor:** Google Cloud Platform (GCP Compute Engine)
- **Instancia:** `verla-treenet`
- **Zona:** `us-central1-a`
- **Proyecto GCP:** `intranetverla` (ID: `642600966905`)
- **Sistema Operativo:** Debian GNU/Linux 13 (trixie)
- **IP Pública:** `35.254.244.64`
- **Memoria RAM:** 4 GB física + 2 GB Swap preventiva (`vm.swappiness=10`)
- **Usuario estándar:** `tecnologia` (con privilegios `sudo`)
- **Firewall de GCP:** Etiquetas `http-server` (puerto 80) y `https-server` (puerto 443) habilitadas.

---

## 2. Llaves SSH y GitHub
- **Repositorios:**
  - TreeNet: `git@github.com:Jhalmarm/webtreenet.git`
  - Verla: `git@github.com:Ale-Bar989/VerlaCol-Landing-Page.git`
- **Ruta de llaves:** `/root/.ssh/id_ed25519` y `/home/tecnologia/.ssh/id_ed25519`
- **Copia de clave pública:** `/home/tecnologia/clave_github.txt`
- **Tipo de clave:** ED25519 (`deploy@treenet.com.co`)

---

## 3. Despliegue de TreeNet (`treenet.com.co` y `www.treenet.com.co`)
- **Ruta del proyecto:** `/var/www/treenet.com.co/web`
- **Propietario:** `tecnologia:tecnologia`
- **Framework:** Next.js 16.3.3 (Turbopack), React 19, Tailwind CSS v4, TypeScript
- **Variables de entorno:** `/var/www/treenet.com.co/web/.env.local`
- **Integraciones:**
  - NextCore FTTH (`NEXTCORE_BASE_URL=https://staging.nextcorenow.com`): verificación de viabilidad, distancia y puertos libres en cajas de fibra.
  - Webhook de Leads (`LEAD_WEBHOOK_URL=https://n8njh.verla.cloud/webhook/verlina-web-treenet`): arquitectura resiliente con persistencia local en `data/leads.jsonl` y reenvío con header de autenticación `x-api-key`.
  - Proxy Seguro Verlina (`/api/verlina`): el navegador se comunica en el mismo dominio (cero problemas de CORS). El servidor inyecta privadamente la cabecera `x-api-key` hacia n8n, manteniendo la API key oculta y protegida en `.env.local`.
  - Flujo Cobertura ➜ Verlina: traspaso automático de datos del lead (nombre, teléfono, dirección, tipo de inmueble) y confirmación de cobertura disponible al pulsar "Hablar con Verlina", incluyendo cláusula de consentimiento y metadatos de WhatsApp/Habeas Data.
  - UX Chat Verlina: scroll automático al inicio de respuestas extensas y botón flotante "Continuar leyendo ↓".
- **Servicio Systemd:** `/etc/systemd/system/treenet.service`
  - Ejecuta: `npm start -- -p 3000` bajo usuario `tecnologia`
  - Puerto interno: `127.0.0.1:3000`
  - Comandos:
    ```bash
    sudo systemctl restart treenet
    sudo systemctl status treenet
    ```
- **Nginx Config:** `/etc/nginx/sites-available/treenet.com.co`
- **Efectos de sonido:** `src/lib/sounds.ts` (Web Audio API)

---

## 4. Despliegue de Verla (`verla.com.co` y `www.verla.com.co`)
- **Ruta del proyecto:** `/var/www/verla.com.co`
- **Propietario:** `tecnologia:tecnologia`
- **Framework:** React 19, Vite 7, Tailwind CSS v4, TypeScript (SPA compilada en `dist/`)
- **Backend API:** `/var/www/verla.com.co/server.mjs` (servicio nativo Node para `POST /api/lead` hacia n8n)
- **Servicio Systemd:** `/etc/systemd/system/verla.service`
  - Puerto interno: `127.0.0.1:3001`
  - Comandos:
    ```bash
    sudo systemctl restart verla
    sudo systemctl status verla
    ```
- **Nginx Config:** `/etc/nginx/sites-available/verla.com.co`
  - Sirve archivos estáticos y SPA desde `/var/www/verla.com.co/dist` con fallback a `index.html`
  - Enruta `location /api/` al backend en `http://127.0.0.1:3001`
  - SSL origen: `/etc/ssl/certs/verla.crt` y `/etc/ssl/private/verla.key`
- **Flujo de actualización de código:**
  ```bash
  cd /var/www/verla.com.co
  git pull origin main
  npm ci
  npm run build
  sudo systemctl restart verla
  ```

---

## 5. DNS y Cloudflare
- Tanto `treenet.com.co` como `verla.com.co` comparten la misma IP pública: `35.254.244.64`.
- Modo en Cloudflare: Proxied (nube naranja).
- Configuración SSL/TLS en Cloudflare: Modo **"Full"** (para validar con los certificados de origen del servidor).

---

## 6. Notificaciones por Telegram
- **Comando global:** `telegram-send` (enlace en `/home/tecnologia/telegram-send.sh`)
- **Bot:** `@RtsJh_bot`
- **Chat ID:** `958871570`
- **Uso:**
  ```bash
  telegram-send "Mensaje de prueba"
  telegram-send -f /ruta/archivo.pdf -m "Reporte"
  echo "Servidor OK" | telegram-send
  ```
