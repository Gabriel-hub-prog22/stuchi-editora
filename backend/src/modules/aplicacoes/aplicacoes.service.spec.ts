import { Test, TestingModule } from '@nestjs/testing';
import { AplicacoesService } from './aplicacoes.service';

describe('AplicacoesService', () => {
  let service: AplicacoesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AplicacoesService],
    }).compile();

    service = module.get<AplicacoesService>(AplicacoesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
