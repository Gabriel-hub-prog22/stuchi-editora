import { IsDateString, IsNotEmpty, IsUrl } from 'class-validator';

export class CreatePodcastDto {
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    description: string;

    @IsNotEmpty() // Can be an iframe string or URL, usually just URL if strictly url, but youtube embeds are sometimes iframes. User said "youtubeEmbedUrl" - assuming URL.
    // Actually, usually it's the src URL. I'll stick to IsString to be safe or IsUrl if strict. Let's use IsString to allow flexibility if they paste full iframe code (though name says Url).
    // Let's assume URL for now.
    @IsUrl()
    youtubeEmbedUrl: string;

    @IsDateString()
    publishedAt: string; // ISO 8601 string
}
