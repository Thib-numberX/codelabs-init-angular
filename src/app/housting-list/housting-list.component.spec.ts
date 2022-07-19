import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoustingListComponent } from './housting-list.component';

describe('HoustingListComponent', () => {
  let component: HoustingListComponent;
  let fixture: ComponentFixture<HoustingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoustingListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoustingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
