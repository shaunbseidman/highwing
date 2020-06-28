import React from 'react';
import {Pie, Doughnut} from 'react-chartjs-2';

export default function PieChart (props) {
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
      <div>
        <Doughnut
          data={data}
          options={{
            title:{
              display:true,
              fontSize:20
            },
            legend:{
              display:true,
              position:'left'
            }
          }}
        />
      </div>
    );
}