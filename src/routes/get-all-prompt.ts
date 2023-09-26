import { FastifyInstance } from "fastify";
import { prisma } from '../lib/prisma';


export async function getAllPromptRoute(app: FastifyInstance) {

  app.get('/prompt', async () => {
    const prompt = await prisma.prompt.findMany()
  
    return prompt
  })
  
}