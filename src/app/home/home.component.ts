import {Component, OnInit} from '@angular/core';
import {RequestService} from "../_services/requests-service/request.service";
import {Chart, ChartConfiguration, ChartDataset} from "chart.js";
import {UsersService} from "../users.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit{
  numberOfUsers: number;

  data: any[] = [];

  barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [],
    datasets: []
  };
  chartOptions: any = {
    responsive: true,
    scales: {
      y: {
        ticks: {
          stepSize: 10, // Set the step size between values on the x-axis
        },
      },
    }
    // Add other chart options based on your requirements
  };

  constructor(private requestService: RequestService, private userService: UsersService) {
    this.numberOfUsers = 10;
  }
  ngOnInit(): void {
    this.getRequestStatusCount();
    this.getRequestByCreationDateAndTypeRequest();
    this.getCountUser();
  }


  getRequestStatusCount()
  {
    this.requestService.getRequestStatusCount().subscribe(data => {
      this.data = Object.values(data);
    });
  }

  getRequestByCreationDateAndTypeRequest()
  {
    this.requestService.getRequestByCreationDateAndTypeRequestCount().subscribe(data => {
      this.barChartData = this.prepareBarChartData(data);
    })
  }

  getCountUser()
  {
    this.userService.getCountUserList().subscribe(data => {
      this.numberOfUsers = data;
    })
  }
  private prepareBarChartData(data: any): ChartConfiguration<'bar'>['data'] {
    let labels: string[] = [];
    const datasets: any= [];

    // Collect all unique typeRequest keys
    const typeRequests = new Set<string>();
    for (const dateGroupKey of Object.keys(data)) {
      const typeRequestData = data[dateGroupKey];
      for (const typeRequestKey of Object.keys(typeRequestData)) {
        typeRequests.add(typeRequestKey);
      }
    }

    // Create an initial dataset for each unique typeRequest
    for (const typeRequest of typeRequests) {
      datasets.push({
        label: typeRequest,
        data: [],
      });
    }

    for (const dateGroupKey of Object.keys(data)) {
      labels.push(dateGroupKey);
      const typeRequestData: any = data[dateGroupKey];

      // Fill in counts for each unique typeRequest for this date
      for (const dataset of datasets) {
        const count = typeRequestData[dataset.label] || 0;
        dataset.data.push(count);
      }
    }
    labels = labels.sort((a, b) => new Date(a).getTime() - new Date(b).getTime());

    return { labels, datasets };
  }




}
