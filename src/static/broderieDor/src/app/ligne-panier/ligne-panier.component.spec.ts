import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LignePanierComponent } from './ligne-panier.component';

describe('LignePanierComponent', () => {
  let component: LignePanierComponent;
  let fixture: ComponentFixture<LignePanierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LignePanierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LignePanierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
