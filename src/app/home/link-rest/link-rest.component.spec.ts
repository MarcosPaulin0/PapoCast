import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkRestComponent } from './link-rest.component';

describe('LinkRestComponent', () => {
  let component: LinkRestComponent;
  let fixture: ComponentFixture<LinkRestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkRestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkRestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
