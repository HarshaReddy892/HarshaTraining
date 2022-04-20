import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveBooksComponent } from './save-books.component';

describe('SaveBooksComponent', () => {
  let component: SaveBooksComponent;
  let fixture: ComponentFixture<SaveBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
