import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmdServersComponent } from './cmd-servers.component';

describe('CmdServersComponent', () => {
  let component: CmdServersComponent;
  let fixture: ComponentFixture<CmdServersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmdServersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmdServersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
