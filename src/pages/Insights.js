import React, { useState, useRef, useEffect } from 'react';
import { Typography, Button, Grid, Paper, LinearProgress,CardContent,Box } from '@mui/material';
import Chart from 'chart.js/auto';

const InsightsDashboard = () => {
  const chartRef = useRef(null);
  const barChartRef = useRef(null);
  const [chartInstances, setChartInstances] = useState([]);

  useEffect(() => {
    if (chartRef.current && barChartRef.current) {
      const chartData = {
        labels: ['New York', 'Los Angeles', 'Chicago'],
        datasets: [
          {
            label: 'Total Spend',
            data: [50000, 45000, 30000],
            backgroundColor: ['#5745f7', '#7869ff', '#9684fd'],
          },
        ],
      };

      const chartOptions = {
        responsive: true,
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 10000,
            },
          },
        },
      };

      // Destroy the previous chart instances
      chartInstances.forEach((instance) => {
        instance.destroy();
      });

      const doughnutChart = new Chart(chartRef.current, {
        type: 'doughnut',
        data: chartData,
        options: chartOptions,
      });

      const barChart = new Chart(barChartRef.current, {
        type: 'bar',
        data: chartData,
        options: chartOptions,
      });

      // Save the chart instances for future destruction
      setChartInstances([doughnutChart, barChart]);
    }
  }, []);

  const handleFieldSelect = (field) => {
    // Handle the selected field
    console.log(field);
  };

  return (
    <div>
      {/* Your component JSX code */}
      <Grid container spacing={2} style={{ padding: '1rem' }}>
        <Grid item xs={12}>
          <Paper style={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6">Total Spend</Typography>
              <canvas ref={barChartRef} width="400" height="110" style={{ maxWidth: '100%' }} />
            </CardContent>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3.5}>
          <Paper style={{ height: '100%', maxHeight: '330px' }}>
            <CardContent>
              <Typography variant="h6">Spend by Hotel Category</Typography>
              <canvas ref={chartRef} width="200" height="200" style={{ maxWidth: '100%' }} />
              <Box sx={{ marginTop: '1rem' }}>
                <Typography variant="body1">Budget: 80.00%</Typography>
                <LinearProgress
                  variant="determinate"
                  value={80}
                  sx={{
                    height: '26px',
                    borderRadius: '12px',
                    backgroundColor: '#e0e0e0',
                    '& .MuiLinearProgress-bar': {
                      backgroundColor: '#5745f7',
                    },
                  }}
                />
              </Box>
            </CardContent>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper style={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6">Spend by Cities</Typography>
              <canvas ref={chartRef} width="200" height="200" style={{ maxWidth: '100%' }} />
            </CardContent>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default InsightsDashboard;
