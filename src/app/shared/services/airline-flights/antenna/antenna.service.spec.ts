import { TestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { AntennaService } from './antenna.service';

describe('AntennaService', () => {
  const mockResponse = {
    'flightLeg': {
        'id': '1',
        'flightNumber': '28',
        'departureAirport': 'LAX',
        'arrivalAirport': 'JFK',
        'startTime': '2019-01-14T21:32:15Z',
        'endTime': '2019-01-15T04:52:39Z'
    },
    'flightPhases': [
        {
            'flightPhaseId': '4',
            'flightPhaseDescription': 'CLIMB',
            'startTime': '2019-01-14T22:47:41',
            'endTime': '2019-01-14T22:48:21'
        },
        {
            'flightPhaseId': '5',
            'flightPhaseDescription': 'CRUISE',
            'startTime': '2019-01-14T22:48:21Z',
            'endTime': '2019-01-15T03:46:11Z'
        }
    ],
    'kaEvents': [
        {
            'eventType': 'CRUEventHealth',
            'eventName': 'HotspotEnable',
            'eventData': '1',
            'eventTime': '2019-01-14T23:15:46Z'
        }
    ]
};
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ],
    providers: [AntennaService]
  }));

  it('should be created', () => {
    const service: AntennaService = TestBed.get(AntennaService);
    expect(service).toBeTruthy();
  });

  it(
    'should get tail list',
    inject(
        [HttpTestingController, AntennaService],
        (httpMock: HttpTestingController, service: AntennaService) => {
          const params = {
            airlineIcao: 'aal',
            tailNumber: 'N9002U',
            flightLegId: '1'
          };
          service.getKAlogDetails(params).subscribe(() => {
                const mockReq = httpMock.expectOne('http://example.com');

                expect(mockReq.cancelled).toBeFalsy();
                expect(mockReq.request.responseType).toEqual('json');
                mockReq.flush(mockResponse);

                httpMock.verify();
            });
        }
    )
);

it('setFlightNumber should be defined', () => {
    const service: AntennaService = TestBed.get(AntennaService);
    service.setFlightNumber({flightLeg: {flightNumber: '100'}});
    expect(service.setFlightNumber).toBeDefined();
});

});

