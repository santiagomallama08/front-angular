import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearSerieComponent } from './crear-serie.component';

describe('CrearSerieComponent', () => {
  let component: CrearSerieComponent;
  let fixture: ComponentFixture<CrearSerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearSerieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrearSerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
