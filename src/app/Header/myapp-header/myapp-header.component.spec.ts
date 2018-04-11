import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyappHeaderComponent } from './myapp-header.component';

describe('MyappHeaderComponent', () => {
  let component: MyappHeaderComponent;
  let fixture: ComponentFixture<MyappHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyappHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyappHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
