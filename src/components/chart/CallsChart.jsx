import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
// import { RechartsDevtools } from '@recharts/devtools';

// #endregion
const CallsChart = ({ data }) => {
  return (
    <AreaChart
      style={{
        width: "100%",
        maxWidth: "100vw",
        maxHeight: "50vh",
        aspectRatio: 1.618,
      }}
      responsive
      data={data}
    >
      <defs>
        <linearGradient id="colorCalls" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.6} />
          <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
        </linearGradient>
      </defs>

      <XAxis dataKey="day" />
      <YAxis width="auto" />
      <Tooltip
        contentStyle={{
          backgroundColor: "#0f172a",
          borderRadius: "12px",
          border: "1px solid #1e293b",
          color: "#ffffff",
          padding: "10px",
        }}
      />
      <Area
        type="monotone"
        dataKey="calls"
        stroke="#3b82f6"
        fill="url(#colorCalls)"
      />
      {/* <RechartsDevtools /> */}
    </AreaChart>
  );
};

export default CallsChart;
