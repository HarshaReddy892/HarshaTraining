import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRequestedBooksComponent } from './show-requested-books.component';

describe('ShowRequestedBooksComponent', () => {
  let component: ShowRequestedBooksComponent;
  let fixture: ComponentFixture<ShowRequestedBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowRequestedBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowRequestedBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
