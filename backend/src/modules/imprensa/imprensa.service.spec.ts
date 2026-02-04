import { Test, TestingModule } from '@nestjs/testing';
import { ImprensaService } from './imprensa.service';

describe('ImprensaService', () => {
  let service: ImprensaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ImprensaService],
    }).compile();

    service = module.get<ImprensaService>(ImprensaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
