import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkHtmlComponent } from './link-html.component';

describe('LinkHtmlComponent', () => {
  let component: LinkHtmlComponent;
  let fixture: ComponentFixture<LinkHtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkHtmlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
