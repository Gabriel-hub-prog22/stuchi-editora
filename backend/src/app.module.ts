import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { AplicacoesModule } from './modules/aplicacoes/aplicacoes.module';
import { LivrosModule } from './modules/livros/livros.module';
import { ImprensaModule } from './modules/imprensa/imprensa.module';
import { PodcastModule } from './modules/podcast/podcast.module';

@Module({
  imports: [AuthModule, UsersModule, PrismaModule, AplicacoesModule, LivrosModule, ImprensaModule, PodcastModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
