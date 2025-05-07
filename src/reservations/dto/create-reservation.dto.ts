import { IsInt, IsDateString, Min, IsISO8601 } from 'class-validator';
import { Type, Transform } from 'class-transformer';

export class CreateReservationDto {
  @IsInt({ message: 'El ID de usuario debe ser un número entero' })
  @Min(1, { message: 'El ID de usuario debe ser mayor que 0' })
  userId: number;

  @IsInt({ message: 'El ID de espacio debe ser un número entero' })
  @Min(1, { message: 'El ID de espacio debe ser mayor que 0' })
  spaceId: number;

  @Transform(({ value }) => value.replace(' ', 'T') + 'Z')
  @IsISO8601()
  startDate: Date;

  @Transform(({ value }) => value.replace(' ', 'T') + 'Z')
  @IsISO8601()
  endDate: Date;
}
