import { SampleAngularLibraryModule } from './sample-angular-library.module';

describe(SampleAngularLibraryModule, () => {
  it('Test', () => {
    expect(new SampleAngularLibraryModule()).toBeTruthy();
  });
});
