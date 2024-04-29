import { Bar } from 'react-chartjs-2';
import { BarProps } from './barprops';

const BarChart = ({ data }: BarProps) => {
  const months = Object.keys(data);
  const activeUsersData = months.map(month => data[month].ativos);
  const inactiveUsersData = months.map(month => data[month].inativos);

  const chartData = {
    labels: months,
    datasets: [
      {
        label: 'Usuários Ativos',
        backgroundColor: '#36A2EB',
        data: activeUsersData,
      },
      {
        label: 'Usuários Inativos',
        backgroundColor: '#FF6384',
        data: inactiveUsersData,
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text: 'Usuários Ativos vs Inativos ao longo do ano',
      fontSize: 20,
    },
    scales: {
      x: {
        stacked: true,
        title: {
          display: true,
          text: 'Mês',
        },
      },
      y: {
        stacked: true,
        title: {
          display: true,
          text: 'Número de Usuários',
        },
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default BarChart;
