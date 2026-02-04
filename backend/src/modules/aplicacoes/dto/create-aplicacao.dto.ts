import { IsEmail, IsNotEmpty, IsOptional, ValidateIf } from 'class-validator';

export class CreateAplicacaoDto {
    @IsNotEmpty()
    name: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    genre: string;

    @ValidateIf((o) => o.genre === 'outro')
    @IsNotEmpty({ message: 'Se o gênero for "outro", specifique qual.' })
    otherGenre?: string;

    @IsNotEmpty()
    pitch: string;
}
