import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemClientsComponent } from './item-clients.component';

describe('ItemClientsComponent', () => {
  let component: ItemClientsComponent;
  let fixture: ComponentFixture<ItemClientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemClientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
