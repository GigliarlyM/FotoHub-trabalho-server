import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";
import { getPhotoAllModel } from "../model/service";

export default async function getPhotoAll(app: FastifyInstance) {
    app.withTypeProvider<ZodTypeProvider>().get('/photo', {
    }, async () => {
        try {
            const photos = await getPhotoAllModel()
            
            return { photos }
        } catch (err) {
            return { message: err}
        }
    })
}