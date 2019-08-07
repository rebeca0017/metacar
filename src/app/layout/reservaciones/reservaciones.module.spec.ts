import { ReservacionesModule } from './reservaciones.module';

describe('MantenimientoModule', () => {
    let blankPageModule: ReservacionesModule;

    beforeEach(() => {
        blankPageModule = new ReservacionesModule();
    });

    it('should create an instance', () => {
        expect(blankPageModule).toBeTruthy();
    });
});
