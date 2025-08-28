'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Calendar,
  Clock,
  TrendingUp,
  BookOpen,
  Target,
  Award,
  Star,
  Users,
  FileText,
  BarChart3,
  Activity,
  Zap,
  ChevronRight,
  Plus,
  Play,
  CheckCircle,
  Clock3,
  Trophy,
  Lightbulb,
  Settings,
  Bell,
  Search,
  Filter,
  Download,
  Share2,
  Eye,
  Heart,
  MessageSquare,
  Bookmark,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import { useUser } from '@/contexts/user-context';
import { ClientOnly } from '@/components/client-only';

export default function DashboardPage() {
  const { user } = useUser();
  // const router = useRouter();
  const [activeTab, setActiveTab] = useState('overview');

  // Redirect if not logged in
  if (!user) {
    // router.push('/login');
    return null;
  }

  // Mock data for demonstration
  const stats = {
    coursesCompleted: 12,
    currentStreak: 8,
    totalPoints: 2840,
    studyTime: 156, // hours
    rank: 'Gold',
    level: 24
  };

  const recentCourses = [
    {
      id: 1,
      title: 'Advanced Biomechanics',
      progress: 85,
      nextLesson: 'Joint Kinematics Analysis',
      timeSpent: '12h 30m',
      lastAccessed: '2 hours ago',
      category: 'Clinical Skills'
    },
    {
      id: 2,
      title: 'Neurological Assessment',
      progress: 62,
      nextLesson: 'Cranial Nerve Testing',
      timeSpent: '8h 45m',
      lastAccessed: '1 day ago',
      category: 'Assessment'
    },
    {
      id: 3,
      title: 'Sports Rehabilitation',
      progress: 43,
      nextLesson: 'Return to Sport Protocols',
      timeSpent: '6h 20m',
      lastAccessed: '3 days ago',
      category: 'Rehabilitation'
    }
  ];

  const achievements = [
    { id: 1, title: 'First Course', description: 'Completed your first course', icon: Trophy, earned: true, date: '2 weeks ago' },
    { id: 2, title: 'Study Streak', description: '7 days in a row', icon: Zap, earned: true, date: '1 week ago' },
    { id: 3, title: 'Perfect Score', description: '100% on assessment', icon: Star, earned: true, date: '3 days ago' },
    { id: 4, title: 'Community Helper', description: 'Helped 10 students', icon: Users, earned: false, date: null },
    { id: 5, title: 'Speed Learner', description: 'Complete course in 24h', icon: Clock3, earned: false, date: null }
  ];

  const upcomingEvents = [
    { id: 1, title: 'Live Q&A Session', time: 'Today, 3:00 PM', type: 'live' },
    { id: 2, title: 'Case Study Review', time: 'Tomorrow, 10:00 AM', type: 'workshop' },
    { id: 3, title: 'Exam Preparation', time: 'Friday, 2:00 PM', type: 'exam' }
  ];

  const quickActions = [
    { title: 'Continue Learning', icon: Play, action: () => {}, color: 'from-blue-500 to-blue-600' },
    { title: 'Take Assessment', icon: Target, action: () => {}, color: 'from-green-500 to-green-600' },
    { title: 'Upload Materials', icon: Plus, action: () => {}, color: 'from-purple-500 to-purple-600' },
    { title: 'View Resources', icon: BookOpen, action: () => {}, color: 'from-orange-500 to-orange-600' }
  ];

  const formatTime = (hours: number) => {
    if (hours < 24) return `${hours}h`;
    const days = Math.floor(hours / 24);
    const remainingHours = hours % 24;
    return `${days}d ${remainingHours}h`;
  };

  return (
    <ClientOnly>
      <>
        <Header />
        
        <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 pt-20">
        {/* Dashboard Header */}
        <section className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white">
          <div className="responsive-container py-8 sm:py-12">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <Avatar className="w-16 h-16 sm:w-20 sm:h-20 border-4 border-white/20">
                  <AvatarImage src={user.avatar} alt={`${user.firstName} ${user.lastName}`} />
                  <AvatarFallback className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600">
                    {user.firstName[0]}{user.lastName[0]}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
                    Welcome back, {user.firstName}! 👋
                  </h1>
                  <p className="text-blue-100 text-lg">
                    {user.role} • {user.specialization || 'Physiotherapy Student'}
                  </p>
                  <div className="flex items-center gap-4 mt-3">
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                      <Trophy className="w-4 h-4 mr-2" />
                      {stats.rank} Level
                    </Badge>
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                      <Star className="w-4 h-4 mr-2" />
                      Level {stats.level}
                    </Badge>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/10">
                  <Bell className="w-4 h-4 mr-2" />
                  Notifications
                </Button>
                <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/10">
                  <Settings className="w-4 h-4 mr-2" />
                  Settings
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Dashboard Content */}
        <section className="responsive-container py-8">
          {/* Stats Overview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-blue-600 font-medium">Courses Completed</p>
                    <p className="text-3xl font-bold text-blue-900">{stats.coursesCompleted}</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="mt-4">
                  <Progress value={75} className="h-2" />
                  <p className="text-xs text-blue-600 mt-1">75% of goal</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-green-600 font-medium">Current Streak</p>
                    <p className="text-3xl font-bold text-green-900">{stats.currentStreak} days</p>
                  </div>
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center gap-1">
                    <TrendingUp className="h-4 w-4 text-green-600" />
                    <span className="text-xs text-green-600">+2 days this week</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-purple-600 font-medium">Total Points</p>
                    <p className="text-3xl font-bold text-purple-900">{stats.totalPoints.toLocaleString()}</p>
                  </div>
                  <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center gap-1">
                    <ArrowUpRight className="h-4 w-4 text-purple-600" />
                    <span className="text-xs text-purple-600">+320 this week</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-orange-600 font-medium">Study Time</p>
                    <p className="text-3xl font-bold text-orange-900">{formatTime(stats.studyTime)}</p>
                  </div>
                  <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center gap-1">
                    <Activity className="h-4 w-4 text-orange-600" />
                    <span className="text-xs text-orange-600">12h this week</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {quickActions.map((action, index) => (
                <Card 
                  key={index} 
                  className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                  onClick={action.action}
                >
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 bg-gradient-to-r ${action.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <action.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {action.title}
                    </h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Main Dashboard Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto mb-8">
              <TabsTrigger value="overview" className="flex items-center gap-2">
                <BarChart3 className="h-4 w-4" />
                Overview
              </TabsTrigger>
              <TabsTrigger value="courses" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                My Courses
              </TabsTrigger>
              <TabsTrigger value="achievements" className="flex items-center gap-2">
                <Trophy className="h-4 w-4" />
                Achievements
              </TabsTrigger>
              <TabsTrigger value="schedule" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Schedule
              </TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Recent Courses */}
                <div className="lg:col-span-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <BookOpen className="h-5 w-5" />
                        Recent Courses
                      </CardTitle>
                      <CardDescription>Continue where you left off</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {recentCourses.map((course) => (
                        <div key={course.id} className="flex items-center gap-4 p-4 rounded-lg border hover:bg-muted/50 transition-colors cursor-pointer">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                            <BookOpen className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-foreground truncate">{course.title}</h4>
                            <p className="text-sm text-muted-foreground">{course.nextLesson}</p>
                            <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {course.timeSpent}
                              </span>
                              <span>{course.lastAccessed}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-primary">{course.progress}%</div>
                            <Progress value={course.progress} className="w-20 h-2 mt-1" />
                          </div>
                          <Button size="sm" variant="ghost">
                            <Play className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>

                {/* Upcoming Events */}
                <div>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Calendar className="h-5 w-5" />
                        Upcoming Events
                      </CardTitle>
                      <CardDescription>Your schedule for the week</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {upcomingEvents.map((event) => (
                        <div key={event.id} className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors cursor-pointer">
                          <div className={`w-3 h-3 rounded-full ${
                            event.type === 'live' ? 'bg-red-500' : 
                            event.type === 'workshop' ? 'bg-blue-500' : 'bg-green-500'
                          }`} />
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-foreground text-sm truncate">{event.title}</h4>
                            <p className="text-xs text-muted-foreground">{event.time}</p>
                          </div>
                          <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
                            <ChevronRight className="h-3 w-3" />
                          </Button>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Courses Tab */}
            <TabsContent value="courses" className="mt-0">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>My Learning Journey</CardTitle>
                      <CardDescription>Track your progress across all courses</CardDescription>
                    </div>
                    <Button>
                      <Plus className="h-4 w-4 mr-2" />
                      Enroll in New Course
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {recentCourses.map((course) => (
                      <div key={course.id} className="flex items-center gap-6 p-6 rounded-xl border hover:shadow-md transition-all duration-300">
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                          <BookOpen className="h-10 w-10 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-semibold text-foreground">{course.title}</h3>
                            <Badge variant="secondary">{course.category}</Badge>
                          </div>
                          <p className="text-muted-foreground mb-3">Next: {course.nextLesson}</p>
                          <div className="flex items-center gap-6 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {course.timeSpent}
                            </span>
                            <span className="flex items-center gap-1">
                              <Activity className="h-4 w-4" />
                              Last: {course.lastAccessed}
                            </span>
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-primary mb-2">{course.progress}%</div>
                          <Progress value={course.progress} className="w-24 h-3" />
                          <Button className="mt-3" size="sm">
                            <Play className="h-4 w-4 mr-2" />
                            Continue
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Achievements Tab */}
            <TabsContent value="achievements" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="h-5 w-5" />
                    Your Achievements
                  </CardTitle>
                  <CardDescription>Celebrate your learning milestones</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {achievements.map((achievement) => (
                      <Card 
                        key={achievement.id} 
                        className={`text-center transition-all duration-300 ${
                          achievement.earned 
                            ? 'bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200 hover:shadow-lg' 
                            : 'bg-muted/30 border-muted'
                        }`}
                      >
                        <CardContent className="p-6">
                          <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
                            achievement.earned 
                              ? 'bg-gradient-to-r from-yellow-500 to-orange-500' 
                              : 'bg-muted'
                          }`}>
                            <achievement.icon className={`h-8 w-8 ${
                              achievement.earned ? 'text-white' : 'text-muted-foreground'
                            }`} />
                          </div>
                          <h3 className={`font-semibold mb-2 ${
                            achievement.earned ? 'text-foreground' : 'text-muted-foreground'
                          }`}>
                            {achievement.title}
                          </h3>
                          <p className={`text-sm mb-3 ${
                            achievement.earned ? 'text-muted-foreground' : 'text-muted-foreground/70'
                          }`}>
                            {achievement.description}
                          </p>
                          {achievement.earned ? (
                            <div className="flex items-center justify-center gap-2 text-xs text-yellow-600">
                              <CheckCircle className="h-3 w-3" />
                              Earned {achievement.date}
                            </div>
                          ) : (
                            <div className="text-xs text-muted-foreground">
                              Keep learning to unlock!
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Schedule Tab */}
            <TabsContent value="schedule" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Learning Schedule
                  </CardTitle>
                  <CardDescription>Plan your study sessions and track your progress</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {upcomingEvents.map((event, index) => (
                      <div key={event.id} className="flex items-center gap-4 p-4 rounded-lg border hover:bg-muted/50 transition-colors">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                          event.type === 'live' ? 'bg-red-500' : 
                          event.type === 'workshop' ? 'bg-blue-500' : 'bg-green-500'
                        }`}>
                          {event.type === 'live' ? (
                            <Activity className="h-6 w-6 text-white" />
                          ) : event.type === 'workshop' ? (
                            <Users className="h-6 w-6 text-white" />
                          ) : (
                            <Target className="h-6 w-6 text-white" />
                          )}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground">{event.title}</h3>
                          <p className="text-sm text-muted-foreground">{event.time}</p>
                        </div>
                        <Badge variant="secondary" className="capitalize">
                          {event.type}
                        </Badge>
                        <Button size="sm" variant="outline">
                          Join
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>
      </main>
      
      <Footer />
        </>
      </ClientOnly>
    );
  }
