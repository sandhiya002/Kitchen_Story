import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsideComponent } from './clientside.component';

describe('ClientsideComponent', () => {
  let component: ClientsideComponent;
  let fixture: ComponentFixture<ClientsideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientsideComponent]
    });
    fixture = TestBed.createComponent(ClientsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
