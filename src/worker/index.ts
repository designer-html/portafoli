import { Hono } from 'hono'

type Env = { ASSETS: Fetcher }

const app = new Hono<{ Bindings: Env }>()

app.get('/api/health', (c) => c.json({ ok: true }))

// Formulario de contacto. Devuelve códigos para que la interfaz los traduzca
// al idioma activo. Reenvíalo a tu correo con una API de email (clave en
// Sites → Secrets) o guárdalo en D1.
app.post('/api/contact', async (c) => {
  const body = await c.req.json<{ name?: string; email?: string; message?: string }>().catch(() => ({}) as Record<string, string>)
  if (!body.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) return c.json({ code: 'invalid_email' }, 400)
  if (!body.message?.trim()) return c.json({ code: 'empty_message' }, 400)
  return c.json({ ok: true })
})

app.all('*', (c) => c.env.ASSETS.fetch(c.req.raw))

export default app
