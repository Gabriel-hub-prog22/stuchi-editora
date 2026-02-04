import { Test, TestingModule } from '@nestjs/testing';
import { ImprensaController } from './imprensa.controller';

describe('ImprensaController', () => {
  let controller: ImprensaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImprensaController],
    }).compile();

    controller = module.get<ImprensaController>(ImprensaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
