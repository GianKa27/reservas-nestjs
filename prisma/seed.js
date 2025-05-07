const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const users = [
    prisma.user.create({
      data: { correo: 'maria.gomez@example.com', nombre: 'María Gómez' },
    }),
    prisma.user.create({
      data: { correo: 'juan.perez@example.com', nombre: 'Juan Pérez' },
    }),
    prisma.user.create({
      data: { correo: 'laura.martinez@example.com', nombre: 'Laura Martínez' },
    }),
    prisma.user.create({
      data: { correo: 'pedro.garcia@example.com', nombre: 'Pedro García' },
    }),
    prisma.user.create({
      data: {
        correo: 'sofia.rodriguez@example.com',
        nombre: 'Sofía Rodríguez',
      },
    }),
    prisma.user.create({
      data: { correo: 'luis.flores@example.com', nombre: 'Luis Flores' },
    }),
    prisma.user.create({
      data: { correo: 'carla.mendez@example.com', nombre: 'Carla Méndez' },
    }),
    prisma.user.create({
      data: { correo: 'jorge.sanchez@example.com', nombre: 'Jorge Sánchez' },
    }),
    prisma.user.create({
      data: { correo: 'ana.castro@example.com', nombre: 'Ana Castro' },
    }),
    prisma.user.create({
      data: { correo: 'miguel.vargas@example.com', nombre: 'Miguel Vargas' },
    }),
  ];

  const spaces = [
    prisma.space.create({
      data: { nombre: 'Salón A', status: true },
    }),
    prisma.space.create({
      data: { nombre: 'Salón B', status: true },
    }),
    prisma.space.create({
      data: { nombre: 'Auditorio Principal', status: true },
    }),
    prisma.space.create({
      data: { nombre: 'Sala de Conferencias', status: true },
    }),
    prisma.space.create({
      data: { nombre: 'Espacio Abierto', status: true },
    }),
    prisma.space.create({
      data: { nombre: 'Salón de Eventos VIP', status: true },
    }),
    prisma.space.create({
      data: { nombre: 'Zona de Comidas', status: true },
    }),
    prisma.space.create({
      data: { nombre: 'Salón de Exposiciones', status: true },
    }),
    prisma.space.create({
      data: { nombre: 'Área de Networking', status: true },
    }),
    prisma.space.create({
      data: { nombre: 'Auditorio Secundario', status: true },
    }),
  ];

  await Promise.all([...users, ...spaces]);

  console.log('Seeder ejecutado exitosamente');
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
