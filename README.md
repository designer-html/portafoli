# Portafolio de Bangally — ASIX

Portafolio personal trilingüe (castellano, catalán e inglés) para un estudiante de ASIX del Institut Sa Palomera. Incluye currículum descargable en PDF, proyectos con su caso completo, certificados y el informe IPOP de orientación profesional.

**Sitio publicado:** https://site-d1cb8708934248ad84b8100f3e57ae26.freebuff.page
**Repositorio:** https://github.com/designer-html/portafoli

## Secciones

- `/` — Inicio: presentación, cifras, accesos a cada sección y proyectos recientes.
- `/curriculum` — Currículum con foto circular, contacto, experiencia, formación, herramientas, idiomas y botón para guardar el CV en PDF.
- `/projects` — Proyectos; cada uno con su página `/projects/:slug`.
- `/certificates` — Certificados con identificador de credencial.
- `/ipop` — Informe Personal de Orientación Profesional: currículum competencial, proyección profesional (2.a, 2.b, 2.c) y plan de promoción personal (3.a, 3.b).
- Contacto — Formulario en el pie, con validación en el Worker.

## Tecnología

- React 19 + TypeScript con Vite
- Tailwind CSS v4 para el tema oscuro
- Motion para animaciones y React Router para las rutas
- Hono en un Worker de Cloudflare (`/api/contact`, `/api/health`)
- Despliegue con Freebuff Sites (`deploy.json`)

## Empezar

```sh
bun install
bun run dev        # servidor local
bun run build      # dist/client + Worker
bun run typecheck
```

## Personalizar

- `src/data/profile.ts`: nombre, foto, correo, ubicación, redes sociales, imágenes de proyectos y certificados.
- `src/data/es.ts`, `ca.ts` y `en.ts`: todos los textos de cada idioma, incluido el informe IPOP.
- `src/app/pages/` y `src/app/components/`: páginas y componentes.
- `src/styles.css`: colores, tipografías y utilidades del tema.
- `public/images/`: fotos y portadas de los proyectos. La foto del currículum se toma de `public/images/foto.jpg`.

## Documentos

En `documents/` están el informe IPOP y el currículum en Markdown, en catalán y castellano, listos para subir a GitHub:

- `documents/IPOP-ca.md`
- `documents/IPOP-es.md`
- `documents/CV-ca.md`
- `documents/CV-es.md`

## Despliegue

El proyecto ya está preparado para Freebuff Sites: `bun run build` y publicar con el manifiesto `deploy.json`.
