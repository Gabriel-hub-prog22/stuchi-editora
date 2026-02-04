import { IsBoolean, IsNotEmpty, IsOptional, IsUrl } from 'class-validator';

export class CreateImprensaDto {
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    mediaOutlet: string;

    @IsNotEmpty()
    summary: string;

    @IsUrl()
    link: string;

    @IsOptional()
    @IsBoolean()
    isHighlight?: boolean;
}
