import { Bar, BarChart, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const Chart = ({ ratings }) => {
  // Transform ratings data for the chart
  const chartData = ratings.map((rating) => ({
    star: `${rating.name} ⭐`,
    count: rating.count,
  }));

  return (
    <div className="w-full flex justify-center my-8">
      <BarChart
        width={600}
        height={300}
        data={chartData}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="star" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="count" fill="#9F62F2" radius={[8, 8, 0, 0]} />
      </BarChart>
    </div>
  );
};

export default Chart;
