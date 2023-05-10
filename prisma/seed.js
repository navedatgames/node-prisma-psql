const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient()

async function main() {
  const user = await prisma.user.create({
    data: {
      name: 'Alice',
      email: 'alice@prisma.io',
    },
  })

  const group = await prisma.group.create({
    data:{
        name:'Ongraph',
        description: 'IT Company',
        members: 300
    }
  })
    const users = await prisma.user.findMany()
  console.log(user)
//   console.log(group)

}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })