import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { AntennaService } from '../../../shared/services/airline-flights/antenna/antenna.service';

import { FlightsComponent } from './flights.component';
import { Observable } from 'rxjs';

describe('FlightsComponent', () => {
  let component: FlightsComponent;
  let fixture: ComponentFixture<FlightsComponent>;
  let antennaService: AntennaService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightsComponent ],
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      providers: [
        AntennaService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightsComponent);
    component = fixture.componentInstance;
    antennaService = TestBed.get(AntennaService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('isActive should be defined', () => {
    component.isActive([]);
    expect(component.isActive).toBeDefined();
  });

  it('isDropdownItemActive should be defined', () => {
    component.isDropdownItemActive([['/flights']]);
    expect(component.isDropdownItemActive).toBeDefined();
  });
});
