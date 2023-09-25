
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const COLORS = ['#FF444A', '#00C49F'];
const clr_red={
    background:'#FF444A'
};
const clr_green={
    background:'#00C49F'
};

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(2)}%`} 
    </text>
  );
};

const Statistics = () => {
//   const localStorageLength = localStorage.length;
  const donationItems = JSON.parse(localStorage.getItem('donation'));
  const donationItemsLength = donationItems ? donationItems.length : 0;

const groupBPercentage =(donationItemsLength/12)*100;
const groupAPercentage=(100-groupBPercentage);
  const data = [
    { name: 'Group A', value: groupAPercentage },
    { name: 'Group B', value: groupBPercentage },
  ];

  return (
    <div>
        <div className='mt-24'>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
    <div className='flex justify-center items-center gap-6 '>
  
        <p>Your Donation</p>
        <div className='w-1/12 h-3 ' style={clr_green}></div>
   
    
        <p>Total Donation</p>
        <div className='w-1/12 h-3 bg-red-500' style={clr_red}></div>
    </div>
    </div>
   
  );
};

export default Statistics;
