import { Component } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'echart';
  // chartOption: EChartsOption = {};

  ngOnInit(): void {
    // this.initializeEchart();
  }
}
