import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const AttributeFailureOverview = () => {
  const chartOptions = {
    chart: {
      type: 'bar',
      backgroundColor: 'transparent',
      height: 480,
      marginRight: 60, // Leave space for labels
      marginLeft: 180, // Leave space for long category names
      marginTop: 20,
      marginBottom: 50,
      spacingBottom: 15,
      spacingTop: 10,
      spacingLeft: 10,
      spacingRight: 10
    },
    title: {
      text: null
    },
    credits: {
      enabled: false
    },
    xAxis: {
      categories: [
        'RISK_MEASURE_VAL',
        'TRADE_CCY',
        'CUST_STATUS_CD',
        'FIRM_ACTI_ID',
        'BOOK_ID',
        'SETTLE_DATE',
        'NOTIONAL_AMT',
        'POSITION_QTY',
        'CUST_ID',
        'TRADE_REF_NUM'
      ],
      reversed: true, // index 0 at the top
      labels: {
        align: 'right',
        style: {
          color: '#6b7280',
          fontSize: '11px',
          fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
          fontWeight: '500',
          letterSpacing: '0.02em'
        }
      },
      lineWidth: 0,
      tickWidth: 0,
      gridLineWidth: 0
    },
    yAxis: {
      min: 0,
      max: 10,
      tickInterval: 1,
      gridLineColor: '#E6ECF4', // Thin light blue/grey vertical grid lines
      gridLineWidth: 1.5,
      title: {
        text: null
      },
      labels: {
        style: {
          color: '#6b7280',
          fontSize: '11px',
          fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif'
        }
      },
      lineWidth: 1,
      lineColor: '#D1D5DB', // Thin line at the bottom
      tickWidth: 1,
      tickColor: '#D1D5DB',
      tickLength: 6,
      opposite: false
    },
    legend: {
      enabled: false
    },
    tooltip: {
      useHTML: true,
      backgroundColor: '#1e293b',
      borderWidth: 0,
      borderRadius: 8,
      shadow: true,
      style: {
        color: '#ffffff',
        fontFamily: '"Inter", sans-serif',
        fontSize: '12px'
      },
      formatter: function () {
        return `<div style="padding: 4px 8px;">
          <strong style="color: #94a3b8; font-size: 10px; text-transform: uppercase;">${this.x}</strong><br/>
          <span style="font-size: 13px; font-weight: 600; color: #f8fafc;">Failure Rate: ${this.y}%</span>
        </div>`;
      }
    },
    plotOptions: {
      bar: {
        pointWidth: 10, // Sleek thin bars matching the design
        borderRadius: 0, // Sharp ends
        borderWidth: 0,
        groupPadding: 0.1,
        pointPadding: 0.05,
        states: {
          hover: {
            brightness: 0.1
          }
        },
        dataLabels: {
          enabled: true,
          inside: false,
          align: 'left',
          x: 8,
          verticalAlign: 'middle',
          style: {
            fontSize: '11px',
            fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
            fontWeight: '600',
            color: '#1f2937',
            textOutline: 'none'
          },
          formatter: function () {
            return this.y > 0 ? this.y.toFixed(2) + '%' : '';
          }
        }
      }
    },
    series: [
      {
        name: 'Failure Rate',
        data: [
          { y: 8.34, color: '#E13B19' }, // Warm vermillion red/orange
          { y: 5.34, color: '#E13B19' },
          { y: 2.78, color: '#E13B19' },
          { y: 0.78, color: '#1E4620' }, // Forest green
          { y: 0, color: 'transparent' },
          { y: 0, color: 'transparent' },
          { y: 0, color: 'transparent' },
          { y: 0, color: 'transparent' },
          { y: 0, color: 'transparent' },
          { y: 0, color: 'transparent' }
        ]
      }
    ]
  };

  return (
    <div>
      <div style={{
        background: '#ffffff',
        borderRadius: '24px',
        padding: '30px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.03)'
      }}>
        <h3 style={{ margin: '0 0 20px 0', fontSize: '18px', color: '#1e2243' }}>
          Attribute Failure Rate by CDE Column
        </h3>

        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      </div>
    </div>
  );
};

export default AttributeFailureOverview;
