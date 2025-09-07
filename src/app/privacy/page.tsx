'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Shield, Eye, Lock, Database, Users, Globe, Mail, Phone, MapPin, Clock, AlertTriangle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function PrivacyPage() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <>
      <Header />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 responsive-container py-12 sm:py-16 md:py-20 lg:py-24">
            <div className="text-center space-y-4 sm:space-y-6">
              <div className="flex justify-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/10 rounded-full flex items-center justify-center">
                  <Shield className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                </div>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Privacy Policy
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                Your privacy is important to us. Learn how we collect, use, and protect your information.
              </p>
              
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                  Last updated: {currentDate}
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  <Shield className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                  GDPR Compliant
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  <Lock className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                  COPPA Compliant
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Content */}
        <section className="responsive-container py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 mb-8">
              <div className="prose prose-slate max-w-none">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                  Introduction
                </h2>
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6">
                  PhysioHelper ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy 
                  explains how we collect, use, disclose, and safeguard your information when you visit our website 
                  <span className="font-semibold text-blue-600"> physiohelper.com </span> 
                  and use our services. Please read this privacy policy carefully.
                </p>
                
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                  <p className="text-blue-800 text-sm sm:text-base">
                    <strong>Important:</strong> By using our website, you consent to the data practices described in this policy. 
                    If you do not agree with our policies and practices, please do not use our services.
                  </p>
                </div>
              </div>
            </div>

            {/* Information We Collect */}
            <div className="space-y-6 sm:space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Database className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                      1. Information We Collect
                    </h3>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-slate-800 mb-2">Personal Information</h4>
                        <p className="text-slate-600 text-base leading-relaxed mb-3">
                          We may collect personal information that you voluntarily provide to us, including:
                        </p>
                        <ul className="list-disc list-inside text-slate-600 text-base space-y-2 ml-4">
                          <li>Name and contact information (email address, phone number)</li>
                          <li>Account credentials (username, password)</li>
                          <li>Profile information (educational background, professional interests)</li>
                          <li>Payment information (processed securely through Razorpay)</li>
                          <li>Communication preferences</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-slate-800 mb-2">Usage Information</h4>
                        <p className="text-slate-600 text-base leading-relaxed mb-3">
                          We automatically collect certain information about your device and usage patterns:
                        </p>
                        <ul className="list-disc list-inside text-slate-600 text-base space-y-2 ml-4">
                          <li>IP address and device identifiers</li>
                          <li>Browser type and version</li>
                          <li>Operating system information</li>
                          <li>Pages visited and time spent on our site</li>
                          <li>Referring website information</li>
                          <li>Search queries and preferences</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-slate-800 mb-2">Cookies and Tracking Technologies</h4>
                        <p className="text-slate-600 text-base leading-relaxed mb-3">
                          We use cookies, web beacons, and similar technologies to enhance your experience:
                        </p>
                        <ul className="list-disc list-inside text-slate-600 text-base space-y-2 ml-4">
                          <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
                          <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
                          <li><strong>Advertising Cookies:</strong> Used to display relevant advertisements (Google AdSense)</li>
                          <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* How We Use Information */}
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Eye className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                      2. How We Use Your Information
                    </h3>
                    <p className="text-slate-600 text-base leading-relaxed mb-4">
                      We use the information we collect for various purposes, including:
                    </p>
                    <ul className="list-disc list-inside text-slate-600 text-base space-y-2 ml-4">
                      <li>Providing and maintaining our educational services</li>
                      <li>Processing payments and managing subscriptions</li>
                      <li>Personalizing your learning experience</li>
                      <li>Communicating with you about updates and new features</li>
                      <li>Analyzing usage patterns to improve our services</li>
                      <li>Displaying relevant advertisements (Google AdSense)</li>
                      <li>Complying with legal obligations</li>
                      <li>Protecting against fraud and security threats</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Information Sharing */}
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                      3. Information Sharing and Disclosure
                    </h3>
                    <p className="text-slate-600 text-base leading-relaxed mb-4">
                      We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
                    </p>
                    <ul className="list-disc list-inside text-slate-600 text-base space-y-2 ml-4">
                      <li><strong>Service Providers:</strong> With trusted third-party vendors who assist in operating our website</li>
                      <li><strong>Payment Processing:</strong> With Razorpay for secure payment processing</li>
                      <li><strong>Analytics:</strong> With Google Analytics to understand website usage</li>
                      <li><strong>Advertising:</strong> With Google AdSense for displaying relevant advertisements</li>
                      <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                      <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Data Security */}
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Lock className="h-6 w-6 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                      4. Data Security
                    </h3>
                    <p className="text-slate-600 text-base leading-relaxed mb-4">
                      We implement appropriate security measures to protect your personal information:
                    </p>
                    <ul className="list-disc list-inside text-slate-600 text-base space-y-2 ml-4">
                      <li>SSL encryption for data transmission</li>
                      <li>Secure servers and databases</li>
                      <li>Regular security audits and updates</li>
                      <li>Access controls and authentication</li>
                      <li>Employee training on data protection</li>
                    </ul>
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-4">
                      <p className="text-red-800 text-sm">
                        <strong>Note:</strong> While we strive to protect your information, no method of transmission over the internet is 100% secure. 
                        We cannot guarantee absolute security.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Your Rights */}
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                      5. Your Rights and Choices
                    </h3>
                    <p className="text-slate-600 text-base leading-relaxed mb-4">
                      You have certain rights regarding your personal information:
                    </p>
                    <ul className="list-disc list-inside text-slate-600 text-base space-y-2 ml-4">
                      <li><strong>Access:</strong> Request access to your personal information</li>
                      <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                      <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                      <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
                      <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                      <li><strong>Cookie Preferences:</strong> Manage cookie settings in your browser</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Children's Privacy */}
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                      6. Children's Privacy (COPPA Compliance)
                    </h3>
                    <p className="text-slate-600 text-base leading-relaxed mb-4">
                      Our services are not directed to children under 13 years of age. We do not knowingly collect 
                      personal information from children under 13. If you are a parent or guardian and believe your 
                      child has provided us with personal information, please contact us immediately.
                    </p>
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <p className="text-yellow-800 text-sm">
                        <strong>Important:</strong> If we discover that we have collected personal information from a child 
                        under 13, we will delete such information from our servers immediately.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* International Users */}
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Globe className="h-6 w-6 text-teal-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                      7. International Users and GDPR Compliance
                    </h3>
                    <p className="text-slate-600 text-base leading-relaxed mb-4">
                      If you are accessing our services from outside India, please note that your information may be 
                      transferred to, stored, and processed in India. We comply with applicable data protection laws, 
                      including the General Data Protection Regulation (GDPR) for EU users.
                    </p>
                    <p className="text-slate-600 text-base leading-relaxed">
                      For EU users, we rely on the following legal bases for processing your personal information:
                    </p>
                    <ul className="list-disc list-inside text-slate-600 text-base space-y-2 ml-4 mt-2">
                      <li>Consent (for marketing communications)</li>
                      <li>Contract performance (for providing our services)</li>
                      <li>Legitimate interests (for website analytics and security)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg p-6 sm:p-8 text-white">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                      8. Contact Us
                    </h3>
                    <p className="text-blue-100 text-base leading-relaxed mb-6">
                      If you have any questions about this Privacy Policy or our data practices, please contact us:
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                            <MapPin className="h-4 w-4 text-white" />
                          </div>
                          <div>
                            <p className="font-semibold text-white">Address</p>
                            <p className="text-blue-100 text-sm">Mumbai, Maharashtra, India</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                            <Mail className="h-4 w-4 text-white" />
                          </div>
                          <div>
                            <p className="font-semibold text-white">Email</p>
                            <p className="text-blue-100 text-sm">privacy@physiohelper.com</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                            <Phone className="h-4 w-4 text-white" />
                          </div>
                          <div>
                            <p className="font-semibold text-white">Phone</p>
                            <p className="text-blue-100 text-sm">+91 9398157255</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                            <Clock className="h-4 w-4 text-white" />
                          </div>
                          <div>
                            <p className="font-semibold text-white">Response Time</p>
                            <p className="text-blue-100 text-sm">Within 48 hours</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Final Note */}
            <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 mt-8 text-center">
              <div className="max-w-2xl mx-auto">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
                  Questions About Your Privacy?
                </h3>
                <p className="text-slate-600 text-base leading-relaxed mb-6">
                  We're committed to protecting your privacy and being transparent about our data practices. 
                  If you have any questions or concerns, please don't hesitate to contact us.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a 
                    href="mailto:privacy@physiohelper.com"
                    className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                  >
                    <Mail className="h-4 w-4" />
                    Contact Privacy Team
                  </a>
                  <a 
                    href="/"
                    className="inline-flex items-center justify-center gap-2 bg-slate-200 hover:bg-slate-300 text-slate-700 px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                  >
                    Back to Home
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
