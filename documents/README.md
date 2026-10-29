# Documentos del portafolio

Documentos en Markdown, listos para subir a GitHub y leer directamente en el navegador.

| Archivo | Contenido |
| --- | --- |
| `IPOP-ca.md` | Informe Personal de Orientación Profesional completo, en catalán |
| `IPOP-es.md` | El mismo informe en castellano |
| `CV-ca.md` | Currículum en catalán |
| `CV-es.md` | Currículum en castellano |

El informe incluye los tres apartados que pide el profesor:

1. Currículum competencial (formación, experiencia, herramientas, idiomas y certificados).
2. Proyección profesional: 2.a especialización y competencias, 2.b empresas objetivo, 2.c itinerario formativo.
3. Plan de promoción personal: 3.a estrategias y 3.b plan de actuación con cronograma.

## Cómo subirlo a GitHub

Perfil: https://github.com/designer-html
Repositorio: **portafoli** → https://github.com/designer-html/portafoli

### 1. Crea el repositorio

En tu perfil pulsa **New repository**, pon el nombre **portafoli** y créalo vacío (sin README ni .gitignore: este proyecto ya los incluye).

### 2. Opción rápida — desde la web

1. Entra en `portafoli` y pulsa **Add file → Upload files**.
2. Arrastra esta carpeta `documents/` completa (o los `.md` sueltos).
3. Escribe «Añade informe IPOP y currículum» y pulsa **Commit changes**.

### 3. Opción con git

Con Git instalado, abre una terminal dentro de la carpeta del proyecto y ejecuta:

```sh
git init
git add .
git commit -m "Portafolio y documentos del IPOP"
git branch -M main
git remote add origin https://github.com/designer-html/portafoli.git
git push -u origin main
```

Si te pide identificarte, usa tu usuario de GitHub y un token personal como contraseña.

## Notas

- El ZIP `bangally-portfolio.zip` de la raíz contiene todo el código fuente, ya sin `node_modules` ni `dist`.
- No subas `node_modules` ni `dist`: se regeneran con `bun install` y `bun run build`.
- Los documentos usan el mismo contenido que la página `/ipop` y la sección de currículum del sitio.
