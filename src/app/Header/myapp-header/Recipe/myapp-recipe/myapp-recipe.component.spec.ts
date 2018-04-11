import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyappRecipeComponent } from './myapp-recipe.component';

describe('MyappRecipeComponent', () => {
  let component: MyappRecipeComponent;
  let fixture: ComponentFixture<MyappRecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyappRecipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyappRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
