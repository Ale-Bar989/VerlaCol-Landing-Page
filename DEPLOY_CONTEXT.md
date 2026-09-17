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
  - Proxy Seguro Verlina (`/api/verlina`): el navegador se comunica en el mismo dominio (cero problemas de CORS). El servidor inyecta privadamente la cabecera `x-api-key` hacia n8n, bloqueando peticiones vacías o \n\n.
  - Flujo Cobertura ➜ Verlina: traspaso automático de datos del lead y confirmación de cobertura disponible con cláusula de consentimiento de WhatsApp.
  - Sistema de Blog Autogestionable:
    - Índice público: `/blog`
    - Páginas de artículo: `/blog/[slug]` con OpenGraph y Schema.org BlogPosting.
    - Panel de administración: `/admin` con autenticación por cookie firmada HMAC-SHA256 y editor WYSIWYG.
    - Subida de imágenes: `/api/admin/upload` hacia `/blog-uploads/` (servido directo por Nginx).
    - Sitemap dinámico: `src/app/sitemap.ts` incluye automáticamente cada artículo nuevo en `sitemap.xml`.
- **Servicio Systemd:** `/etc/systemd/system/treenet.service`
  - Ejecuta: `npm start -- -p 3000` bajo usuario `tecnologia`
  - Puerto interno: `127.0.0.1:3000`
  - Comandos:
    ```bash
    sudo systemctl restart treenet
    sudo systemctl status treenet
    ```
- **Nginx Config:** `/etc/nginx/sites-available/treenet.com.co`
  - Redirección 301 Permanente: `treenet.com.co` ➜ `https://www.treenet.com.co$request_uri` (cumplimiento SEO y canónico).
  - Servidor principal: `www.treenet.com.co` (proxy a Next.js puerto 3000).
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

## 6. Notificaciones y Reportes por Telegram
- **Comando de mensajes y archivos:** `telegram-send` (enlace en `/home/tecnologia/telegram-send.sh`)
- **Comando de informe de visitas:** `reporte-visitas` (enlace en `/home/tecnologia/reporte-visitas`)
  - Uso en terminal: `reporte-visitas`
  - Solo el día de hoy: `reporte-visitas --today`
  - Enviar informe a Telegram: `reporte-visitas --telegram` (o `reporte-visitas -t -tg` para el de hoy)
- **Bot:** `@RtsJh_bot`
- **Chat ID:** `958871570`
