import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridBostonMarathonComponent } from './grid-boston-marathon.component';

describe('GridBostonMarathonComponent', () => {
  let component: GridBostonMarathonComponent;
  let fixture: ComponentFixture<GridBostonMarathonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridBostonMarathonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridBostonMarathonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
