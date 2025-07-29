import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { 
  Search, 
  Filter, 
  Download, 
  Eye,
  MessageSquare,
  Clock,
  Zap
} from "lucide-react"
import { formatDistanceToNow } from "date-fns"

interface Conversation {
  id: string
  phone: string
  userMessage: string
  botResponse: string
  agent: "claude" | "openai"
  responseTime: number
  timestamp: Date
  tools: string[]
  status: "success" | "error"
}

const mockConversations: Conversation[] = [
  {
    id: "1",
    phone: "+1 (555) 123-4567",
    userMessage: "What's the current price of AAPL?",
    botResponse: "Apple (AAPL) is currently trading at $182.45, up 2.3% today. The stock has shown strong momentum this week with positive earnings expectations...",
    agent: "claude",
    responseTime: 1.2,
    timestamp: new Date(Date.now() - 1000 * 60 * 2),
    tools: ["stock_price", "market_data"],
    status: "success"
  },
  {
    id: "2",
    phone: "+1 (555) 987-6543",
    userMessage: "Show me my portfolio performance",
    botResponse: "Your portfolio is up 4.7% this week with strong performance in tech stocks. Your top performers include NVDA (+12.3%) and MSFT (+8.1%)...",
    agent: "openai",
    responseTime: 2.1,
    timestamp: new Date(Date.now() - 1000 * 60 * 5),
    tools: ["portfolio_analysis", "performance_metrics"],
    status: "success"
  },
  {
    id: "3",
    phone: "+1 (555) 456-7890",
    userMessage: "Should I buy TSLA now?",
    botResponse: "Based on your risk profile and current market conditions, Tesla presents a moderate buy opportunity. Consider dollar-cost averaging given recent volatility...",
    agent: "claude",
    responseTime: 0.8,
    timestamp: new Date(Date.now() - 1000 * 60 * 8),
    tools: ["market_analysis", "risk_assessment"],
    status: "success"
  },
  {
    id: "4",
    phone: "+1 (555) 321-9876",
    userMessage: "What are the latest news on crypto?",
    botResponse: "I'm experiencing some difficulty accessing the latest crypto news. Please try again in a moment...",
    agent: "openai",
    responseTime: 3.5,
    timestamp: new Date(Date.now() - 1000 * 60 * 12),
    tools: ["news_sentiment"],
    status: "error"
  }
]

export default function ConversationMonitor() {
  const [conversations] = useState<Conversation[]>(mockConversations)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedConversation, setSelectedConversation] = useState<string | null>(null)

  const filteredConversations = conversations.filter(conv => 
    conv.phone.toLowerCase().includes(searchQuery.toLowerCase()) ||
    conv.userMessage.toLowerCase().includes(searchQuery.toLowerCase()) ||
    conv.botResponse.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const selectedConv = conversations.find(c => c.id === selectedConversation)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Conversation Monitor</h1>
          <p className="text-muted-foreground">Real-time monitoring of all bot conversations</p>
        </div>
        
        <div className="flex items-center space-x-3">
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export Logs
          </Button>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            <span className="text-sm text-muted-foreground">Live monitoring</span>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-foreground">156</h3>
              <p className="text-sm text-muted-foreground">Conversations Today</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-success">98.4%</h3>
              <p className="text-sm text-muted-foreground">Success Rate</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-primary">1.2s</h3>
              <p className="text-sm text-muted-foreground">Avg Response Time</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-secondary">23</h3>
              <p className="text-sm text-muted-foreground">Active Users</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Conversation List */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Live Conversations</CardTitle>
                <div className="flex items-center space-x-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      placeholder="Search conversations..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 w-64"
                    />
                  </div>
                  <Button variant="outline" size="sm">
                    <Filter className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              <ScrollArea className="h-[600px]">
                <div className="space-y-4">
                  {filteredConversations.map((conversation) => (
                    <div 
                      key={conversation.id} 
                      className={`border rounded-lg p-4 cursor-pointer transition-all hover:shadow-md ${
                        selectedConversation === conversation.id ? "ring-2 ring-primary" : ""
                      }`}
                      onClick={() => setSelectedConversation(conversation.id)}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <Badge 
                            variant={conversation.agent === "claude" ? "default" : "secondary"}
                            className="text-xs"
                          >
                            {conversation.agent.toUpperCase()}
                          </Badge>
                          <span className="font-medium">{conversation.phone}</span>
                          <Badge 
                            variant={conversation.status === "success" ? "outline" : "destructive"}
                            className="text-xs"
                          >
                            {conversation.status}
                          </Badge>
                        </div>
                        
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          <span>{conversation.responseTime}s</span>
                          <span>{formatDistanceToNow(conversation.timestamp, { addSuffix: true })}</span>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="bg-muted/50 rounded p-2">
                          <p className="text-xs text-muted-foreground mb-1">User:</p>
                          <p className="text-sm">{conversation.userMessage}</p>
                        </div>
                        
                        <div className="bg-primary/5 rounded p-2">
                          <p className="text-xs text-muted-foreground mb-1">Bot:</p>
                          <p className="text-sm line-clamp-2">{conversation.botResponse}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center space-x-1">
                          {conversation.tools.map((tool) => (
                            <Badge key={tool} variant="outline" className="text-xs">
                              {tool}
                            </Badge>
                          ))}
                        </div>
                        
                        <Button variant="ghost" size="sm">
                          <Eye className="w-3 h-3 mr-1" />
                          Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>

        {/* Conversation Details */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Conversation Details</CardTitle>
            </CardHeader>
            
            <CardContent>
              {selectedConv ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{selectedConv.phone}</span>
                    <Badge 
                      variant={selectedConv.agent === "claude" ? "default" : "secondary"}
                    >
                      {selectedConv.agent.toUpperCase()}
                    </Badge>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium mb-2">User Message</h4>
                      <div className="bg-muted/50 rounded p-3">
                        <p className="text-sm">{selectedConv.userMessage}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Bot Response</h4>
                      <div className="bg-primary/5 rounded p-3">
                        <p className="text-sm">{selectedConv.botResponse}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Response Time</p>
                      <p className="font-medium">{selectedConv.responseTime}s</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Status</p>
                      <Badge variant={selectedConv.status === "success" ? "outline" : "destructive"}>
                        {selectedConv.status}
                      </Badge>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Tools Used</p>
                      <p className="font-medium">{selectedConv.tools.length}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Timestamp</p>
                      <p className="font-medium">
                        {formatDistanceToNow(selectedConv.timestamp, { addSuffix: true })}
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Tools Called</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedConv.tools.map((tool) => (
                        <Badge key={tool} variant="outline" className="text-xs">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-2 pt-4 border-t">
                    <Button className="w-full" size="sm">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      View Full Thread
                    </Button>
                    <Button variant="outline" className="w-full" size="sm">
                      <Zap className="w-4 h-4 mr-2" />
                      Replay Analysis
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <MessageSquare className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Select a conversation to view details</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}