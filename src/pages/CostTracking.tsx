import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown,
  MessageSquare,
  Brain,
  Database,
  Cloud,
  Zap,
  AlertTriangle
} from "lucide-react"
import { StatCard } from "@/components/StatCard"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function CostTracking() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-purple bg-clip-text text-transparent">
            API Costs & Spending
          </h1>
          <p className="text-muted-foreground">Real-time cost monitoring and budget management</p>
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

        {/* OpenAI API Costs */}
        <Card className="bg-gradient-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-primary" />
              <span>OpenAI API Costs</span>
              <Badge variant="outline" className="ml-auto">Fallback</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">GPT-4o Calls</p>
                <p className="text-2xl font-bold text-foreground">156</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Cost</p>
                <p className="text-2xl font-bold text-primary">$8.92</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">GPT-4o: $7.23</span>
                <Badge variant="outline">Premium</Badge>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">GPT-4o-mini: $1.69</span>
                <Badge variant="outline">Efficient</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Market Data Costs */}
        <Card className="bg-gradient-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              <span>Market Data (EODHD)</span>
              <Badge variant="secondary" className="ml-auto">Essential</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">API Calls Today</p>
                <p className="text-2xl font-bold text-foreground">234</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Monthly Cost</p>
                <p className="text-2xl font-bold text-primary">$79.99</p>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Cache hit rate: 87%</span>
              <Badge variant="outline" className="text-success border-success">Optimized</Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Cost Alerts & Recommendations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-gradient-card border-warning">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-warning">
              <AlertTriangle className="w-5 h-5" />
              <span>Cost Alerts</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start space-x-3 p-3 bg-warning/10 rounded-lg">
              <AlertTriangle className="w-4 h-4 text-warning mt-0.5" />
              <div>
                <p className="text-sm font-medium text-foreground">High Claude Usage</p>
                <p className="text-xs text-muted-foreground">Consider OpenAI fallback for non-critical queries</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-3 bg-primary/10 rounded-lg">
              <TrendingUp className="w-4 h-4 text-primary mt-0.5" />
              <div>
                <p className="text-sm font-medium text-foreground">Budget on Track</p>
                <p className="text-xs text-muted-foreground">Projected to be $110 under monthly budget</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-success" />
              <span>Optimization Tips</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start space-x-3 p-3 bg-success/10 rounded-lg">
              <Database className="w-4 h-4 text-success mt-0.5" />
              <div>
                <p className="text-sm font-medium text-foreground">Cache Optimization</p>
                <p className="text-xs text-muted-foreground">Saved $23.45 this week through smart caching</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-3 bg-primary/10 rounded-lg">
              <Brain className="w-4 h-4 text-primary mt-0.5" />
              <div>
                <p className="text-sm font-medium text-foreground">Model Selection</p>
                <p className="text-xs text-muted-foreground">67% cost reduction using Claude for complex queries</p>
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
    </div>
  )
}