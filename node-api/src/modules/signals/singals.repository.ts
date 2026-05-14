import { PrismaClient } from "../../db/src/generated/prisma/client";

const prisma = new PrismaClient();

export const createSignal = async(
    userId: string,
    data: any
)=>{
    return prisma.signal.create({
        data: {
            type: data.type,
            payload: data.payload,
            userId
        }
    })
}
