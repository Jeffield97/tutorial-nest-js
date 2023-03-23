import { Controller, Get } from '@nestjs/common';
import {
    HealthCheckService, DiskHealthIndicator,
    HealthCheck,
    TypeOrmHealthIndicator,
    MemoryHealthIndicator,
} from '@nestjs/terminus';

@Controller('health')
export class HealthController {
    constructor(
        private health: HealthCheckService,
        private dbIndicator: TypeOrmHealthIndicator,
        private memoryIndicator: MemoryHealthIndicator,
        private diskHealthIndicator: DiskHealthIndicator,
    ) { }

    @Get()
    // @HealthCheck()
    check() {
        return this.health.check([
            () => this.dbIndicator.pingCheck('database'),
            () => this.memoryIndicator.checkHeap('heap', 50 * 1024 * 1024), // process < 50MB 
            () => this.memoryIndicator.checkRSS('memory', 150 * 1024 * 1024), // process < 150MB 
            // () =>
            //     this.diskHealthIndicator.checkStorage('disk <5> health', {
            //         thresholdPercent: 0.75,
            //         path: '/',
            //     }),
        ]);
    }
}