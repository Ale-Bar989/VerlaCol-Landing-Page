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
  - API de Analítica Web (`/api/analytics`): protegido con cabecera `x-api-key`, entrega métricas de visitas reales (sesiones humanas de 30 min), visitantes únicos, visitas de hoy, páginas más vistas, desglose de dispositivos y balance de leads en JSON para consultas de n8n.
  - Módulo PQR integrado con NextCore producción:
    - Base URL: `NEXTCORE_PQR_BASE_URL=https://app.nextcorenow.com` (workspace VERLA `85754df3-d8d0-4720-87ec-eaca667daff6`).
    - API key de producción guardada en `.env.local` como `NEXTCORE_PQR_API_KEY` (viaja solo del lado del servidor, header `X-Api-Key`).
    - Radicación: `POST /api/pqr` (multipart) → proxy a `https://app.nextcorenow.com/api/v1/public/pqr/submit`. NextCore genera el CUN oficial de 16 dígitos + ticket_code + sla_due_at (15 días hábiles). Respaldo local en `data/pqr.jsonl` y reenvío a n8n tolerante a fallos.
    - Consulta: `GET /api/pqr?cun=...&doc=...` → proxy a `/api/v1/public/pqr/status` (autenticación ligera CUN + documento, datos enmascarados según spec sección 7).
    - Constancia PDF: `POST /api/pqr/receipt` → URL firmada S3 con expiración de 10 minutos.
    - Formulario `/radicar-pqr` con bloques spec CRC: solicitante (CC/CE), contacto + autorización notificación electrónica (Ley 1437), contrato, tipificación 5 tipos (petición, solicitud información, queja, reclamo, recurso con CUN original), hechos ≤4000 / pretensiones ≤2000, adjuntos PDF/JPG/PNG ≤5MB, habeas data que bloquea el botón hasta aceptarse.
    - Consulta `/consultar-pqr` con CUN + número de documento, aviso de apelación (10 días hábiles) y descarga de constancia.
    - Fixes UI (sep/2026): selects con `color-scheme: dark` global (opciones visibles sin hover, flecha menta personalizada) y selector de anexos 100% en español ("📎 Seleccionar archivos", lista con tamaño y botón Quitar). Commits `dcfc76f` y `7ffb851`.
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

---

## 7. Estado al compactar sesión (28 Sep 2026)

Repos TreeNet y Verla deben quedar al día con `origin/main`. Servicios `treenet` (3000), `verla` (3001) y `nginx` activos. Deploy TreeNet: `cd /var/www/treenet.com.co/web && npm run build && sudo systemctl restart treenet`.

Hechos recientes que no hay que rehacer:

- PDF `web/public/legal/centro-de-seguridad.pdf` reemplazado (8 páginas). `centro-de-seguridad_old.pdf` descartado (commit `819fc26`).
- Verlina (`VerlinaWidget.tsx` + `globals.css`): saludo único `Hola, soy Verlina en que puedo ayudarte?`. Texto del bot en negro. El campo donde escribe el usuario va en negro sobre blanco (`#verlina-chat textarea`, `color-scheme: light`) porque `html { color-scheme: dark }` lo dejaba blanco sobre blanco. Commit `f4dfc4c`.
- Analítica `/api/analytics` (commit `af25d23`): `real_visits` y `daily_visits` son **IPs únicas de navegadores** que pidieron una página HTML (GET 200/304, UA Mozilla, sin bots, sin `/api`, `/_next`, assets ni probes). Ya no son sesiones de 30 min ni solicitudes. Campo `metric: unique_browser_ip_per_day`. Rango reciente ~85–200 personas/día, no 300–500. `unique_visitors` es el total de IPs distintas del periodo.
- PQR NextCore producción operativo. Fixes UI de selects y anexos en español ya desplegados.
- Informes: `/home/tecnologia/INFORME_PRODUCCION.md`, `/home/tecnologia/REPORTE_PQR_NEXTCORE.md`, `/home/tecnologia/DEPLOY_CONTEXT.md`.


