import { ServicioModule } from './servicio.module';

describe('MantenimientoModule', () => {
    let blankPageModule: ServicioModule;

    beforeEach(() => {
        blankPageModule = new ServicioModule();
    });

    it('should create an instance', () => {
        expect(blankPageModule).toBeTruthy();
    });
});
