import { PrismaClient } from '@prisma/client'

const db = new PrismaClient()

db.user.create({
  data: {
    username: 'first',
  },
})
// test 코드
/*
    async function test(){
        const user = await db.user.create({
            data:{
                username: " dddd",

            }
        })
        console.log(user)
    }
*/

export default db
