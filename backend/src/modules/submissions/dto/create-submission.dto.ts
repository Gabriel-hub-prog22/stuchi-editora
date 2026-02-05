import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateSubmissionDto {
    @IsNotEmpty()
    @IsString()
    nome: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    @IsString()
    genero: string;

    @IsNotEmpty()
    @IsString()
    pitch: string;
}
