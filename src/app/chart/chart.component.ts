import { Component, OnInit } from '@angular/core';
import { userData } from '../modal/interface';
import { UserdataService } from '../Services/userdata.service';
import { Chart, LogarithmicScale, registerables } from 'chart.js';
import { ApidataService } from '../Services/apidata.service';
import ChartDataLabels from 'chartjs-plugin-datalabels';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit {
  data!: userData[];
  userdata: any;
  amount: any;
  category: any;
  index: any;
  repeated_ele: any;
  amt: any;
  myChart: any = [];
  category_label: any[] = [
    'Accelerator',
    'Admin',
    'Comm',
    'Forum',
    'Finance',
    'GSEA',
    'Integration',
    'Leader',
    'Learn',
    'Member',
    'Mentorship',
    'MyEO',
    'SPA',
  ];
  constructor(
    private service: UserdataService,
    private apiservice: ApidataService
  ) {
    Chart.register(...registerables);
    // Chart.register(ChartDataLabels);
  }
  ngOnInit(): void {
    this.service.getUserdata().subscribe((allData) => {
      this.userdata = allData;
      this.amt = this.userdata.map((category: userData) => category.amount);
      this.category = this.userdata.map(
        (category: userData) => category.eo_category
      );
      this.amount = this.category_label.map((category: userData) => {
        this.index = this.category.indexOf(category);
        if (this.index !== -1) return this.userdata[this.index].amount;
        return null;
      });
      this.repeated_ele = this.category.reduce(
        (a: any, b: string | number, i: string | number) => {
          if (!a.hasOwnProperty(b)) {
            a[b] = 0;
          }
          a[b] += Number(this.amt[i]);
          return a;
        },
        {}
      );
      this.chartData();
    });
  }
  chartData() {
    this.myChart = new Chart('myChart', {
      type: 'bar',
      data: {
        labels: this.category_label,
        datasets: [
          {
            label: 'Category',
            data: [
              1500, 1900, 1500, 1500, 1600, 1550, 1700, 1800, 1750, 1850, 1900,
              1500, 1800,
            ],

            // backgroundColor: '#0196FD',
            // borderColor: '#0196FD',
            // borderWidth: 1,
          },
          {
            label: 'Investment',
            data: this.repeated_ele,
            // backgroundColor: '#FFAF00',
            // borderColor: '#FFAF00',
            // borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,

        scales: {
          x: {
            //stacked: true
            //beginAtZero: false,
          },
          y: {
            //stacked: true,
            beginAtZero: true,
          },
        },
      },
      // plugins: [ChartDataLabels],
    });
  }

}
