import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeedbackComponent } from './feedback.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('FeedbackComponent', () => {
  let component: FeedbackComponent;
  let fixture: ComponentFixture<FeedbackComponent>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [
        FeedbackComponent,
        ReactiveFormsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        BrowserAnimationsModule
      ],
      providers: [{ provide: Router, useValue: spy }]
    }).compileComponents();

    fixture = TestBed.createComponent(FeedbackComponent);
    component = fixture.componentInstance;
    routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display correct h3 header text', () => {
    const h3Element: HTMLElement = fixture.nativeElement.querySelector('h3');
    expect(h3Element).toBeTruthy();
    expect(h3Element.textContent?.trim()).toBe('Heipä hei');
  });

  it('should call cancel() when Cancel button is clicked', () => {
    const cancelSpy = spyOn(component, 'cancel').and.callThrough(); // kutsutaan myös alkuperäinen metodi
    const button: HTMLButtonElement = fixture.nativeElement.querySelector('button[type="button"]')!;
    button.click();
    fixture.detectChanges();
    expect(cancelSpy).toHaveBeenCalled();
  });

  it('should navigate to home when cancel() is called', () => {
    component.cancel();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['home']);
  });
});
