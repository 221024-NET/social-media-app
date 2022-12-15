import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostSummaryComponent } from './post-summary.component';

describe('PostSummaryComponent', () => {
  let component: PostSummaryComponent;
  let fixture: ComponentFixture<PostSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
