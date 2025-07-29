import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  RefreshCw, 
  Download, 
  Shield, 
  Trash2,
  Send,
  Activity
} from "lucide-react"

export function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Quick Actions</CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <Button variant="outline" className="flex flex-col h-20 space-y-1">
            <RefreshCw className="w-5 h-5" />
            <span className="text-xs">Refresh Data</span>
          </Button>
          
          <Button variant="outline" className="flex flex-col h-20 space-y-1">
            <Download className="w-5 h-5" />
            <span className="text-xs">Export Users</span>
          </Button>
          
          <Button variant="outline" className="flex flex-col h-20 space-y-1">
            <Shield className="w-5 h-5" />
            <span className="text-xs">System Health</span>
          </Button>
          
          <Button variant="outline" className="flex flex-col h-20 space-y-1">
            <Trash2 className="w-5 h-5" />
            <span className="text-xs">Clear Test Data</span>
          </Button>
        </div>
        
        <div className="space-y-2">
          <Button className="w-full" variant="default">
            <Send className="w-4 h-4 mr-2" />
            Send Test Message
          </Button>
          
          <Button className="w-full" variant="secondary">
            <Activity className="w-4 h-4 mr-2" />
            View Performance
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}