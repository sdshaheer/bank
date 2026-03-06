import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const JobSummary = () => {
    const options = {
        chart: {
            type: 'pie',
            height: 180,
            backgroundColor: 'transparent',
        },
        title: {
            text: '3693',
            align: 'center',
            verticalAlign: 'middle',
            y: 10,
            style: {
                fontSize: '18px',
                fontWeight: 'bold',
            }
        },
        plotOptions: {
            pie: {
                innerSize: '70%',
                dataLabels: {
                    enabled: true,
                    format: '{point.name}: {point.y}',
                    distance: 10,
                    style: {
                        fontSize: '10px',
                        textOutline: 'none'
                    }
                },
                showInLegend: false
            }
        },
        series: [{
            name: 'Jobs',
            data: [
                { name: 'Pending', y: 613, color: '#4338ca' },
                { name: 'Failed', y: 1180, color: '#b91c1c' },
                { name: 'Delivered', y: 1900, color: '#15803d' }
            ]
        }],
        credits: { enabled: false }
    };

    return (
        <div className="dashboard-card job-summary">
            <h3>Overall Job Summary</h3>
            <div className="job-summary-content">
                <div className="job-summary-top">
                    <HighchartsReact highcharts={Highcharts} options={options} />
                </div>
                <div className="status-grid-container-wrapper">
                    <div className="status-grid-container">
                        <div className="status-grid-header">
                            <div className="header-item pending"><span>Pending</span> <span>613</span></div>
                            <div className="header-item failed"><span>Failed</span> <span style={{ textDecoration: 'underline' }}>1180</span></div>
                            <div className="header-item delivered"><span>Delivered</span> <span style={{ textDecoration: 'underline' }}>1900</span></div>
                        </div>
                        <div className="status-grid-body">
                            <div className="body-group">
                                <div className="stat-box pending">
                                    <span className="stat-label">Within SLA</span>
                                    <span className="stat-value pending">6</span>
                                </div>
                                <div className="stat-box pending">
                                    <span className="stat-label">SLA Breach</span>
                                    <span className="stat-value failed">607</span>
                                </div>
                            </div>
                            <div className="body-group">
                                <div className="stat-box failed">
                                    <span className="stat-label">Within SLA</span>
                                    <span className="stat-value failed">610</span>
                                </div>
                                <div className="stat-box failed">
                                    <span className="stat-label">SLA Breach</span>
                                    <span className="stat-value failed">1180</span>
                                </div>
                            </div>
                            <div className="body-group">
                                <div className="stat-box delivered">
                                    <span className="stat-label">Within SLA</span>
                                    <span className="stat-value delivered">1800</span>
                                </div>
                                <div className="stat-box delivered">
                                    <span className="stat-label">SLA Breach</span>
                                    <span className="stat-value failed" style={{ color: '#b45309' }}>100</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobSummary;
