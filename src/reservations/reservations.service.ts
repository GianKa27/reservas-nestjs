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
    const where: Prisma.ReservationWhereInput = {
      status: true,
      ...(filters.userId && { userId: filters.userId }),
      ...(filters.spaceId && { spaceId: filters.spaceId }),
      ...(filters.startDate && { startDate: { gte: filters.startDate } }),
      ...(filters.endDate && { endDate: { lte: filters.endDate } }),
    };

    return await this.prisma.reservation.findMany({
      where: where,
      include: {
        user: true,
        space: true,
      },
    });
  }
}
