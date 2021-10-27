import React from 'react'
import { Container, Tooltip } from '@mui/material'
import { Line } from 'react-chartjs-2'

const data = {
    labels: ['10/1', '10/2', '10/3', '10/4', '10/5', '10/6'],
    datasets: [
      {
        label: '# of Purchases',
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
        yAxisID: 'y-axis-1',
      },
      {
        label: 'Avg. Price of Purchases',
        data: [1, 2, 1, 1, 2, 2],
        fill: false,
        backgroundColor: 'rgb(54, 162, 235)',
        borderColor: 'rgba(54, 162, 235, 0.2)',
        yAxisID: 'y-axis-2',
      },
    ],
  };

const options = {
  scales: {
    yAxes: [
      {
        type: 'linear',
        display: true,
        position: 'left',
        id: 'y-axis-1',
      },
      {
        type: 'linear',
        display: true,
        position: 'right',
        id: 'y-axis-2',
        gridLines: {
          drawOnArea: false,
        },
      },
    ],
  },
};

const Chart = () => {
    return (
        <Tooltip title='Price and Volume Data of Opensea Trading Activity' arrow>
            <Container>
                    <Line data={data} options={options} />
            </Container>
        </Tooltip>
    )
}

export default Chart