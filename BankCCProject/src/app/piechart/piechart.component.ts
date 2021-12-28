import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';
import * as d3Csv from 'd3';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  title = 'Barchart';
  accno = '';
  abc = '';
  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        maxHeight:100
      },
    }
  };
  public pieChartLegend = true;
  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: [ 'Convenience store','Italian restaurant', 'Clothing store','Gift shop',"Grocery store", "Toy store" ],
    datasets: [ {
      data: [ 14.83, 30.55, 27.50, 12.26,40.10, 12.60]
    } ]
  };
  public pieChartType: ChartType = 'pie';
  public pieChartPlugins = [  ];

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
  constructor() {
   
   }

   convertDataToRecords(data: any) {
    this.title = `${data[0].userName}`;
    this.accno = `${data[0].AccountNumber}`;
    let userCredit = data[0].userCredit;
    this.abc = data;
    var result:any = [];
    userCredit.reduce(function(res:any, value:any) {
      if (!res[value.activity]) {
        res[value.activity] = { activity: value.activity, amount: value.amount.slice(1) };
        result.push(res[value.activity])
      }
      return res;
    }, {});
    
    console.log(userCredit);
    
    return result;
  }  
  ngOnInit(): void {
    d3Csv.json('http://127.0.0.1:8000/').then((data) => {
      let convertedData = this.convertDataToRecords(data);
      console.log(convertedData)
    });
  }
}
