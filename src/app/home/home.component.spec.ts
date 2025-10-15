import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent, MatListModule, MatButtonModule, NoopAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain three external links with correct hrefs and targets', () => {
    const compiled: HTMLElement = fixture.nativeElement;
    const links = compiled.querySelectorAll('a');

    // varmista että linkkejä on kolme
    expect(links.length).toBe(3);

    // linkkien odotetut osoitteet
    const expectedHrefs = [
      'https://angular.dev/guide/testing/components-scenarios',
      'https://testing-angular.com/introduction/#introduction',
      'https://simpleweblearning.com/form-testing-in-angular/',
    ];

    // tarkistetaan että href-arvot vastaavat odotettuja
    links.forEach((link, index) => {
      expect(link.getAttribute('href')).toBe(expectedHrefs[index]);
    });

    links.forEach(link => {
      const targetValue = link.getAttribute('target')?.replace(/[”"]/g, '"'); // poistaa mahdolliset väärät lainausmerkit
      expect(targetValue).toContain('_blank');
    });
  });
});
