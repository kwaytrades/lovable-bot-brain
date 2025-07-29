import { useState } from "react"
import { 
  BarChart3, 
  Users, 
  MessageSquare, 
  Brain, 
  TrendingUp, 
  Settings,
  Home,
  ChevronDown,
  Activity
} from "lucide-react"
import { NavLink, useLocation } from "react-router-dom"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { Badge } from "@/components/ui/badge"

import { DollarSign } from "lucide-react"

const navigationItems = [
  { 
    title: "Overview", 
    url: "/", 
    icon: Home,
    description: "Dashboard overview"
  },
  { 
    title: "Cost Tracking", 
    url: "/costs", 
    icon: DollarSign,
    description: "API costs & spending",
    badge: "Live",
    isHighlighted: true
  },
  { 
    title: "User Management", 
    url: "/users", 
    icon: Users,
    description: "Manage bot users",
    badge: "1,247"
  },
  { 
    title: "Conversations", 
    url: "/conversations", 
    icon: MessageSquare,
    description: "Monitor live chats",
    badge: "Live"
  },
  { 
    title: "Bot Intelligence", 
    url: "/bot-intelligence", 
    icon: Brain,
    description: "AI performance analysis"
  },
  { 
    title: "Analytics", 
    url: "/analytics", 
    icon: TrendingUp,
    description: "Usage insights"
  },
  { 
    title: "Admin Tools", 
    url: "/admin", 
    icon: Settings,
    description: "System management"
  }
]

export function AppSidebar() {
  const { state } = useSidebar()
  const location = useLocation()
  const currentPath = location.pathname
  const collapsed = state === "collapsed"

  const isActive = (path: string) => {
    if (path === "/") return currentPath === "/"
    return currentPath.startsWith(path)
  }

  return (
    <Sidebar className={`${collapsed ? "w-16" : "w-72"} border-r border-sidebar-border bg-sidebar transition-all duration-300`}>
      <SidebarContent className="px-3 py-4">
        {/* Logo Section */}
        <div className="mb-8 px-3">
          {!collapsed ? (
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-sidebar-foreground">SMS Bot</h1>
                <p className="text-xs text-muted-foreground">Trading Dashboard</p>
              </div>
            </div>
          ) : (
            <div className="flex justify-center">
              <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow">
                <Activity className="w-6 h-6 text-white" />
              </div>
            </div>
          )}
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className={`${collapsed ? "hidden" : "block"} text-xs uppercase tracking-wider font-semibold text-muted-foreground mb-2`}>
            Navigation
          </SidebarGroupLabel>
          
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      className={`
                        group flex items-center px-3 py-3 text-sm font-medium rounded-lg transition-all duration-200
                        ${isActive(item.url) 
                          ? "bg-gradient-primary text-white shadow-elegant" 
                          : "text-sidebar-foreground hover:bg-sidebar-accent"
                        }
                        ${item.isHighlighted && !isActive(item.url) ? "ring-2 ring-primary/20" : ""}
                        ${collapsed ? "justify-center" : ""}
                      `}
                    >
                      <item.icon className={`${collapsed ? "w-6 h-6" : "w-5 h-5 mr-3"} flex-shrink-0`} />
                      
                      {!collapsed && (
                        <>
                          <span className="flex-1">{item.title}</span>
                          {item.badge && (
                            <Badge 
                              variant={item.badge === "Live" ? "destructive" : "secondary"}
                              className="text-xs px-2"
                            >
                              {item.badge}
                            </Badge>
                          )}
                        </>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Status Section */}
        {!collapsed && (
          <div className="mt-auto pt-6">
            <div className="px-3 py-3 bg-success/10 rounded-lg border border-success/20">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-success">System Online</span>
              </div>
              <p className="text-xs text-muted-foreground">
                All services operational
              </p>
            </div>
          </div>
        )}
      </SidebarContent>
    </Sidebar>
  )
}