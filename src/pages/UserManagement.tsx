import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { 
  Search, 
  Filter, 
  Download, 
  MoreHorizontal,
  Eye,
  MessageSquare,
  Trash2,
  Send
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { formatDistanceToNow } from "date-fns"

interface User {
  id: string
  phone: string
  email: string
  messageCount: number
  communicationStyle: "Casual" | "Professional" | "Friendly"
  experience: "Beginner" | "Intermediate" | "Advanced"
  riskTolerance: "Conservative" | "Moderate" | "Aggressive"
  lastActive: Date
  planType: "Free" | "Paid" | "Pro"
  status: "Active" | "New" | "Inactive"
  country: string
}

const mockUsers: User[] = [
  {
    id: "1",
    phone: "+1 (555) 123-4567",
    email: "john.doe@email.com",
    messageCount: 127,
    communicationStyle: "Professional",
    experience: "Advanced",
    riskTolerance: "Moderate",
    lastActive: new Date(Date.now() - 1000 * 60 * 15),
    planType: "Pro",
    status: "Active",
    country: "US"
  },
  {
    id: "2",
    phone: "+1 (555) 987-6543",
    email: "sarah.wilson@email.com",
    messageCount: 89,
    communicationStyle: "Casual",
    experience: "Intermediate",
    riskTolerance: "Aggressive",
    lastActive: new Date(Date.now() - 1000 * 60 * 60 * 2),
    planType: "Paid",
    status: "Active",
    country: "US"
  },
  {
    id: "3",
    phone: "+44 7700 900123",
    email: "alex.smith@email.com",
    messageCount: 45,
    communicationStyle: "Friendly",
    experience: "Beginner",
    riskTolerance: "Conservative",
    lastActive: new Date(Date.now() - 1000 * 60 * 60 * 24),
    planType: "Free",
    status: "New",
    country: "GB"
  }
]

export default function UserManagement() {
  const [users] = useState<User[]>(mockUsers)
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [experienceFilter, setExperienceFilter] = useState<string>("all")

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-success text-success-foreground"
      case "New": return "bg-primary text-primary-foreground"
      case "Inactive": return "bg-muted text-muted-foreground"
      default: return "bg-muted text-muted-foreground"
    }
  }

  const getPlanColor = (plan: string) => {
    switch (plan) {
      case "Pro": return "bg-secondary text-secondary-foreground"
      case "Paid": return "bg-primary text-primary-foreground"
      case "Free": return "bg-muted text-muted-foreground"
      default: return "bg-muted text-muted-foreground"
    }
  }

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.phone.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         user.communicationStyle.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesStatus = statusFilter === "all" || user.status === statusFilter
    const matchesExperience = experienceFilter === "all" || user.experience === experienceFilter
    
    return matchesSearch && matchesStatus && matchesExperience
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">User Management</h1>
          <p className="text-muted-foreground">Manage and monitor your bot users</p>
        </div>
        
        <div className="flex items-center space-x-3">
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export Users
          </Button>
          <Button>
            <Send className="w-4 h-4 mr-2" />
            Broadcast Message
          </Button>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-foreground">1,247</h3>
              <p className="text-sm text-muted-foreground">Total Users</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-success">89</h3>
              <p className="text-sm text-muted-foreground">Active Today</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-primary">234</h3>
              <p className="text-sm text-muted-foreground">New This Week</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-secondary">67%</h3>
              <p className="text-sm text-muted-foreground">Retention Rate</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardHeader>
          <CardTitle>User Database</CardTitle>
        </CardHeader>
        
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search by phone, email, or style..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="Active">Active</SelectItem>
                <SelectItem value="New">New</SelectItem>
                <SelectItem value="Inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value={experienceFilter} onValueChange={setExperienceFilter}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Filter by experience" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Experience</SelectItem>
                <SelectItem value="Beginner">Beginner</SelectItem>
                <SelectItem value="Intermediate">Intermediate</SelectItem>
                <SelectItem value="Advanced">Advanced</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Users Table */}
          <div className="rounded-lg border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>User</TableHead>
                  <TableHead>Messages</TableHead>
                  <TableHead>Style</TableHead>
                  <TableHead>Experience</TableHead>
                  <TableHead>Risk</TableHead>
                  <TableHead>Last Active</TableHead>
                  <TableHead>Plan</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="w-12"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{user.phone}</div>
                        <div className="text-sm text-muted-foreground">{user.email}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="font-medium">{user.messageCount}</div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{user.communicationStyle}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{user.experience}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{user.riskTolerance}</Badge>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm text-muted-foreground">
                        {formatDistanceToNow(user.lastActive, { addSuffix: true })}
                      </span>
                    </TableCell>
                    <TableCell>
                      <Badge className={getPlanColor(user.planType)}>
                        {user.planType}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(user.status)}>
                        {user.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Eye className="w-4 h-4 mr-2" />
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <MessageSquare className="w-4 h-4 mr-2" />
                            View Conversations
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Send className="w-4 h-4 mr-2" />
                            Send Message
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">
                            <Trash2 className="w-4 h-4 mr-2" />
                            Clear Data
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          
          <div className="flex items-center justify-between mt-4">
            <p className="text-sm text-muted-foreground">
              Showing {filteredUsers.length} of {users.length} users
            </p>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">Previous</Button>
              <Button variant="outline" size="sm">Next</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}