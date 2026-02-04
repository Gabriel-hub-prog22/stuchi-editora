import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
    extends PrismaClient
    implements OnModuleInit, OnModuleDestroy {
    async onModuleInit() {
        // Prevent connection errors from crashing the app startup
        // We do NOT await the connection here to allow the HTTP server to start immediately
        // Prisma will connect lazily on the first request
        this.$connect().catch((error) => {
            console.error('Failed to connect to database during bootstrap:', error);
        });
    }

    async onModuleDestroy() {
        await this.$disconnect();
    }
}
