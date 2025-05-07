import {
  Controller,
  Post,
  Body,
  Param,
  Delete,
  Query,
  Get,
} from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { FilterReservationsDto } from './dto/filter-reservations.dto';

@Controller('reservations')
export class ReservationsController {
  constructor(private readonly reservationsService: ReservationsService) {}

  @Post()
  async create(@Body() createReservationDto: CreateReservationDto) {
    return this.reservationsService.createReservation(createReservationDto);
  }

  @Delete(':id')
  async cancel(@Param('id') id: string) {
    return this.reservationsService.cancelReservation(+id);
  }

  @Get()
  async findAll(@Query() filters: FilterReservationsDto) {
    const reservations =
      await this.reservationsService.getReservations(filters);

    return { data: reservations };
  }
}
