import { BlankPageModule } from './blank-page.module';

describe('ClienteModule', () => {
    let blankPageModule: BlankPageModule;

    beforeEach(() => {
        blankPageModule = new BlankPageModule();
    });

    it('should create an instance', () => {
        expect(blankPageModule).toBeTruthy();
    });
});
