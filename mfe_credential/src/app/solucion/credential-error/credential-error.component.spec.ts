import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CredentialErrorComponent } from './credential-error.component';

describe('CredentialErrorComponent', () => {
  let component: CredentialErrorComponent;
  let fixture: ComponentFixture<CredentialErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CredentialErrorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CredentialErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
