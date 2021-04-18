import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ErrorCardComponent } from './error-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

describe('ErrorCardComponent', () => {
  let component: ErrorCardComponent;
  let fixture: ComponentFixture<ErrorCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ErrorCardComponent],
      imports: [MatCardModule, MatIconModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const compiled = fixture.nativeElement;
    expect(component).toBeTruthy();
  });

  it('should show the relevant text', async () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.mat-card-title').textContent).toContain('Oof! Error occured');
    expect(compiled.querySelector('.mat-card-subtitle').textContent).toContain('Try refreshing');
    expect(compiled.querySelector('.mat-card-content p').textContent).toContain(
      "I don't know why you're not looking at my fancy component view to display a link to a playlist, but as you're not, please enjoy this image of a cute kitten."
    );
  });

  it('should show cute kittens', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.mat-card-image').alt).toContain('Cute kittens!');
    expect(compiled.querySelector('.mat-card-image').src).toContain('/assets/cute-kittens.jpg');
  });
});
