import { FastifyInstance } from 'fastify'

import prismaPlugin from './plugins/prisma.js'

function connectToPostgres(fastify: FastifyInstance) {
  fastify.register(prismaPlugin)
}

export { connectToPostgres }
