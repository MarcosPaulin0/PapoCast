import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkCssComponent } from './link-css.component';

describe('LinkCssComponent', () => {
  let component: LinkCssComponent;
  let fixture: ComponentFixture<LinkCssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkCssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
