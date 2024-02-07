import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeedsComponent } from './seeds.component';

describe('SeedsComponent', () => {
  let component: SeedsComponent;
  let fixture: ComponentFixture<SeedsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeedsComponent]
    });
    fixture = TestBed.createComponent(SeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
