import { Test, TestingModule } from '@nestjs/testing';
import { AplicacoesController } from './aplicacoes.controller';

describe('AplicacoesController', () => {
  let controller: AplicacoesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AplicacoesController],
    }).compile();

    controller = module.get<AplicacoesController>(AplicacoesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
