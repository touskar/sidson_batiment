import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatimentLayoutComponent } from './batiment-layout.component';

describe('BatimentLayoutComponent', () => {
  let component: BatimentLayoutComponent;
  let fixture: ComponentFixture<BatimentLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatimentLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatimentLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
