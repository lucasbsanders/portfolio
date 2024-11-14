import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckersBlogComponent } from './checkers-blog.component';

describe('CheckersBlogComponent', () => {
  let component: CheckersBlogComponent;
  let fixture: ComponentFixture<CheckersBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckersBlogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckersBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
