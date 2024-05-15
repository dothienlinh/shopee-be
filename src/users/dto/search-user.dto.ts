import { IsOptional, IsString } from 'class-validator';

export class SearchUsersDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  email?: string;
}