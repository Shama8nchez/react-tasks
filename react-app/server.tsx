import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import express from 'express'
import { createServer as createViteServer } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

async function createServer() {
  const app = express()

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom'
  })

  app.use(vite.middlewares)

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl
  
    try {
      let template = fs.readFileSync(
        path.resolve(__dirname, 'index.html'),
        'utf-8',
      )
  
      template = await vite.transformIndexHtml(url, template)

      const { render } = await vite.ssrLoadModule('/src/entry-server.tsx')
  
      // 4. render the app HTML. This assumes entry-server.js's exported
      //     `render` function calls appropriate framework SSR APIs,
      //    e.g. ReactDOMServer.renderToString()
      //const appHtml = await render(url)
  
      // 5. Inject the app-rendered HTML into the template.
      //const html = template.replace(`<!--ssr-outlet-->`, appHtml)
      const html = template.split(`<!--ssr-outlet-->`)
      // 6. Send the rendered HTML back.
      //res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
      const { pipe } = await render(url, {
        onShellReady() {
          res.write(html[0]);
          pipe(res);
        },
        onAllReady() {
          res.write(html[1]);
          res.end();
        },
      });
    } catch (e) {
      // If an error is caught, let Vite fix the stack trace so it maps back
      // to your actual source code.
      if (e instanceof Error) {
        vite.ssrFixStacktrace(e)
        next(e)
      }
    }
  })
  

  app.listen(5173, () => console.log("Server started"))
}

createServer()
