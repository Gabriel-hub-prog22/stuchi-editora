import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('Bootstrap');
  try {
    const app = await NestFactory.create(AppModule);

    // CORS Configuration
    app.enableCors({
      origin: '*',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      credentials: true,
    });

    // Global Validation Pipe
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
      }),
    );

    // Graceful shutdown
    app.enableShutdownHooks();

    const port = process.env.PORT || 3000;

    await app.listen(port, '0.0.0.0');

    const url = await app.getUrl();
    logger.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
    logger.log(`Listening on port: ${port}`);
    logger.log(`Application is running on: ${url}`);
  } catch (error) {
    logger.error('Fatal error during application bootstrap', error);
    process.exit(1);
  }
}
bootstrap();
