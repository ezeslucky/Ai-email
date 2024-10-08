import { db } from "@/server/db";

await db.user.create({
    data:{
        emailAddress: 'lucky@gmail.com',
        firstName: 'lucky',
        lastName: 'patra'
    }
})

console.log("done")