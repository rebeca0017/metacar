import { ClienteModule } from './cliente.module';

describe('MantenimientoModule', () => {
    let blankPageModule: ClienteModule;

    beforeEach(() => {
        blankPageModule = new ClienteModule();
    });

    it('should create an instance', () => {
        expect(blankPageModule).toBeTruthy();
    });
});
