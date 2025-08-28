'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  User, 
  Settings, 
  Bell, 
  Moon, 
  Globe, 
  Shield, 
  CreditCard, 
  Trash2, 
  Save, 
  Camera,
  Mail,
  Phone,
  MapPin,
  Award,
  Calendar,
  CheckCircle
} from 'lucide-react';
import { useUser } from '@/contexts/user-context';
import { ClientOnly } from '@/components/client-only';

export default function ProfilePage() {
  const { user, updateProfile, updatePreferences, changePassword, deleteAccount } = useUser();
  // const router = useRouter();
  const [activeTab, setActiveTab] = useState('profile');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const [profileData, setProfileData] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    bio: user?.bio || '',
    phone: user?.phone || '',
    location: user?.location || '',
    specialization: user?.specialization || '',
    institution: user?.institution || ''
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  if (!user) {
    // router.push('/login');
    return null;
  }

  const handleProfileUpdate = async () => {
    setIsLoading(true);
    setMessage(null);

    try {
      await updateProfile(profileData);
      setMessage({ type: 'success', text: 'Profile updated successfully!' });
    } catch (error) {
      setMessage({ type: 'error', text: error instanceof Error ? error.message : 'Failed to update profile' });
    } finally {
      setIsLoading(false);
    }
  };

  const handlePasswordChange = async () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setMessage({ type: 'error', text: 'New passwords do not match' });
      return;
    }

    if (passwordData.newPassword.length < 8) {
      setMessage({ type: 'error', text: 'Password must be at least 8 characters long' });
      return;
    }

    setIsLoading(true);
    setMessage(null);

    try {
      await changePassword(passwordData.currentPassword, passwordData.newPassword);
      setMessage({ type: 'success', text: 'Password changed successfully!' });
      setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
    } catch (error) {
      setMessage({ type: 'error', text: error instanceof Error ? error.message : 'Failed to change password' });
    } finally {
      setIsLoading(false);
    }
  };

  const handlePreferenceUpdate = async (key: string, value: boolean | string) => {
    try {
      await updatePreferences({ [key]: value });
      setMessage({ type: 'success', text: 'Preferences updated successfully!' });
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to update preferences' });
    }
  };

  const handleAccountDeletion = async () => {
    if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      try {
        await deleteAccount();
        // router.push('/');
      } catch (error) {
        setMessage({ type: 'error', text: 'Failed to delete account' });
      }
    }
  };

  const tabs = [
    { id: 'profile', name: 'Profile', icon: User },
    { id: 'preferences', name: 'Preferences', icon: Settings },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'subscription', name: 'Subscription', icon: CreditCard }
  ];

  return (
    <ClientOnly>
      <>
        <Header />
        
        <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white">
          <div className="responsive-container py-8 sm:py-12">
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Profile Settings
              </h1>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Manage your account, preferences, and subscription settings
              </p>
            </div>
          </div>
        </section>

        {/* Settings Content */}
        <section className="responsive-container py-8 sm:py-12">
          <div className="max-w-6xl mx-auto">
            {/* Message Alert */}
            {message && (
              <Alert className={`mb-6 ${message.type === 'success' ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}`}>
                <CheckCircle className={`h-4 w-4 ${message.type === 'success' ? 'text-green-600' : 'text-red-600'}`} />
                <AlertDescription className={message.type === 'success' ? 'text-green-800' : 'text-red-800'}>
                  {message.text}
                </AlertDescription>
              </Alert>
            )}

            {/* Tab Navigation */}
            <div className="flex flex-wrap gap-2 mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
                  }`}
                >
                  <tab.icon className="h-4 w-4" />
                  {tab.name}
                </button>
              ))}
            </div>

            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Profile Picture */}
                <div className="lg:col-span-1">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Camera className="h-5 w-5" />
                        Profile Picture
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <Avatar className="w-32 h-32 mx-auto mb-4">
                        <AvatarImage src={user.avatar} alt={`${user.firstName} ${user.lastName}`} />
                        <AvatarFallback className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                          {user.firstName[0]}{user.lastName[0]}
                        </AvatarFallback>
                      </Avatar>
                      <Button variant="outline" className="w-full">
                        <Camera className="h-4 w-4 mr-2" />
                        Change Photo
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                {/* Profile Form */}
                <div className="lg:col-span-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <User className="h-5 w-5" />
                        Personal Information
                      </CardTitle>
                      <CardDescription>
                        Update your personal details and professional information
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input
                            id="firstName"
                            value={profileData.firstName}
                            onChange={(e) => setProfileData(prev => ({ ...prev, firstName: e.target.value }))}
                            placeholder="Enter first name"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input
                            id="lastName"
                            value={profileData.lastName}
                            onChange={(e) => setProfileData(prev => ({ ...prev, lastName: e.target.value }))}
                            placeholder="Enter last name"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="bio">Bio</Label>
                        <Textarea
                          id="bio"
                          value={profileData.bio}
                          onChange={(e) => setProfileData(prev => ({ ...prev, bio: e.target.value }))}
                          placeholder="Tell us about yourself and your interests..."
                          rows={4}
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            value={profileData.phone}
                            onChange={(e) => setProfileData(prev => ({ ...prev, phone: e.target.value }))}
                            placeholder="Enter phone number"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="location">Location</Label>
                          <Input
                            id="location"
                            value={profileData.location}
                            onChange={(e) => setProfileData(prev => ({ ...prev, location: e.target.value }))}
                            placeholder="Enter your location"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="specialization">Specialization</Label>
                          <Input
                            id="specialization"
                            value={profileData.specialization}
                            onChange={(e) => setProfileData(prev => ({ ...prev, specialization: e.target.value }))}
                            placeholder="e.g., Orthopedic, Neurological"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="institution">Institution</Label>
                          <Input
                            id="institution"
                            value={profileData.institution}
                            onChange={(e) => setProfileData(prev => ({ ...prev, institution: e.target.value }))}
                            placeholder="e.g., University, Hospital"
                          />
                        </div>
                      </div>

                      <Button 
                        onClick={handleProfileUpdate} 
                        disabled={isLoading}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600"
                      >
                        {isLoading ? (
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Updating...
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                            <Save className="h-4 w-4" />
                            Save Changes
                          </div>
                        )}
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {/* Preferences Tab */}
            {activeTab === 'preferences' && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="h-5 w-5" />
                    Preferences
                  </CardTitle>
                  <CardDescription>
                    Customize your experience and notification settings
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-slate-900">Notifications</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Bell className="h-5 w-5 text-blue-600" />
                            <div>
                              <p className="font-medium">Push Notifications</p>
                              <p className="text-sm text-slate-600">Get notified about new content and updates</p>
                            </div>
                          </div>
                          <Switch
                            checked={user.preferences.notifications}
                            onCheckedChange={(checked) => handlePreferenceUpdate('notifications', checked)}
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Mail className="h-5 w-5 text-green-600" />
                            <div>
                              <p className="font-medium">Email Updates</p>
                              <p className="text-sm text-slate-600">Receive email newsletters and updates</p>
                            </div>
                          </div>
                          <Switch
                            checked={user.preferences.emailUpdates}
                            onCheckedChange={(checked) => handlePreferenceUpdate('emailUpdates', checked)}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-slate-900">Appearance</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Moon className="h-5 w-5 text-purple-600" />
                            <div>
                              <p className="font-medium">Dark Mode</p>
                              <p className="text-sm text-slate-600">Switch to dark theme</p>
                            </div>
                          </div>
                          <Switch
                            checked={user.preferences.darkMode}
                            onCheckedChange={(checked) => handlePreferenceUpdate('darkMode', checked)}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="language">Language</Label>
                          <Select 
                            value={user.preferences.language} 
                            onValueChange={(value) => handlePreferenceUpdate('language', value)}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select language" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="en">English</SelectItem>
                              <SelectItem value="hi">Hindi</SelectItem>
                              <SelectItem value="mr">Marathi</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Security Tab */}
            {activeTab === 'security' && (
              <div className="space-y-6">
                {/* Change Password */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-5 w-5" />
                      Change Password
                    </CardTitle>
                    <CardDescription>
                      Update your password to keep your account secure
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="currentPassword">Current Password</Label>
                      <Input
                        id="currentPassword"
                        type="password"
                        value={passwordData.currentPassword}
                        onChange={(e) => setPasswordData(prev => ({ ...prev, currentPassword: e.target.value }))}
                        placeholder="Enter current password"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="newPassword">New Password</Label>
                        <Input
                          id="newPassword"
                          type="password"
                          value={passwordData.newPassword}
                          onChange={(e) => setPasswordData(prev => ({ ...prev, newPassword: e.target.value }))}
                          placeholder="Enter new password"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirm New Password</Label>
                        <Input
                          id="confirmPassword"
                          type="password"
                          value={passwordData.confirmPassword}
                          onChange={(e) => setPasswordData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                          placeholder="Confirm new password"
                        />
                      </div>
                    </div>
                    <Button 
                      onClick={handlePasswordChange} 
                      disabled={isLoading}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600"
                    >
                      {isLoading ? 'Updating...' : 'Change Password'}
                    </Button>
                  </CardContent>
                </Card>

                {/* Delete Account */}
                <Card className="border-red-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-red-600">
                      <Trash2 className="h-5 w-5" />
                      Delete Account
                    </CardTitle>
                    <CardDescription className="text-red-600">
                      This action cannot be undone. All your data will be permanently deleted.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      variant="destructive" 
                      onClick={handleAccountDeletion}
                      className="w-full"
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete My Account
                    </Button>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Subscription Tab */}
            {activeTab === 'subscription' && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5" />
                    Subscription Management
                  </CardTitle>
                  <CardDescription>
                    Manage your subscription plan and billing information
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-slate-900">Current Plan</h3>
                      <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-lg font-bold text-blue-900">
                            {user.subscription.plan.charAt(0).toUpperCase() + user.subscription.plan.slice(1)} Plan
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            user.subscription.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                          }`}>
                            {user.subscription.status.charAt(0).toUpperCase() + user.subscription.status.slice(1)}
                          </span>
                        </div>
                        <p className="text-sm text-slate-600">
                          Started: {new Date(user.subscription.startDate).toLocaleDateString()}
                        </p>
                        <p className="text-sm text-slate-600">
                          Expires: {new Date(user.subscription.endDate).toLocaleDateString()}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-slate-900">Actions</h3>
                      <div className="space-y-3">
                        <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600">
                          <CreditCard className="h-4 w-4 mr-2" />
                          Manage Billing
                        </Button>
                        <Button variant="outline" className="w-full">
                          <Calendar className="h-4 w-4 mr-2" />
                          View Billing History
                        </Button>
                        <Button variant="outline" className="w-full">
                          <Shield className="h-4 w-4 mr-2" />
                          Cancel Subscription
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
        </>
      </ClientOnly>
    );
  }
