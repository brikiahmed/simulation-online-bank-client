import { Component, Input } from '@angular/core';
import {ChartOptions} from "chart.js";

@Component({
  selector: 'app-stats-chart',
  template: `
    <div style="display: block">
      <canvas baseChart
              [type]="'pie'"
              [datasets]="pieChartDatasets"
              [labels]="pieChartLabels"
              [options]="pieChartOptions"
              [plugins]="pieChartPlugins"
              [legend]="pieChartLegend">
      </canvas>
    </div>
  `
})
export class StatChartComponent {
  @Input()   public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  @Input() pieChartDatasets: any[] = [];
  @Input() pieChartPlugins: any[] = [];
  @Input() pieChartLabels: any[] = [];
  @Input() chartType: string = 'bar';
  public pieChartLegend = true;

  chartOptions: any = {
    responsive: true
    // Add other options based on your requirements
  };
}
