import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { PeriodicTunerStatusService } from '../../../shared/services/tv-performance/periodic-tuner-status/periodic-tuner-status.service';
import { TvPerformanceDataService } from '../../../shared/services/tv-performance/tv-performance-data.service';

@Component({
  selector: 'app-periodic-tuner-status',
  templateUrl: './periodic-tuner-status.component.html',
  styleUrls: ['./periodic-tuner-status.component.css']
})
export class PeriodicTunerStatusComponent implements OnInit {

  tableData = [];
  flightDetails: any;
  dataSource: any = [];
  displayedColumns = [];
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    private periodicTunerService: PeriodicTunerStatusService,
    private dataService: TvPerformanceDataService
  ) { }

  ngOnInit() {
    this.dataService.getData().subscribe(data => {
      if (data['id'] && data['icao']) {
        this.flightDetails = data;
        this.getPeriodicTunerData();
      }
    });
  }

  getPeriodicTunerData() {
    this.periodicTunerService.getPeriodicTunerDetails(this.flightDetails['id'], this.flightDetails['icao']).subscribe(
      res => {
        if (res.length) {
          this.tableData = res;
          for (const key in this.tableData[0]) {
            if (!this.displayedColumns.includes('key')) {
              this.displayedColumns.push(key);
            }
          }
        }
      }, err => console.log(err));
  }

}
