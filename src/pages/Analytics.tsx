import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  TrendingUp, 
  Users, 
  MessageSquare, 
  Clock,
  Download,
  BarChart3,
  PieChart,
  Activity
} from "lucide-react"

export default function Analytics() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Analytics</h1>
          <p className="text-muted-foreground">Comprehensive usage insights and performance trends</p>
        </div>
        
        <div className="flex items-center space-x-3">
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
          <Button>
            <BarChart3 className="w-4 h-4 mr-2" />
            Custom Report
          </Button>
        </div>
      </div>

      {/* Key Performance Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gradient-primary text-white">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold">15,432</h3>
                <p className="text-white/80">Total Messages</p>
                <p className="text-sm text-white/60">+2,341 this week</p>
              </div>
              <MessageSquare className="w-8 h-8 text-white/80" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-foreground">1,247</h3>
                <p className="text-muted-foreground">Active Users</p>
                <p className="text-sm text-success">+156 this month</p>
              </div>
              <Users className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-foreground">98.4%</h3>
                <p className="text-muted-foreground">Success Rate</p>
                <p className="text-sm text-success">+0.3% vs last week</p>
              </div>
              <TrendingUp className="w-8 h-8 text-success" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-foreground">1.2s</h3>
                <p className="text-muted-foreground">Avg Response</p>
                <p className="text-sm text-success">-0.3s improvement</p>
              </div>
              <Clock className="w-8 h-8 text-secondary" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="usage" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="usage">Usage Trends</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="users">User Behavior</TabsTrigger>
          <TabsTrigger value="content">Content Analysis</TabsTrigger>
        </TabsList>

        <TabsContent value="usage" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Messages Over Time</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80 flex items-center justify-center border-2 border-dashed border-muted rounded-lg">
                  <div className="text-center">
                    <BarChart3 className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">Line chart showing daily message volume</p>
                    <p className="text-sm text-muted-foreground">Peak: 2,341 messages on Tuesday</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Peak Usage Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80 flex items-center justify-center border-2 border-dashed border-muted rounded-lg">
                  <div className="text-center">
                    <Activity className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">Heatmap showing hourly activity</p>
                    <p className="text-sm text-muted-foreground">Peak: 9-11 AM and 2-4 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>User Growth Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center border-2 border-dashed border-muted rounded-lg">
                <div className="text-center">
                  <TrendingUp className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Monthly user acquisition and retention chart</p>
                  <p className="text-sm text-muted-foreground">Growth rate: 12.5% month-over-month</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Response Time Distribution</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span>&lt; 1 second</span>
                    <Badge variant="outline">45%</Badge>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-success h-2 rounded-full w-[45%]"></div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span>1-2 seconds</span>
                    <Badge variant="outline">38%</Badge>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '38%' }}></div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span>2-3 seconds</span>
                    <Badge variant="outline">12%</Badge>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-warning h-2 rounded-full" style={{ width: '12%' }}></div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span>&gt; 3 seconds</span>
                    <Badge variant="destructive">5%</Badge>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-destructive h-2 rounded-full" style={{ width: '5%' }}></div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Error Rate Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center border-2 border-dashed border-muted rounded-lg">
                  <div className="text-center">
                    <TrendingUp className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">Weekly error rate trends</p>
                    <p className="text-sm text-success">Current: 1.6% (↓0.4%)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>AI Agent Performance Comparison</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 border rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Claude AI</h3>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-primary">67%</div>
                    <p className="text-sm text-muted-foreground">Usage Share</p>
                    <Badge variant="outline">98.7% Success</Badge>
                  </div>
                </div>
                
                <div className="text-center p-4 border rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">OpenAI</h3>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-secondary">33%</div>
                    <p className="text-sm text-muted-foreground">Usage Share</p>
                    <Badge variant="outline">97.9% Success</Badge>
                  </div>
                </div>
                
                <div className="text-center p-4 border rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Hybrid</h3>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-accent">Auto</div>
                    <p className="text-sm text-muted-foreground">Selection</p>
                    <Badge variant="outline">Optimized</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="users" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Communication Styles</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center border-2 border-dashed border-muted rounded-lg">
                  <div className="text-center">
                    <PieChart className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <div className="space-y-1">
                      <p className="text-sm">Professional: 45%</p>
                      <p className="text-sm">Casual: 32%</p>
                      <p className="text-sm">Friendly: 23%</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Trading Experience Levels</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Advanced Traders</span>
                    <Badge>34%</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Intermediate Traders</span>
                    <Badge variant="secondary">42%</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Beginner Traders</span>
                    <Badge variant="outline">24%</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Most Active Users</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { phone: "+1 (555) 123-4567", messages: 234, plan: "Pro" },
                  { phone: "+1 (555) 987-6543", messages: 189, plan: "Paid" },
                  { phone: "+1 (555) 456-7890", messages: 167, plan: "Pro" },
                  { phone: "+1 (555) 321-9876", messages: 143, plan: "Paid" },
                  { phone: "+1 (555) 678-1234", messages: 128, plan: "Free" }
                ].map((user, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium">#{index + 1}</span>
                      </div>
                      <span className="font-medium">{user.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-muted-foreground">{user.messages} messages</span>
                      <Badge variant={user.plan === "Pro" ? "default" : user.plan === "Paid" ? "secondary" : "outline"}>
                        {user.plan}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="content" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Most Requested Stocks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { symbol: "AAPL", requests: 342, change: "+12%" },
                    { symbol: "TSLA", requests: 298, change: "+8%" },
                    { symbol: "NVDA", requests: 267, change: "+15%" },
                    { symbol: "MSFT", requests: 234, change: "+5%" },
                    { symbol: "GOOGL", requests: 189, change: "+3%" }
                  ].map((stock, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-sm font-bold">{stock.symbol[0]}</span>
                        </div>
                        <span className="font-medium">{stock.symbol}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-muted-foreground">{stock.requests} requests</span>
                        <Badge variant="outline" className="text-success">
                          {stock.change}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Query Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Stock Prices</span>
                      <span className="text-sm text-muted-foreground">45%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '45%' }}></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Portfolio Analysis</span>
                      <span className="text-sm text-muted-foreground">28%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-secondary h-2 rounded-full" style={{ width: '28%' }}></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Market Analysis</span>
                      <span className="text-sm text-muted-foreground">18%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-accent h-2 rounded-full" style={{ width: '18%' }}></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Trading Advice</span>
                      <span className="text-sm text-muted-foreground">9%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-warning h-2 rounded-full" style={{ width: '9%' }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}