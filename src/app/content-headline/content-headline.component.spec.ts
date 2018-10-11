import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentHeadlineComponent } from './content-headline.component';

describe('ContentHeadlineComponent', () => {
  let component: ContentHeadlineComponent;
  let fixture: ComponentFixture<ContentHeadlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentHeadlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentHeadlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
