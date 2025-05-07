import { IsInt, IsOptional, IsDateString } from 'class-validator';
import { Type } from 'class-transformer';

export class FilterReservationsDto {
  @IsInt()
  @IsOptional()
  @Type(() => Number)
  userId?: number;

  @IsInt()
  @IsOptional()
  @Type(() => Number)
  spaceId?: number;

  @IsDateString()
  @IsOptional()
  startDate?: Date;

  @IsDateString()
  @IsOptional()
  endDate?: Date;
}
