'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Shield, Users, Lock, Eye, AlertTriangle, Clock, Mail, Phone, MapPin, Heart, Baby, UserCheck } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function ChildrenPrivacyPage() {
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
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-900 text-white">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 responsive-container py-12 sm:py-16 md:py-20 lg:py-24">
            <div className="text-center space-y-4 sm:space-y-6">
              <div className="flex justify-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/10 rounded-full flex items-center justify-center">
                  <Baby className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                </div>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Children's Privacy Policy
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                Protecting the privacy and safety of children under 13 years of age
              </p>
              
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                  Last updated: {currentDate}
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  <Shield className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                  COPPA Compliant
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Important Notice Section */}
        <section className="responsive-container py-8 sm:py-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 sm:p-8 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-3">
                    🛡️ Children's Privacy Protection Notice
                  </h2>
                  <p className="text-blue-800 text-base sm:text-lg leading-relaxed mb-4">
                    <strong>IMPORTANT:</strong> PhysioHelper is committed to protecting the privacy of children under 13 years of age. 
                    This Children's Privacy Policy explains our information collection, use, and disclosure practices 
                    for children's personal information in compliance with the Children's Online Privacy Protection Act (COPPA).
                  </p>
                  <div className="bg-blue-100 border border-blue-300 rounded-lg p-4">
                    <p className="text-blue-900 text-sm font-semibold">
                      🔒 We do not knowingly collect personal information from children under 13 without verifiable parental consent.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Policy Content */}
        <section className="responsive-container py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 sm:space-y-8">
              {/* Information We Collect */}
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Eye className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                      1. Information We Collect from Children
                    </h3>
                    <div className="space-y-4">
                      <p className="text-slate-600 text-base leading-relaxed">
                        We may collect the following types of information from children under 13:
                      </p>
                      <ul className="list-disc list-inside text-slate-600 text-base space-y-2 ml-4">
                        <li><strong>Account Information:</strong> Username, email address (with parental consent)</li>
                        <li><strong>Educational Data:</strong> Learning progress, quiz scores, course completion</li>
                        <li><strong>Usage Information:</strong> Pages visited, time spent, features used</li>
                        <li><strong>Communication:</strong> Messages sent through our platform (monitored)</li>
                        <li><strong>Technical Data:</strong> IP address, device information, browser type</li>
                      </ul>
                      <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                        <p className="text-green-800 text-sm">
                          <strong>Note:</strong> We only collect information that is necessary for providing our educational services 
                          and always with verifiable parental consent.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* How We Use Information */}
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                      2. How We Use Children's Information
                    </h3>
                    <div className="space-y-4">
                      <p className="text-slate-600 text-base leading-relaxed">
                        We use children's personal information only for the following purposes:
                      </p>
                      <ul className="list-disc list-inside text-slate-600 text-base space-y-2 ml-4">
                        <li>Providing educational content and learning resources</li>
                        <li>Tracking learning progress and achievements</li>
                        <li>Personalizing the learning experience</li>
                        <li>Communicating about the service (with parental oversight)</li>
                        <li>Ensuring platform safety and security</li>
                        <li>Complying with legal requirements</li>
                      </ul>
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <p className="text-blue-800 text-sm">
                          <strong>Important:</strong> We never use children's information for marketing purposes or 
                          share it with third parties without parental consent.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Parental Rights */}
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <UserCheck className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                      3. Parental Rights and Controls
                    </h3>
                    <div className="space-y-4">
                      <p className="text-slate-600 text-base leading-relaxed">
                        Parents and guardians have the following rights regarding their child's information:
                      </p>
                      <ul className="list-disc list-inside text-slate-600 text-base space-y-2 ml-4">
                        <li><strong>Consent:</strong> Right to give or withdraw consent for information collection</li>
                        <li><strong>Access:</strong> Right to review their child's personal information</li>
                        <li><strong>Deletion:</strong> Right to request deletion of their child's information</li>
                        <li><strong>Modification:</strong> Right to request correction of inaccurate information</li>
                        <li><strong>Disclosure:</strong> Right to know what information we collect and how we use it</li>
                        <li><strong>Refusal:</strong> Right to refuse further collection or use of information</li>
                      </ul>
                      <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                        <p className="text-purple-800 text-sm">
                          <strong>How to Exercise Rights:</strong> Parents can contact us at 
                          <a href="mailto:privacy@physiohelper.com" className="text-purple-600 hover:text-purple-800 underline ml-1">
                            privacy@physiohelper.com
                          </a> to exercise any of these rights.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Information Sharing */}
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Lock className="h-6 w-6 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                      4. Information Sharing and Disclosure
                    </h3>
                    <div className="space-y-4">
                      <p className="text-slate-600 text-base leading-relaxed">
                        We do NOT share, sell, or rent children's personal information to third parties, except in the following limited circumstances:
                      </p>
                      <ul className="list-disc list-inside text-slate-600 text-base space-y-2 ml-4">
                        <li><strong>With Parental Consent:</strong> When we have verifiable parental consent</li>
                        <li><strong>Service Providers:</strong> With trusted third parties who help us operate our platform (under strict confidentiality agreements)</li>
                        <li><strong>Legal Requirements:</strong> When required by law or to protect safety</li>
                        <li><strong>Safety Emergencies:</strong> To protect the safety of a child or others</li>
                      </ul>
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <p className="text-red-800 text-sm font-semibold">
                          🚫 We NEVER share children's information for marketing, advertising, or commercial purposes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Data Security */}
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                      5. Data Security and Protection
                    </h3>
                    <div className="space-y-4">
                      <p className="text-slate-600 text-base leading-relaxed">
                        We implement comprehensive security measures to protect children's information:
                      </p>
                      <ul className="list-disc list-inside text-slate-600 text-base space-y-2 ml-4">
                        <li>Encryption of data in transit and at rest</li>
                        <li>Secure servers with restricted access</li>
                        <li>Regular security audits and updates</li>
                        <li>Staff training on privacy protection</li>
                        <li>Incident response procedures</li>
                        <li>Regular backup and recovery systems</li>
                      </ul>
                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                        <p className="text-yellow-800 text-sm">
                          <strong>Security Commitment:</strong> We take the protection of children's data extremely seriously 
                          and continuously work to maintain the highest security standards.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Age Verification */}
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Baby className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                      6. Age Verification and Parental Consent
                    </h3>
                    <div className="space-y-4">
                      <p className="text-slate-600 text-base leading-relaxed">
                        To comply with COPPA, we implement the following measures:
                      </p>
                      <ul className="list-disc list-inside text-slate-600 text-base space-y-2 ml-4">
                        <li><strong>Age Collection:</strong> We ask for age information during registration</li>
                        <li><strong>Parental Notification:</strong> We notify parents when a child under 13 registers</li>
                        <li><strong>Consent Verification:</strong> We verify parental consent through multiple methods</li>
                        <li><strong>Limited Functionality:</strong> Children under 13 have limited access until consent is verified</li>
                        <li><strong>Ongoing Monitoring:</strong> We monitor accounts to ensure age compliance</li>
                      </ul>
                      <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
                        <p className="text-indigo-800 text-sm">
                          <strong>Verification Methods:</strong> We may use email verification, phone calls, 
                          or other reasonable methods to verify parental consent.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Third-Party Services */}
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Lock className="h-6 w-6 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                      7. Third-Party Services and Links
                    </h3>
                    <div className="space-y-4">
                      <p className="text-slate-600 text-base leading-relaxed">
                        Our platform may contain links to third-party websites or services. We are not responsible for:
                      </p>
                      <ul className="list-disc list-inside text-slate-600 text-base space-y-2 ml-4">
                        <li>Privacy practices of third-party websites</li>
                        <li>Content on external sites</li>
                        <li>Data collection by third parties</li>
                        <li>Security measures of external services</li>
                      </ul>
                      <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                        <p className="text-orange-800 text-sm">
                          <strong>Parental Guidance:</strong> We recommend that parents review the privacy policies 
                          of any third-party services before allowing children to access them.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-lg p-6 sm:p-8 text-white">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                      8. Contact Information
                    </h3>
                    <p className="text-blue-100 text-base leading-relaxed mb-6">
                      For questions about this Children's Privacy Policy or to exercise parental rights, 
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
                            <p className="text-blue-100 text-sm">Mumbai, Maharashtra, India</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                            <Mail className="h-4 w-4 text-white" />
                          </div>
                          <div>
                            <p className="font-semibold text-white">Privacy Email</p>
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
                            <p className="font-semibold text-white">Business Hours</p>
                            <p className="text-blue-100 text-sm">Mon-Fri: 9AM-6PM IST</p>
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
                  Protecting Children's Privacy
                </h3>
                <p className="text-slate-600 text-base leading-relaxed mb-6">
                  We are committed to protecting children's privacy and providing a safe learning environment. 
                  If you have any questions about this policy or need to exercise your parental rights, 
                  please don't hesitate to contact us.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a 
                    href="mailto:privacy@physiohelper.com"
                    className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
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
