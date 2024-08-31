import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";
import { getPhotoModel } from "../model/crud-service";

export default async function getPhoto(app: FastifyInstance) {
    app.withTypeProvider<ZodTypeProvider>().get('/photo/:cpfPhotographer', {
        schema: {
            params: z.object({
                cpfPhotographer: z.string()
            })
        },
    }, async (request) => {
        const { cpfPhotographer } = request.params

        const photos = getPhotoModel(cpfPhotographer)

        return { photos }
    })
}