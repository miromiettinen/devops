import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppComponent,
        RouterTestingModule,
        MatToolbarModule,
        MatIconModule
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'angular-example' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-example');
  });

  it('should render toolbar text correctly', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const toolbarText = 'Ohjelmistokehitysprosessin automatisointi -opintojakson harjoitusprojekti';
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    // varmistetaan, että toolbar-teksti näkyy jossain mat-toolbar-elementissä
    const toolbar = compiled.querySelector('mat-toolbar');
    expect(toolbar?.textContent?.trim()).toContain(toolbarText);
  });
});