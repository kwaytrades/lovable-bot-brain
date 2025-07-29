import { useState } from "react"
import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown,
  MessageSquare,
  Brain,
  Database,
  Cloud,
  Zap,
  AlertTriangle,
  CreditCard,
  Users,
  Calendar,
  BarChart3,
  PieChart,
  ArrowUpRight,
  ArrowDownRight,
  Crown
} from "lucide-react"
import { StatCard } from "@/components/StatCard"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function FinancialDashboard() {
  const [activeTab, setActiveTab] = useState("costs")

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-purple bg-clip-text text-transparent">
            Financial Intelligence
          </h1>
          <p className="text-muted-foreground">Real-time cost monitoring and revenue analytics</p>
        </div>
        
        <div className="flex items-center space-x-3">
          <Badge variant="outline" className="border-success text-success">
            Live Tracking
          </Badge>
          <Button variant="outline" size="sm">
            Export Report
          </Button>
        </div>
      </div>

      {/* Toggle Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-card border border-border">
          <TabsTrigger value="costs" className="flex items-center space-x-2">
            <TrendingDown className="w-4 h-4" />
            <span>Cost Tracking</span>
          </TabsTrigger>
          <TabsTrigger value="revenue" className="flex items-center space-x-2">
            <TrendingUp className="w-4 h-4" />
            <span>Revenue Analytics</span>
          </TabsTrigger>
        </TabsList>

        {/* Cost Tracking Tab */}
        <TabsContent value="costs" className="space-y-6">
          {/* Cost Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <StatCard
              title="Daily Spend"
              value="$47.23"
              change="+$12.34 vs yesterday"
              changeType="negative"
              icon={DollarSign}
              description="Total cost today"
              gradient={true}
            />
            
            <StatCard
              title="Monthly Spend"
              value="$1,247.89"
              change="$752.11 remaining in budget"
              changeType="positive"
              icon={TrendingUp}
              description="Current month total"
            />
            
            <StatCard
              title="Cost Per User"
              value="$0.89"
              change="-$0.12 efficiency gain"
              changeType="positive"
              icon={MessageSquare}
              description="Average cost per active user"
            />
            
            <StatCard
              title="Cost Per Message"
              value="$0.034"
              change="+$0.008 vs last week"
              changeType="negative"
              icon={Brain}
              description="Average cost per SMS processed"
            />
            
            <StatCard
              title="Projected Monthly"
              value="$1,889.45"
              change="Under budget by $110.55"
              changeType="positive"
              icon={TrendingUp}
              description="Forecasted month-end total"
            />
            
            <StatCard
              title="Cost Efficiency"
              value="94.2%"
              change="+2.1% improvement"
              changeType="positive"
              icon={Zap}
              description="Cost vs revenue ratio"
            />
          </div>

          {/* Service-Specific Cost Breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Twilio SMS Costs */}
            <Card className="bg-gradient-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  <span>Twilio SMS Costs</span>
                  <Badge variant="secondary" className="ml-auto">Active</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Messages Today</p>
                    <p className="text-2xl font-bold text-foreground">1,247</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Total Cost</p>
                    <p className="text-2xl font-bold text-primary">$9.35</p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Cost per message: $0.0075</span>
                  <Badge variant="outline" className="text-success border-success">Efficient</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Claude API Costs */}
            <Card className="bg-gradient-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Brain className="w-5 h-5 text-primary" />
                  <span>Claude API Costs</span>
                  <Badge variant="secondary" className="ml-auto">Primary</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">API Calls Today</p>
                    <p className="text-2xl font-bold text-foreground">892</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Total Cost</p>
                    <p className="text-2xl font-bold text-primary">$23.47</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Input tokens: 1.2M</span>
                    <span className="text-foreground">$3.60</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Output tokens: 1.3M</span>
                    <span className="text-foreground">$19.87</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Real-time Cost Counter */}
          <Card className="bg-gradient-primary text-white border-primary">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold">Live Cost Counter</h3>
                  <p className="text-white/80">Real-time spending tracker</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold">$47.23</p>
                  <p className="text-white/80">+$0.034 last minute</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Revenue Analytics Tab */}
        <TabsContent value="revenue" className="space-y-6">
          {/* Revenue Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <StatCard
              title="Monthly Revenue"
              value="$12,847.50"
              change="+23.5% vs last month"
              changeType="positive"
              icon={DollarSign}
              description="Total revenue this month"
              gradient={true}
            />
            
            <StatCard
              title="MRR (Monthly Recurring)"
              value="$8,942.00"
              change="+$1,247 growth"
              changeType="positive"
              icon={TrendingUp}
              description="Monthly recurring revenue"
            />
            
            <StatCard
              title="ARR (Annual Recurring)"
              value="$107,304"
              change="+18.2% year over year"
              changeType="positive"
              icon={BarChart3}
              description="Annual recurring revenue"
            />
            
            <StatCard
              title="Active Subscribers"
              value="247"
              change="+23 new this month"
              changeType="positive"
              icon={Users}
              description="Current paying customers"
            />
            
            <StatCard
              title="Churn Rate"
              value="2.4%"
              change="-0.8% improvement"
              changeType="positive"
              icon={TrendingDown}
              description="Monthly customer churn"
            />
            
            <StatCard
              title="Average Revenue Per User"
              value="$36.21"
              change="+$4.12 vs last month"
              changeType="positive"
              icon={CreditCard}
              description="ARPU this month"
            />
          </div>

          {/* Subscription Plans Revenue Breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="bg-gradient-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center space-x-2">
                    <Zap className="w-5 h-5 text-success" />
                    <span>Basic Plan</span>
                  </span>
                  <Badge variant="outline" className="text-success border-success">$9.99/mo</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Subscribers</span>
                    <span className="text-foreground font-semibold">156</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Monthly Revenue</span>
                    <span className="text-primary font-bold">$1,558.44</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Growth Rate</span>
                    <div className="flex items-center space-x-1">
                      <ArrowUpRight className="w-3 h-3 text-success" />
                      <span className="text-success text-sm">+12%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center space-x-2">
                    <Brain className="w-5 h-5 text-primary" />
                    <span>Premium Plan</span>
                  </span>
                  <Badge variant="outline" className="text-primary border-primary">$24.99/mo</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Subscribers</span>
                    <span className="text-foreground font-semibold">78</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Monthly Revenue</span>
                    <span className="text-primary font-bold">$1,949.22</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Growth Rate</span>
                    <div className="flex items-center space-x-1">
                      <ArrowUpRight className="w-3 h-3 text-success" />
                      <span className="text-success text-sm">+28%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center space-x-2">
                    <Crown className="w-5 h-5 text-warning" />
                    <span>Enterprise Plan</span>
                  </span>
                  <Badge variant="outline" className="text-warning border-warning">$99.99/mo</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Subscribers</span>
                    <span className="text-foreground font-semibold">13</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Monthly Revenue</span>
                    <span className="text-primary font-bold">$1,299.87</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Growth Rate</span>
                    <div className="flex items-center space-x-1">
                      <ArrowUpRight className="w-3 h-3 text-success" />
                      <span className="text-success text-sm">+85%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Revenue Analytics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-gradient-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-success" />
                  <span>Revenue Growth</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-success/10 rounded-lg">
                    <div>
                      <p className="text-sm font-medium text-foreground">Q4 2024 Growth</p>
                      <p className="text-xs text-muted-foreground">Compared to Q3 2024</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-success">+34.2%</p>
                      <p className="text-xs text-success">+$3,247</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-primary/10 rounded-lg">
                    <div>
                      <p className="text-sm font-medium text-foreground">Customer LTV</p>
                      <p className="text-xs text-muted-foreground">Average lifetime value</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-primary">$342.50</p>
                      <p className="text-xs text-primary">+12.4% vs last quarter</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertTriangle className="w-5 h-5 text-warning" />
                  <span>Revenue Alerts</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-3 p-3 bg-warning/10 rounded-lg">
                  <Calendar className="w-4 h-4 text-warning mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Payment Failures</p>
                    <p className="text-xs text-muted-foreground">3 failed payments need attention</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-success/10 rounded-lg">
                  <TrendingUp className="w-4 h-4 text-success mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Revenue Milestone</p>
                    <p className="text-xs text-muted-foreground">Exceeded $10K monthly target!</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Stripe Integration Status */}
          <Card className="bg-gradient-primary text-white border-primary">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold">Stripe Integration</h3>
                  <p className="text-white/80">Live revenue data from Stripe</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm">Connected</span>
                  </div>
                  <p className="text-xs text-white/60">Last sync: 2 minutes ago</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}