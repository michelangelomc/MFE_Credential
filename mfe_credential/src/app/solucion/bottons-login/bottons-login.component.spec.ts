import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottonsLoginComponent } from './bottons-login.component';

describe('BottonsLoginComponent', () => {
  let component: BottonsLoginComponent;
  let fixture: ComponentFixture<BottonsLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BottonsLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottonsLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
