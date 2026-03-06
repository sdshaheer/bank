import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const SlaChart = () => {
    const options = {
        chart: {
            type: 'column',
            height: 300,
            backgroundColor: 'transparent'
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: Array.from({ length: 24 }, (_, i) => i.toString()),
            title: {
                text: 'Job hour window (EST)',
                style: { fontSize: '10px' }
            },
            labels: { style: { fontSize: '9px' } }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Jobs count',
                style: { fontSize: '10px' }
            },
            stackLabels: {
                enabled: false
            },
            labels: {
                formatter: function () {
                    return this.value >= 1000 ? (this.value / 1000) + 'K' : this.value;
                },
                style: { fontSize: '9px' }
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            headerFormat: '<b>Hour {point.x}</b><br/>',
            pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: false
                },
                borderWidth: 0,
                pointWidth: 10
            }
        },
        series: [{
            name: 'Within SLA',
            data: [1500, 1600, 1200, 400, 1550, 600, 950, 1200, 1550, 1550, 1200, 400, 1550, 950, 1200, 1550, 1200, 500, 1550, 950, 1200, 1550, 1100, 750],
            color: '#22c55e'
        }, {
            name: 'SLA Breach',
            data: [50, 40, 30, 200, 60, 300, 50, 40, 60, 60, 40, 250, 60, 50, 40, 60, 40, 150, 60, 50, 40, 60, 50, 40],
            color: '#ef4444'
        }, {
            name: 'Pending',
            data: [100, 150, 100, 50, 120, 80, 150, 100, 120, 120, 100, 50, 120, 150, 100, 120, 100, 60, 120, 150, 100, 120, 110, 90],
            color: '#3b82f6'
        }],
        credits: { enabled: false }
    };

    return (
        <div className="dashboard-card sla-status">
            <h3>Jobs SLA status by hour</h3>
            <div className="sla-chart-container">
                <HighchartsReact highcharts={Highcharts} options={options} />
            </div>
        </div>
    );
};

export default SlaChart;
