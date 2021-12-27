import { Component, ViewChild,OnInit } from '@angular/core';
import { DisplaychartService } from '../service/displaychart.service';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { Chart } from 'chart.js';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { BaseChartDirective } from 'ng2-charts';
import { Upload } from '../models/upload.model';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        maxHeight: 100
      },
      // datalabels: {
      //   formatter: (value, ctx) => {
      //     if (ctx.chart.data.labels) {
      //       return ctx.chart.data.labels[ctx.dataIndex];
      //     }
      //   },
      // },
    }
  };
  
  public pieChartLegend = true;
  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: [ 'fuel','food', 'services','travel',"Cafe" ],
    datasets: [ {
      data: [ 300, 500, 100,200 ,355]
    } ]
  };
  public pieChartType: ChartType = 'pie';
  public pieChartPlugins = [  ];

  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  constructor(private _chart: DisplaychartService, private http: HttpClient) { }
  users:Upload[]=[];
  ngOnInit(){
    this._chart.getAllCake().subscribe(data=>
      {
        this.users=data;
        console.log(this.users);
      }
    );
  //   this._chart.userDetails()
  //   .subscribe(res => {
  //     console.log(res)
  //   })
  // }
  }
}
