import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ReservationsService {
  constructor(private readonly prisma: PrismaService) {}

  async createReservation(data: {
    userId: number;
    spaceId: number;
    startDate: Date;
    endDate: Date;
  }) {
    return await this.prisma.reservation.create({
      data,
    });
  }

  async getUsers() {
    return await this.prisma.user.findMany();
  }

  async getSpaces() {
    return await this.prisma.space.findMany();
  }

  async cancelReservation(id: number) {
    return await this.prisma.reservation.update({
      where: { id },
      data: { status: false },
    });
  }

  async getReservations(filters: {
    userId?: number;
    spaceId?: number;
    startDate?: Date;
    endDate?: Date;
  }) {
    // const where: Prisma.ReservationWhereInput = {
    //   status: true,
    // };

    // if (filters.userId !== null && filters.userId !== undefined) {
    //   where.userId = filters.userId;
    // }

    // if (filters.spaceId !== null && filters.spaceId !== undefined) {
    //   where.spaceId = filters.spaceId;
    // }

    // // Ajustar startDate y endDate si se proporcionan
    // if (
    //   filters.startDate instanceof Date &&
    //   !isNaN(filters.startDate.getTime())
    // ) {
    //   // Normalizamos la startDate para que sea a las 00:00:00 del día
    //   const startDateNormalized = new Date(filters.startDate);
    //   startDateNormalized.setHours(0, 0, 0, 0); // Establece a las 00:00:00
    //   where.startDate = { gte: startDateNormalized };
    // }

    // if (filters.endDate instanceof Date && !isNaN(filters.endDate.getTime())) {
    //   // Normalizamos la endDate para que sea a las 23:59:59 del día
    //   const endDateNormalized = new Date(filters.endDate);
    //   endDateNormalized.setHours(23, 59, 59, 999); // Establece a las 23:59:59
    //   where.endDate = { lte: endDateNormalized };
    // }
    return await this.prisma.reservation.findMany({
      where: {
        status: true,
      },
      include: {
        user: true,
        space: true,
      },
    });
  }
}
