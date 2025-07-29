import { 
  Users, 
  MessageSquare, 
  Clock, 
  Brain,
  TrendingUp,
  Zap,
  CheckCircle,
  AlertTriangle
} from "lucide-react"
import { StatCard } from "@/components/StatCard"
import { ActivityFeed } from "@/components/ActivityFeed"
import { QuickActions } from "@/components/QuickActions"

export default function Overview() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-purple bg-clip-text text-transparent">
            AI-Powered Trading Intelligence
          </h1>
          <p className="text-muted-foreground">
            <span className="text-success font-semibold">Imagine Having</span> the most advanced trading minds in your pocket
          </p>
        </div>
        
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
          <span>Last updated: just now</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Users"
          value="1,247"
          change="+12.5% from last week"
          changeType="positive"
          icon={Users}
          description="Active registered users"
        />
        
        <StatCard
          title="Active Today"
          value="89"
          change="+5.2% vs yesterday"
          changeType="positive"
          icon={MessageSquare}
          description="Users who sent messages today"
        />
        
        <StatCard
          title="Messages Processed"
          value="15,432"
          change="+2,341 today"
          changeType="positive"
          icon={Brain}
          description="Total messages handled"
        />
        
        <StatCard
          title="Avg Response Time"
          value="1.2s"
          change="-0.3s improvement"
          changeType="positive"
          icon={Clock}
          description="Bot response latency"
        />
      </div>

      {/* AI Performance Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          title="Claude Usage"
          value="67%"
          change="Primary AI agent"
          changeType="neutral"
          icon={Brain}
          badge="Preferred"
          gradient={true}
        />
        
        <StatCard
          title="Success Rate"
          value="98.4%"
          change="+0.2% this week"
          changeType="positive"
          icon={CheckCircle}
          description="Successful responses"
        />
        
        <StatCard
          title="System Uptime"
          value="99.9%"
          change="30 days"
          changeType="positive"
          icon={Zap}
          description="Service availability"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Activity Feed - Takes up 2/3 */}
        <div className="lg:col-span-2">
          <ActivityFeed />
        </div>
        
        {/* Quick Actions - Takes up 1/3 */}
        <div>
          <QuickActions />
        </div>
      </div>
    </div>
  )
}