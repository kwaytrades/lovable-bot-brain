import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { formatDistanceToNow } from "date-fns"

interface Activity {
  id: string
  phone: string
  message: string
  response: string
  agent: "claude" | "openai"
  responseTime: number
  timestamp: Date
  tools?: string[]
}

const mockActivities: Activity[] = [
  {
    id: "1",
    phone: "+1 (555) 123-4567",
    message: "What's the current price of AAPL?",
    response: "Apple (AAPL) is currently trading at $182.45, up 2.3% today...",
    agent: "claude",
    responseTime: 1.2,
    timestamp: new Date(Date.now() - 1000 * 60 * 2),
    tools: ["stock_price", "market_data"]
  },
  {
    id: "2",
    phone: "+1 (555) 987-6543",
    message: "Show me my portfolio performance",
    response: "Your portfolio is up 4.7% this week with strong performance in tech stocks...",
    agent: "openai",
    responseTime: 2.1,
    timestamp: new Date(Date.now() - 1000 * 60 * 5),
    tools: ["portfolio_analysis", "performance_metrics"]
  },
  {
    id: "3",
    phone: "+1 (555) 456-7890",
    message: "Should I buy TSLA now?",
    response: "Based on your risk profile and current market conditions...",
    agent: "claude",
    responseTime: 0.8,
    timestamp: new Date(Date.now() - 1000 * 60 * 8),
    tools: ["market_analysis", "risk_assessment"]
  }
]

export function ActivityFeed() {
  return (
    <Card className="h-full">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Real-time Activity</CardTitle>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            <span className="text-sm text-muted-foreground">Live</span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <ScrollArea className="h-96">
          <div className="space-y-4">
            {mockActivities.map((activity) => (
              <div key={activity.id} className="border-l-4 border-primary/20 pl-4 pb-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <Badge 
                      variant={activity.agent === "claude" ? "default" : "secondary"}
                      className="text-xs"
                    >
                      {activity.agent.toUpperCase()}
                    </Badge>
                    <span className="text-sm font-medium">{activity.phone}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {formatDistanceToNow(activity.timestamp, { addSuffix: true })}
                  </span>
                </div>
                
                <div className="space-y-2">
                  <div className="bg-muted/50 rounded-lg p-3">
                    <p className="text-sm text-muted-foreground mb-1">User:</p>
                    <p className="text-sm">{activity.message}</p>
                  </div>
                  
                  <div className="bg-primary/5 rounded-lg p-3">
                    <p className="text-sm text-muted-foreground mb-1">Bot:</p>
                    <p className="text-sm">{activity.response}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center space-x-2">
                    {activity.tools?.map((tool) => (
                      <Badge key={tool} variant="outline" className="text-xs">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {activity.responseTime}s
                  </span>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}