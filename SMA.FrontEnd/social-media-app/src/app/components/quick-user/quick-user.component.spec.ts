import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickUserComponent } from './quick-user.component';

describe('QuickUserComponent', () => {
  let component: QuickUserComponent;
  let fixture: ComponentFixture<QuickUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuickUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
