import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Users, Calendar, DollarSign, TrendingUp } from 'lucide-react'

interface StatsCardProps {
  title: string
  value: string
  change: string
  icon: React.ReactNode
  trend: 'up' | 'down'
}

function StatsCard({ title, value, change, icon, trend }: StatsCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-gray-600">{title}</CardTitle>
        <div className="text-gray-400">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-gray-900">{value}</div>
        <p className={`text-xs ${trend === 'up' ? 'text-green-600' : 'text-red-600'} flex items-center mt-1`}>
          <TrendingUp className={`h-3 w-3 mr-1 ${trend === 'down' ? 'rotate-180' : ''}`} />
          {change} from last month
        </p>
      </CardContent>
    </Card>
  )
}

export function DashboardStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatsCard
        title="Total Patients"
        value="1,234"
        change="+12%"
        trend="up"
        icon={<Users className="h-4 w-4" />}
      />
      <StatsCard
        title="Today's Appointments"
        value="18"
        change="+5%"
        trend="up"
        icon={<Calendar className="h-4 w-4" />}
      />
      <StatsCard
        title="Monthly Revenue"
        value="$45,231"
        change="+8%"
        trend="up"
        icon={<DollarSign className="h-4 w-4" />}
      />
      <StatsCard
        title="Pending Payments"
        value="$12,450"
        change="-3%"
        trend="down"
        icon={<DollarSign className="h-4 w-4" />}
      />
    </div>
  )
}