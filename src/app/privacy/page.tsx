'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Shield, Eye, Lock, Users, Clock, Mail, Phone, MapPin, Heart, Baby, AlertTriangle, Database, Globe } from 'lucide-react';
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
      
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50 pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-green-900 via-emerald-900 to-green-900 text-white">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-teal-500/20 to-green-500/20 rounded-full blur-3xl"></div>
          
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
              
              <p className="text-lg sm:text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
                How we collect, use, and protect your personal information
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
                  Your Privacy Matters
                </h2>
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6">
                  At PhysioHelper, we are committed to protecting your privacy and personal information. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                  when you use our educational platform.
                </p>
                
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                  <p className="text-green-800 text-sm sm:text-base">
                    <strong>Important:</strong> This policy applies to all users of PhysioHelper, including students, 
                    healthcare professionals, and visitors to our website. For information about children's privacy, 
                    please see our <a href="/children-privacy" className="text-green-600 hover:text-green-800 underline font-semibold">Children's Privacy Policy</a>.
                  </p>
                </div>
              </div>
            </div>

            {/* Privacy Sections */}
            <div className="space-y-6 sm:space-y-8">
              {/* Information We Collect */}
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Database className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                      1. Information We Collect
                    </h3>
                    <div className="space-y-4">
                      <p className="text-slate-600 text-base leading-relaxed">
                        We collect information you provide directly to us and information we collect automatically:
                      </p>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-slate-900 mb-2">Personal Information:</h4>
                          <ul className="list-disc list-inside text-slate-600 text-base space-y-1 ml-4">
                            <li>Name, email address, and contact information</li>
                            <li>Account credentials and profile information</li>
                            <li>Educational background and professional qualifications</li>
                            <li>Payment information (processed securely by third parties)</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-slate-900 mb-2">Usage Information:</h4>
                          <ul className="list-disc list-inside text-slate-600 text-base space-y-1 ml-4">
                            <li>Learning progress and course completion data</li>
                            <li>Platform interactions and feature usage</li>
                            <li>Device information and browser type</li>
                            <li>IP address and location data</li>
                          </ul>
                        </div>
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
                    <div className="space-y-4">
                      <p className="text-slate-600 text-base leading-relaxed">
                        We use your information for the following purposes:
                      </p>
                      <ul className="list-disc list-inside text-slate-600 text-base space-y-2 ml-4">
                        <li>Providing and improving our educational services</li>
                        <li>Personalizing your learning experience</li>
                        <li>Processing payments and managing subscriptions</li>
                        <li>Communicating with you about our services</li>
                        <li>Ensuring platform security and preventing fraud</li>
                        <li>Complying with legal obligations</li>
                        <li>Conducting research and analytics (anonymized)</li>
                      </ul>
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <p className="text-green-800 text-sm">
                          <strong>Note:</strong> We never sell your personal information to third parties for marketing purposes.
                        </p>
                      </div>
                    </div>
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
                    <div className="space-y-4">
                      <p className="text-slate-600 text-base leading-relaxed">
                        We may share your information in the following limited circumstances:
                      </p>
                      <ul className="list-disc list-inside text-slate-600 text-base space-y-2 ml-4">
                        <li><strong>Service Providers:</strong> With trusted third parties who help us operate our platform</li>
                        <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                        <li><strong>Business Transfers:</strong> In connection with mergers or acquisitions</li>
                        <li><strong>Consent:</strong> When you have given us explicit consent</li>
                        <li><strong>Safety:</strong> To protect the safety of our users or the public</li>
                      </ul>
                      <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                        <p className="text-purple-800 text-sm">
                          <strong>Protection:</strong> All third parties are bound by strict confidentiality agreements 
                          and are only permitted to use your information for the specific purposes we authorize.
                        </p>
                      </div>
                    </div>
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
                    <div className="space-y-4">
                      <p className="text-slate-600 text-base leading-relaxed">
                        We implement comprehensive security measures to protect your information:
                      </p>
                      <ul className="list-disc list-inside text-slate-600 text-base space-y-2 ml-4">
                        <li>End-to-end encryption for data transmission</li>
                        <li>Secure servers with restricted access controls</li>
                        <li>Regular security audits and vulnerability assessments</li>
                        <li>Staff training on data protection best practices</li>
                        <li>Incident response procedures for data breaches</li>
                        <li>Regular backup and disaster recovery systems</li>
                      </ul>
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <p className="text-red-800 text-sm">
                          <strong>Security Commitment:</strong> While we strive to protect your information, 
                          no method of transmission over the internet is 100% secure. We cannot guarantee absolute security.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Your Rights */}
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                      5. Your Privacy Rights
                    </h3>
                    <div className="space-y-4">
                      <p className="text-slate-600 text-base leading-relaxed">
                        Depending on your location, you may have the following rights regarding your personal information:
                      </p>
                      <ul className="list-disc list-inside text-slate-600 text-base space-y-2 ml-4">
                        <li><strong>Access:</strong> Request a copy of your personal information</li>
                        <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                        <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                        <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                        <li><strong>Restriction:</strong> Request limitation of processing</li>
                        <li><strong>Objection:</strong> Object to certain types of processing</li>
                        <li><strong>Withdrawal:</strong> Withdraw consent where processing is based on consent</li>
                      </ul>
                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                        <p className="text-yellow-800 text-sm">
                          <strong>How to Exercise Rights:</strong> Contact us at 
                          <a href="mailto:privacy@physiohelper.com" className="text-yellow-600 hover:text-yellow-800 underline ml-1">
                            privacy@physiohelper.com
                          </a> to exercise any of these rights.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Children's Privacy */}
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Baby className="h-6 w-6 text-pink-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                      6. Children's Privacy
                    </h3>
                    <div className="space-y-4">
                      <p className="text-slate-600 text-base leading-relaxed">
                        We are committed to protecting the privacy of children under 13 years of age. 
                        We do not knowingly collect personal information from children under 13 without 
                        verifiable parental consent.
                      </p>
                      <p className="text-slate-600 text-base leading-relaxed">
                        If we learn that we have collected personal information from a child under 13 
                        without parental consent, we will delete that information immediately.
                      </p>
                      <div className="bg-pink-50 border border-pink-200 rounded-lg p-4">
                        <p className="text-pink-800 text-sm">
                          <strong>Children's Privacy Policy:</strong> For detailed information about how we 
                          protect children's privacy, please review our 
                          <a href="/children-privacy" className="text-pink-600 hover:text-pink-800 underline font-semibold ml-1">
                            Children's Privacy Policy
                          </a>.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cookies and Tracking */}
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Globe className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                      7. Cookies and Tracking Technologies
                    </h3>
                    <div className="space-y-4">
                      <p className="text-slate-600 text-base leading-relaxed">
                        We use cookies and similar technologies to enhance your experience:
                      </p>
                      <ul className="list-disc list-inside text-slate-600 text-base space-y-2 ml-4">
                        <li><strong>Essential Cookies:</strong> Required for platform functionality</li>
                        <li><strong>Analytics Cookies:</strong> Help us understand how you use our platform</li>
                        <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                        <li><strong>Marketing Cookies:</strong> Used for targeted advertising (with consent)</li>
                      </ul>
                      <p className="text-slate-600 text-base leading-relaxed">
                        You can control cookie settings through your browser preferences. 
                        Note that disabling certain cookies may affect platform functionality.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* International Transfers */}
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Globe className="h-6 w-6 text-teal-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                      8. International Data Transfers
                    </h3>
                    <div className="space-y-4">
                      <p className="text-slate-600 text-base leading-relaxed">
                        Your information may be transferred to and processed in countries other than your own. 
                        We ensure appropriate safeguards are in place for such transfers, including:
                      </p>
                      <ul className="list-disc list-inside text-slate-600 text-base space-y-2 ml-4">
                        <li>Standard contractual clauses approved by relevant authorities</li>
                        <li>Adequacy decisions by data protection authorities</li>
                        <li>Certification schemes and codes of conduct</li>
                        <li>Binding corporate rules for intra-group transfers</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl shadow-lg p-6 sm:p-8 text-white">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                      9. Contact Information
                    </h3>
                    <p className="text-green-100 text-base leading-relaxed mb-6">
                      For questions about this Privacy Policy or to exercise your privacy rights, 
                      please contact our Privacy Officer:
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                            <MapPin className="h-4 w-4 text-white" />
                          </div>
                          <div>
                            <p className="font-semibold text-white">Address</p>
                            <p className="text-green-100 text-sm">Mumbai, Maharashtra, India</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                            <Mail className="h-4 w-4 text-white" />
                          </div>
                          <div>
                            <p className="font-semibold text-white">Privacy Email</p>
                            <p className="text-green-100 text-sm">privacy@physiohelper.com</p>
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
                            <p className="text-green-100 text-sm">+91 9398157255</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                            <Clock className="h-4 w-4 text-white" />
                          </div>
                          <div>
                            <p className="font-semibold text-white">Business Hours</p>
                            <p className="text-green-100 text-sm">Mon-Fri: 9AM-6PM IST</p>
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
                  Questions About Privacy?
                </h3>
                <p className="text-slate-600 text-base leading-relaxed mb-6">
                  We're committed to transparency and protecting your privacy. If you have any questions 
                  about this Privacy Policy or how we handle your information, please don't hesitate to contact us.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a 
                    href="mailto:privacy@physiohelper.com"
                    className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                  >
                    <Mail className="h-4 w-4" />
                    Contact Privacy Officer
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
