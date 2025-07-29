import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { 
  Brain, 
  Zap, 
  Target, 
  Clock,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  Cpu,
  Eye,
  ChevronRight
} from "lucide-react"

interface ToolMetric {
  name: string
  calls: number
  successRate: number
  avgTime: number
  usage: number
}

interface ConversationAnalysis {
  id: string
  phone: string
  userMessage: string
  intent: string
  confidence: number
  agent: "claude" | "openai"
  toolsUsed: string[]
  responseTime: number
  success: boolean
}

const toolMetrics: ToolMetric[] = [
  { name: "stock_price", calls: 1247, successRate: 98.5, avgTime: 0.3, usage: 45 },
  { name: "portfolio_analysis", calls: 892, successRate: 96.2, avgTime: 1.2, usage: 32 },
  { name: "market_data", calls: 673, successRate: 99.1, avgTime: 0.5, usage: 24 },
  { name: "risk_assessment", calls: 445, successRate: 94.8, avgTime: 0.8, usage: 16 },
  { name: "news_sentiment", calls: 234, successRate: 91.3, avgTime: 1.5, usage: 8 }
]

const recentAnalyses: ConversationAnalysis[] = [
  {
    id: "1",
    phone: "+1 (555) 123-4567",
    userMessage: "What's the current price of AAPL and should I buy more?",
    intent: "stock_inquiry_with_advice",
    confidence: 0.95,
    agent: "claude",
    toolsUsed: ["stock_price", "market_data", "risk_assessment"],
    responseTime: 1.2,
    success: true
  },
  {
    id: "2",
    phone: "+1 (555) 987-6543",
    userMessage: "Show me my portfolio performance this week",
    intent: "portfolio_analysis",
    confidence: 0.98,
    agent: "openai",
    toolsUsed: ["portfolio_analysis", "performance_metrics"],
    responseTime: 2.1,
    success: true
  }
]

export default function BotIntelligence() {
  const [selectedConversation, setSelectedConversation] = useState<string | null>(null)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Bot Intelligence</h1>
          <p className="text-muted-foreground">Deep analysis of AI performance and decision-making</p>
        </div>
        
        <div className="flex items-center space-x-3">
          <Button variant="outline">
            <Eye className="w-4 h-4 mr-2" />
            View Logs
          </Button>
          <Button>
            <TrendingUp className="w-4 h-4 mr-2" />
            Performance Report
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-gradient-primary text-white">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold">98.4%</h3>
                <p className="text-white/80">Success Rate</p>
              </div>
              <CheckCircle className="w-8 h-8 text-white/80" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-foreground">1.2s</h3>
                <p className="text-muted-foreground">Avg Response</p>
              </div>
              <Clock className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-foreground">67%</h3>
                <p className="text-muted-foreground">Claude Usage</p>
              </div>
              <Brain className="w-8 h-8 text-secondary" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-foreground">94.7%</h3>
                <p className="text-muted-foreground">Intent Accuracy</p>
              </div>
              <Target className="w-8 h-8 text-success" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="tools" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="tools">Tool Analytics</TabsTrigger>
          <TabsTrigger value="conversations">Conversation Analysis</TabsTrigger>
          <TabsTrigger value="performance">AI Performance</TabsTrigger>
          <TabsTrigger value="insights">Insights</TabsTrigger>
        </TabsList>

        <TabsContent value="tools" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Tool Usage Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {toolMetrics.map((tool) => (
                  <div key={tool.name} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-primary rounded-full"></div>
                        <span className="font-medium">{tool.name}</span>
                        <Badge variant="outline">{tool.calls} calls</Badge>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span>{tool.successRate}% success</span>
                        <span>{tool.avgTime}s avg</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Usage Distribution</span>
                        <span>{tool.usage}%</span>
                      </div>
                      <Progress value={tool.usage} className="h-2" />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Success Rate</span>
                        <span>{tool.successRate}%</span>
                      </div>
                      <Progress value={tool.successRate} className="h-2" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="conversations" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Conversation Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentAnalyses.map((analysis) => (
                  <div key={analysis.id} className="border rounded-lg p-4 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Badge variant={analysis.agent === "claude" ? "default" : "secondary"}>
                          {analysis.agent.toUpperCase()}
                        </Badge>
                        <span className="font-medium">{analysis.phone}</span>
                        <Badge variant={analysis.success ? "outline" : "destructive"}>
                          {analysis.success ? "Success" : "Failed"}
                        </Badge>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => setSelectedConversation(analysis.id)}
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        Analyze
                      </Button>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">User Message:</p>
                        <p className="text-sm bg-muted/50 rounded p-2">{analysis.userMessage}</p>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">Intent</p>
                          <p className="font-medium">{analysis.intent}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Confidence</p>
                          <p className="font-medium">{(analysis.confidence * 100).toFixed(1)}%</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Response Time</p>
                          <p className="font-medium">{analysis.responseTime}s</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Tools Used</p>
                          <p className="font-medium">{analysis.toolsUsed.length}</p>
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-sm text-muted-foreground mb-2">Tools Called:</p>
                        <div className="flex flex-wrap gap-2">
                          {analysis.toolsUsed.map((tool) => (
                            <Badge key={tool} variant="outline" className="text-xs">
                              {tool}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Agent Performance Comparison</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                      <span>Claude AI</span>
                    </span>
                    <Badge>67% usage</Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Success Rate</span>
                      <span>98.7%</span>
                    </div>
                    <Progress value={98.7} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Avg Response Time</span>
                      <span>1.1s</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-secondary rounded-full"></div>
                      <span>OpenAI</span>
                    </span>
                    <Badge variant="secondary">33% usage</Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Success Rate</span>
                      <span>97.9%</span>
                    </div>
                    <Progress value={97.9} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Avg Response Time</span>
                      <span>1.4s</span>
                    </div>
                    <Progress value={70} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Quality Metrics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span>Response Coherence</span>
                    <span className="font-medium">96.2%</span>
                  </div>
                  <Progress value={96.2} className="h-2" />
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span>User Engagement</span>
                    <span className="font-medium">88.4%</span>
                  </div>
                  <Progress value={88.4} className="h-2" />
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span>Tool Selection Accuracy</span>
                    <span className="font-medium">94.7%</span>
                  </div>
                  <Progress value={94.7} className="h-2" />
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span>Conversation Completion</span>
                    <span className="font-medium">92.1%</span>
                  </div>
                  <Progress value={92.1} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="insights" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Key Insights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-success mt-0.5" />
                  <div>
                    <h4 className="font-medium">Claude Outperforms in Complex Analysis</h4>
                    <p className="text-sm text-muted-foreground">
                      Claude shows 12% better performance in multi-tool conversations requiring deep market analysis.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-5 h-5 text-warning mt-0.5" />
                  <div>
                    <h4 className="font-medium">News Sentiment Tool Needs Optimization</h4>
                    <p className="text-sm text-muted-foreground">
                      91.3% success rate is below target. Consider API upgrade or fallback mechanism.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <TrendingUp className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium">Response Times Improving</h4>
                    <p className="text-sm text-muted-foreground">
                      Average response time decreased by 23% this month due to optimized tool selection.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Recommendations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h4 className="font-medium">1. Increase Claude Usage</h4>
                  <p className="text-sm text-muted-foreground">
                    Consider routing more complex queries to Claude for better outcomes.
                  </p>
                  <Button variant="outline" size="sm">
                    Configure Routing
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-medium">2. Optimize Tool Combinations</h4>
                  <p className="text-sm text-muted-foreground">
                    stock_price + market_data + risk_assessment shows highest success rates.
                  </p>
                  <Button variant="outline" size="sm">
                    View Patterns
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-medium">3. Add Caching Layer</h4>
                  <p className="text-sm text-muted-foreground">
                    Frequent stock price requests could benefit from 30-second caching.
                  </p>
                  <Button variant="outline" size="sm">
                    Enable Caching
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}