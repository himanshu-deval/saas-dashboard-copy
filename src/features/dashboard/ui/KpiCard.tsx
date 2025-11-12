import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/card'; // Assuming card is re-exported

interface KpiCardProps {
  title: string;
  value: string;
  change: string;
  icon?: React.ReactNode;
}

export const KpiCard = ({ title, value, change, icon }: KpiCardProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{change} from last month</p>
      </CardContent>
    </Card>
  );
};
