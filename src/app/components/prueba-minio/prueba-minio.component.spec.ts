import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaMinioComponent } from './prueba-minio.component';

describe('PruebaMinioComponent', () => {
  let component: PruebaMinioComponent;
  let fixture: ComponentFixture<PruebaMinioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaMinioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaMinioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
