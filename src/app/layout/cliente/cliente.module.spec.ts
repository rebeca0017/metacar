import { ClienteModule } from './cliente.module';

describe('ClienteModule', () => {
    let blankPageModule: ClienteModule;

    beforeEach(() => {
        blankPageModule = new ClienteModule();
    });

    it('should create an instance', () => {
        expect(blankPageModule).toBeTruthy();
    });
});
