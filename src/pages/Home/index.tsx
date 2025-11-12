import React from 'react';
import { useOverview } from '@/features/dashboard/model/use-overview';
import { KpiCard } from '@/features/dashboard/ui/KpiCard';
import { DollarSign } from 'lucide-react'; // Example icon

const HomePage = () => {
  const { data, isLoading, isError, error } = useOverview();

  if (isLoading) {
    return <div>Loading dashboard...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {data?.kpis.map((kpi: any) => (
          <KpiCard
            key={kpi.title}
            title={kpi.title}
            value={kpi.value}
            change={kpi.change}
            icon={<DollarSign className="h-4 w-4 text-muted-foreground" />}
          />
        ))}
      </div>
      {/* Other dashboard components like charts and recent orders would go here */}
    </div>
  );
};

export default HomePage;
