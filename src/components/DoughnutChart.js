import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import  '../styles/chart.scss';

export default function DoughnutChart (props) {
    const graphData = props
    const graphNumbers = graphData.data
    const graphTitle = graphData.title
    const data = {
        labels: graphTitle,
        datasets: [
          {
            label: 'Rainfall',
            backgroundColor: [
              '#6ae355',
              '#163c3f',
              '#59b0b2',
              '#6de5cc',
              '#5dca6c'
            ],
            hoverBackgroundColor: [
            '#501800',
            '#4B5000',
            '#175000',
            '#003350',
            '#35014F'
            ],
            data: graphNumbers
          }
        ]
      }

    return (
      <div className="doughnutChart">
        <h3 className="chartTitles">{graphData.chartTitle}</h3>
        <Doughnut
          data={data}
          options={{
            title:{
              display:true,
              fontSize: 35
            },
            percentageInnerCutout: 40,
            cutoutPercentage: 73,
            legend:{
              display:true,
              position:'left',
              labels: {
                boxWidth: 10,
                usePointStyle: true
              }
            },
          }}
        />
      </div>
    );
}