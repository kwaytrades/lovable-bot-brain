import { LucideIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface StatCardProps {
  title: string
  value: string | number
  change?: string
  changeType?: "positive" | "negative" | "neutral"
  icon: LucideIcon
  description?: string
  badge?: string
  gradient?: boolean
}

export function StatCard({ 
  title, 
  value, 
  change, 
  changeType = "neutral", 
  icon: Icon, 
  description,
  badge,
  gradient = false
}: StatCardProps) {
  const getChangeColor = () => {
    switch (changeType) {
      case "positive": return "text-success"
      case "negative": return "text-destructive"
      default: return "text-muted-foreground"
    }
  }

  return (
    <Card className={`relative overflow-hidden transition-all duration-300 hover:shadow-card ${gradient ? "bg-gradient-card" : ""}`}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <p className="text-sm font-medium text-muted-foreground">{title}</p>
              {badge && (
                <Badge variant="secondary" className="text-xs">
                  {badge}
                </Badge>
              )}
            </div>
            
            <div className="space-y-1">
              <h3 className="text-2xl font-bold text-foreground">{value}</h3>
              {change && (
                <p className={`text-sm ${getChangeColor()}`}>
                  {change}
                </p>
              )}
              {description && (
                <p className="text-xs text-muted-foreground">{description}</p>
              )}
            </div>
          </div>
          
          <div className={`p-3 rounded-xl ${gradient ? "bg-white/10" : "bg-primary/10"}`}>
            <Icon className={`w-6 h-6 ${gradient ? "text-white" : "text-primary"}`} />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}