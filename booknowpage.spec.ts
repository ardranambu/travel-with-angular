import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Booknowpage } from './booknowpage';

describe('Booknowpage', () => {
  let component: Booknowpage;
  let fixture: ComponentFixture<Booknowpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Booknowpage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Booknowpage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
