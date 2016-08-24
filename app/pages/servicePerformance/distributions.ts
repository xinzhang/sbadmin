import { Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES, Router } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

import {DistributionService} from '../../../services/distributions.service';

@Component({
	selector : 'distributions',
	templateUrl : './pages/servicePerformance/distributions.html',
	directives: [ROUTER_DIRECTIVES],
	providers: [DistributionService]
})

export class DistributionComponent implements OnInit {
    title: string = "Distribution Performance";
    overviewPieChartDataSource:any[] = [];

    constructor(private _distService:DistributionService){        
    }

    ngOnInit() {
        this.load();        
    }

    load() {
        this._distService.list()
            .subscribe(
                data => {
                    console.log(data);
                    this.overviewPieChartDataSource = data;
                    this.showPieChart();
                }                
            )
    }

    showPieChart() {
        var distributionOverviewPieChart:any = $('#distributionOverviewPieChart');
        distributionOverviewPieChart.highcharts({
                chart: {
                    backgroundColor: null,
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false,
                    type: 'pie'
                },
                    
                title: {
                    text: 'Distribution Processing Overview',
                    style: {
                        color: '#000',
                        fontWeight: 'bold'
                    }
                },

                tooltip: {
                    pointFormat: '{series.name}: <b>{point.y}</b>',
                    percentageDecimals: 0
                },

                plotOptions: {
                    pie: {
                        //size: '60%',
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            //distance: 5,
                            enabled: true,
                            format: '{point.name}'
                        },
                        showInLegend: true
                    }
                },

                credits: {
                    enabled: false
                },                 
                    

                legend: {
                    labelFormat: '{name}: <b>{y}</b>',
                    itemStyle: {
                        color: '#000'
                    },
                    itemHoverStyle: {
                        color: '#FFF'
                    },
                    itemHiddenStyle: {
                        color: '#333'
                    }
                },

                series: [{
                    type: 'pie',
                    name: 'Test',
                    data: this.overviewPieChartDataSource,
                    events: {
                        //click: function (event) { getDetailsByCategory(event.point.name); }
                    },
                }]
            });
    }

}
