import { MantenimientoModule } from './mantenimiento.module';

describe('MantenimientoModule', () => {
    let blankPageModule: MantenimientoModule;

    beforeEach(() => {
        blankPageModule = new MantenimientoModule();
    });

    it('should create an instance', () => {
        expect(blankPageModule).toBeTruthy();
    });
});
