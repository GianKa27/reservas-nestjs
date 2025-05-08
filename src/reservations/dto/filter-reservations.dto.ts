import { IsInt, IsOptional, IsISO8601 } from 'class-validator';
import { Type, Transform } from 'class-transformer';

export class FilterReservationsDto {
  @IsInt()
  @IsOptional()
  @Type(() => Number)
  userId?: number;

  @IsInt()
  @IsOptional()
  @Type(() => Number)
  spaceId?: number;

  //   @Transform(({ value }) => value.replace(' ', 'T') + 'Z')
  @IsOptional()
  @Type(() => Date)
  startDate?: Date;

  //   @Transform(({ value }) => value.replace(' ', 'T') + 'Z')
  @IsOptional()
  @Type(() => Date)
  endDate?: Date;
}
