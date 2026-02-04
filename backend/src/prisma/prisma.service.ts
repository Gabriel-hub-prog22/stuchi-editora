import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
    extends PrismaClient
    implements OnModuleInit, OnModuleDestroy {
    async onModuleInit() {
        // Prevent connection errors from crashing the app startup
        try {
            await this.$connect();
        } catch (error) {
            console.error('Failed to connect to database during bootstrap:', error);
        }
    }

    async onModuleDestroy() {
        await this.$disconnect();
    }
}
