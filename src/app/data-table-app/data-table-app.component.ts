import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

export interface Elements {
  icon: string;
  Country: string;
  Confirmed: string;
  Recovered: string;
  Deaths: string;
}

const COVID_CASES: Elements[] = [
  { icon: "flag-icon flag-icon-us flag-icon-squared", Country: 'USA', Confirmed: '6,045,068', Recovered: '3,345,188', Deaths: '184,764' },
  { icon: "flag-icon flag-icon-br flag-icon-squared", Country: 'Brazil', Confirmed: '3,764,493', Recovered: '2,2947,240', Deaths: '118,726' },
  { icon: "flag-icon flag-icon-in flag-icon-squared", Country: 'India', Confirmed: '3,384,575', Recovered: '2,583,063', Deaths: '61,694' },
  { icon: "flag-icon flag-icon-ru flag-icon-squared", Country: 'Russia', Confirmed: '975,576', Recovered: '792,561', Deaths: '16,804' },
  { icon: "flag-icon flag-icon-za flag-icon-squared", Country: 'South Africa', Confirmed: '618,286', Recovered: '531,388', Deaths: '13,628' },
  { icon: "flag-icon flag-icon-pe flag-icon-squared", Country: 'Peru', Confirmed: '614,378', Recovered: '421,877', Deaths: '28,124' },
  { icon: "flag-icon flag-icon-co flag-icon-squared", Country: 'Colombia', Confirmed: '582,022', Recovered: '417,793', Deaths: '18,468' },
  { icon: "flag-icon flag-icon-mx flag-icon-squared", Country: 'Mexico', Confirmed: '573,888', Recovered: '396,758', Deaths: '62,076' },
  { icon: "flag-icon flag-icon-es flag-icon-squared", Country: 'Spain', Confirmed: '451,792', Recovered: '7,015', Deaths: '28,996' },
  { icon: "flag-icon flag-icon-cl flag-icon-squared", Country: 'Chile', Confirmed: '404,102', Recovered: '377,922', Deaths: '11,072' },
  { icon: "flag-icon flag-icon-ar flag-icon-squared", Country: 'Argentina', Confirmed: '380,292', Recovered: '274,458', Deaths: '8,050' },
];

@Component({
  selector: 'app-data-table-app',
  templateUrl: './data-table-app.component.html',
  styleUrls: ['./data-table-app.component.css']
})
export class DataTableAppComponent implements OnInit {

  displayedColumns: string[] = ['icon', 'Country', 'Confirmed', 'Recovered', 'Deaths'].map(x=> this.translateService.instant(x));
  dataSource = COVID_CASES;

  constructor(public translateService:TranslateService) { }

  ngOnInit(): void {
  }

}
