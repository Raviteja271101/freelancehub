export  const dashboardStats = [
    {
      title: "Total  Revenue",
      value: "$" + new Intl.NumberFormat("en-US").format(45900),
      subtitle: {
        icon: "up",
        text: "18% vs last month",
        type: "sucess",
      },
    },
    {
      title: "Active Projects ",
      value: 12,
      subtitle: {
        icon: "down",
        text: "3 due this week",
        type: "danger",
      },
    },
    {
      title: "Pending Invoices",
      value: "$" + new Intl.NumberFormat("en-US").format(8450),
      subtitle: {
        icon: "down",
        text: "4 invoices outstanding",
        type: "danger",
      },
    },
    {
      title: "Active Clients ",
      value: 9,
      subtitle: {
        icon: "up",
        text: "2 new this month",
        type: "success",
      },
    },
  ];

export const revenueData = [
  {
    month: "Jan",
    revenue: 4500,
    expenses: 1500,
  },
  {
    month: "Feb",
    revenue: 6200,
    expenses: 1800,
  },
  {
    month: "Mar",
    revenue: 4800,
    expenses: 1700,
  },
  {
    month: "Apr",
    revenue: 7900,
    expenses: 2000,
  },
  {
    month: "May",
    revenue: 6100,
    expenses: 1900,
  },
  {
    month: "Jun",
    revenue: 8400,
    expenses: 2100,
  },
   {
    month: "Jul",
    revenue: 9100,
    expenses: 2300,
  },
];

export const weeklyData = [
  {
    week: "W1",
    hours: 28,
  },
  {
    week: "W2",
    hours: 35,
  },
  {
    week: "W3",
    hours: 22,
  },

  {
    week: "W4",
    hours: 41,
  },
  
];
export const recentProjects = [
  { name: 'Meridian Brand Identity', client: 'Meridian Capital', status: 'In Progress', progress: 68, due: 'Jul 18', value: '$4,200' },
  { name: 'E-commerce Platform', client: 'Volta Goods', status: 'Review', progress: 92, due: 'Jul 12', value: '$11,500' },
  { name: 'Campaign Analytics', client: 'Bloom Agency', status: 'In Progress', progress: 34, due: 'Aug 3', value: '$3,800' },
  { name: 'Mobile App UI', client: 'Heron Labs', status: 'On Hold', progress: 51, due: 'Aug 20', value: '$6,700' },
]
export const recentActivity = [
  { action: 'Invoice #0047 paid', detail: 'Volta Goods · $3,200', time: '2h ago', type: 'payment' },
  { action: 'New task added', detail: 'Finalize homepage wireframes', time: '4h ago', type: 'task' },
  { action: 'Project deadline moved', detail: 'Campaign Analytics → Aug 3', time: '6h ago', type: 'update' },
  { action: 'Client message', detail: 'Meridian Capital — feedback received', time: '1d ago', type: 'message' },
]