import { createApp } from './app.js'
import config from './config.js'
import { connectToPostgres } from './connect.js'

const app = await prepareApp()

if (import.meta.env?.PROD) {
  await app.listen({ port: config.port })
}

export const viteNodeApp = app

async function prepareApp() {
  const app = createApp()

  try {
    await connectToPostgres(app)
    return app
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}
