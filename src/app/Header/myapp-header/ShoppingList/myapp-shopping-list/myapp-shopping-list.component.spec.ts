import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyappShoppingListComponent } from './myapp-shopping-list.component';

describe('MyappShoppingListComponent', () => {
  let component: MyappShoppingListComponent;
  let fixture: ComponentFixture<MyappShoppingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyappShoppingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyappShoppingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
