import { Component, OnInit } from '@angular/core';


export interface Elements {
  states: string;
  Confirmed: string;
  Recovered: string;
  Deaths: string;

}

const COVID_CASES: Elements[] = [
  { states: 'Karnataka', Confirmed: '6,045,068', Recovered: '3,345,188', Deaths: '184,764' },
  { states: 'Tamilnadu', Confirmed: '3,764,493', Recovered: '2,2947,240', Deaths: '118,726' },
  { states: 'Kerala', Confirmed: '3,384,575', Recovered: '2,583,063', Deaths: '61,694' },
  { states: 'Gujarat', Confirmed: '975,576', Recovered: '792,561', Deaths: '16,804' },
  { states: 'Bihar', Confirmed: '618,286', Recovered: '531,388', Deaths: '13,628' },
  { states: 'Punjab', Confirmed: '614,378', Recovered: '421,877', Deaths: '28,124' },
  { states: 'Uttar Pradesh', Confirmed: '582,022', Recovered: '417,793', Deaths: '18,468' },
  { states: 'Uttarakhand', Confirmed: '573,888', Recovered: '396,758', Deaths: '62,076' },
  { states: 'Telungana', Confirmed: '451,792', Recovered: '7,015', Deaths: '28,996' },
  { states: 'Tripura', Confirmed: '404,102', Recovered: '377,922', Deaths: '11,072' },
  { states: 'West Bengal', Confirmed: '380,292', Recovered: '274,458', Deaths: '8,050' },
];

@Component({
  selector: 'app-table-for-district',
  templateUrl: './table-for-district.component.html',
  styleUrls: ['./table-for-district.component.css']
})



export class TableForDistrictComponent implements OnInit {

  displayedColumns: string[] = ['states', 'Confirmed', 'Recovered', 'Deaths'];
  dataSource = COVID_CASES;

  constructor() { }

  ngOnInit(): void {

  }

  

}
