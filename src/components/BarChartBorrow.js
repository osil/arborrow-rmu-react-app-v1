import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const BarChartBorrow = ({chart,height}) => {

  

  return (
    <>
      <ResponsiveContainer width="100%" height={height}>
        <BarChart
          width={500}
          height={300}
          data={chart}
          margin={{
            top: 5,
            right: 30,
            left: 70,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="BUDGETPERIODID" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="BORROWAMOUNT" name="เงินยืม" fill="#8884d8" />
          <Bar dataKey="REPAYAMOUNT" name="ล้างหนี้" fill="#82ca9d" />
          <Bar dataKey="NETAMOUNT" name="หนี้คงเหลือ" fill="#F368A1" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default BarChartBorrow;
