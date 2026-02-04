import { IsNotEmpty, IsNumber, IsOptional, IsString, IsUrl, Min } from 'class-validator';

export class CreateLivroDto {
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    authors: string;

    @IsNotEmpty()
    description: string;

    @IsNumber()
    @Min(0)
    price: number;

    @IsOptional()
    @IsUrl()
    link?: string;

    @IsOptional()
    @IsUrl()
    coverImage?: string;

    @IsOptional()
    @IsString()
    status?: string; // 'published' | 'coming_soon'
}
