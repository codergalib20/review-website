import React from 'react';
import { Bar } from 'recharts';
import Header from '../hooks/Header';

const Dashboard = () => {
  const statee = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Rainfall",
        backgroundColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
        data: [65, 45, 123, 42, 43]
      }
    ]
  }
  const data = [
    {
      "month": "Mar",
      "investment": 100000,
      "sell": 241,
      "revenue": 10401
    },
    {
      "month": "Apr",
      "investment": 200000,
      "sell": 423,
      "revenue": 24500
    },
    {
      "month": "May",
      "investment": 500000,
      "sell": 726,
      "revenue": 67010
    },
    {
      "month": "Jun",
      "investment": 500000,
      "sell": 529,
      "revenue": 40405
    },
    {
      "month": "Jul",
      "investment": 600000,
      "sell": 601,
      "revenue": 50900
    },
    {
      "month": "Aug",
      "investment": 700000,
      "sell": 670,
      "revenue": 61000
    }
  ]
  const options = {
    plugins: {
      legend: {
        display: true,
        position: "bottom"
      },
      title: {
        text: "Avarage rainafall per month"
      }
    }
  }
  return (
    <div className="min-h-screen bg-gray-500">
      < Header bg="bg-gray-50" bg2="bg-gray-900" />
      <Bar options={options} data={statee} />

    </div >
  );
};

export default Dashboard;