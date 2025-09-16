'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { AlertTriangle, Shield, FileText, Clock, Mail, Phone, MapPin, Stethoscope, Heart, Brain, AlertCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function MedicalDisclaimersPage() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <>
      <Header />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50 pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-red-900 via-red-800 to-red-900 text-white">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 responsive-container py-12 sm:py-16 md:py-20 lg:py-24">
            <div className="text-center space-y-4 sm:space-y-6">
              <div className="flex justify-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/10 rounded-full flex items-center justify-center">
                  <AlertTriangle className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                </div>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Medical Disclaimers
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl text-red-100 max-w-3xl mx-auto">
                Important medical and educational disclaimers for healthcare professionals and students
              </p>
              
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                  Last updated: {currentDate}
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  <Shield className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                  Medical Disclaimer
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Critical Warning Section */}
        <section className="responsive-container py-8 sm:py-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 sm:p-8 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="h-6 w-6 text-red-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl sm:text-2xl font-bold text-red-900 mb-3">
                    ⚠️ CRITICAL MEDICAL DISCLAIMER
                  </h2>
                  <p className="text-red-800 text-base sm:text-lg leading-relaxed mb-4">
                    <strong>IMPORTANT:</strong> The information provided on PhysioHelper is for educational purposes only 
                    and is NOT intended to replace professional medical advice, diagnosis, or treatment. 
                    Always seek the advice of qualified healthcare providers with any questions you may have 
                    regarding a medical condition or treatment.
                  </p>
                  <div className="bg-red-100 border border-red-300 rounded-lg p-4">
                    <p className="text-red-900 text-sm font-semibold">
                      🚨 NEVER use this platform as a substitute for professional medical consultation, 
                      diagnosis, or treatment. Always consult with licensed healthcare professionals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimers Content */}
        <section className="responsive-container py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 sm:space-y-8">
              {/* Educational Purpose Only */}
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Stethoscope className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                      1. Educational Purpose Only
                    </h3>
                    <div className="space-y-4">
                      <p className="text-slate-600 text-base leading-relaxed">
                        All content on PhysioHelper, including but not limited to case studies, clinical protocols, 
                        assessment techniques, and rehabilitation guidelines, is provided solely for educational purposes.
                      </p>
                      <p className="text-slate-600 text-base leading-relaxed">
                        This content is designed to supplement formal physiotherapy education and professional 
                        development, not to replace clinical judgment or professional medical practice.
                      </p>
                      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                        <p className="text-blue-800 text-sm">
                          <strong>Note:</strong> Students and healthcare professionals should always verify information 
                          with current medical literature and consult with experienced practitioners.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Not Medical Advice */}
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="h-6 w-6 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                      2. Not Medical Advice
                    </h3>
                    <div className="space-y-4">
                      <p className="text-slate-600 text-base leading-relaxed">
                        Nothing on this platform constitutes medical advice, diagnosis, or treatment recommendations. 
                        The information provided should not be used to:
                      </p>
                      <ul className="list-disc list-inside text-slate-600 text-base space-y-2 ml-4">
                        <li>Diagnose or treat any medical condition</li>
                        <li>Replace professional medical consultation</li>
                        <li>Make clinical decisions for patient care</li>
                        <li>Determine treatment protocols without proper assessment</li>
                        <li>Self-diagnose or self-treat any condition</li>
                      </ul>
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <p className="text-red-800 text-sm font-semibold">
                          ⚠️ Always consult with qualified healthcare professionals before making any medical decisions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Professional Responsibility */}
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                      3. Professional Responsibility
                    </h3>
                    <div className="space-y-4">
                      <p className="text-slate-600 text-base leading-relaxed">
                        Healthcare professionals using this platform are responsible for:
                      </p>
                      <ul className="list-disc list-inside text-slate-600 text-base space-y-2 ml-4">
                        <li>Maintaining their professional competence and continuing education</li>
                        <li>Following their professional regulatory body's guidelines</li>
                        <li>Ensuring patient safety in all clinical decisions</li>
                        <li>Obtaining proper informed consent from patients</li>
                        <li>Maintaining patient confidentiality and privacy</li>
                        <li>Staying updated with current evidence-based practice</li>
                      </ul>
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <p className="text-green-800 text-sm">
                          <strong>Remember:</strong> Professional liability and responsibility remain with the individual 
                          practitioner, not with PhysioHelper or its content providers.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Limitation of Liability */}
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <FileText className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                      4. Limitation of Liability
                    </h3>
                    <div className="space-y-4">
                      <p className="text-slate-600 text-base leading-relaxed">
                        PhysioHelper and its content providers shall not be liable for any direct, indirect, 
                        incidental, special, or consequential damages arising from:
                      </p>
                      <ul className="list-disc list-inside text-slate-600 text-base space-y-2 ml-4">
                        <li>Use or misuse of information from this platform</li>
                        <li>Clinical decisions made based on platform content</li>
                        <li>Patient outcomes resulting from information use</li>
                        <li>Professional liability or malpractice claims</li>
                        <li>Any errors or omissions in the content</li>
                      </ul>
                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                        <p className="text-yellow-800 text-sm">
                          <strong>Disclaimer:</strong> Users assume full responsibility for their professional 
                          practice and any consequences thereof.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Accuracy */}
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Brain className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                      5. Content Accuracy and Currency
                    </h3>
                    <div className="space-y-4">
                      <p className="text-slate-600 text-base leading-relaxed">
                        While we strive to provide accurate and up-to-date information, we cannot guarantee:
                      </p>
                      <ul className="list-disc list-inside text-slate-600 text-base space-y-2 ml-4">
                        <li>Complete accuracy of all content</li>
                        <li>Currency of medical information</li>
                        <li>Applicability to specific clinical situations</li>
                        <li>Compliance with all regional regulations</li>
                        <li>Absence of errors or omissions</li>
                      </ul>
                      <p className="text-slate-600 text-base leading-relaxed">
                        Users are responsible for verifying information with current medical literature and 
                        professional guidelines before application in clinical practice.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Situations */}
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="h-6 w-6 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                      6. Emergency Situations
                    </h3>
                    <div className="space-y-4">
                      <p className="text-slate-600 text-base leading-relaxed">
                        This platform is NOT intended for emergency medical situations. In case of medical emergencies:
                      </p>
                      <div className="bg-red-100 border-2 border-red-300 rounded-lg p-4">
                        <p className="text-red-900 text-base font-bold text-center">
                          🚨 CALL EMERGENCY SERVICES IMMEDIATELY 🚨
                        </p>
                        <p className="text-red-800 text-sm text-center mt-2">
                          India: 108 | USA: 911 | UK: 999 | Australia: 000
                        </p>
                      </div>
                      <p className="text-slate-600 text-base leading-relaxed">
                        Do not rely on this platform for emergency medical guidance. Always seek immediate 
                        professional medical attention for urgent health concerns.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Regulatory Compliance */}
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                      7. Regulatory Compliance
                    </h3>
                    <div className="space-y-4">
                      <p className="text-slate-600 text-base leading-relaxed">
                        Users are responsible for ensuring compliance with:
                      </p>
                      <ul className="list-disc list-inside text-slate-600 text-base space-y-2 ml-4">
                        <li>Local and national healthcare regulations</li>
                        <li>Professional licensing requirements</li>
                        <li>Scope of practice limitations</li>
                        <li>Continuing education requirements</li>
                        <li>Ethical guidelines and standards</li>
                        <li>Patient privacy and confidentiality laws</li>
                      </ul>
                      <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
                        <p className="text-indigo-800 text-sm">
                          <strong>Important:</strong> This platform does not provide legal or regulatory advice. 
                          Consult with appropriate regulatory bodies for compliance requirements.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl shadow-lg p-6 sm:p-8 text-white">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                      8. Contact Information
                    </h3>
                    <p className="text-red-100 text-base leading-relaxed mb-6">
                      For questions about these medical disclaimers or to report concerns about content accuracy, 
                      please contact us:
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                            <MapPin className="h-4 w-4 text-white" />
                          </div>
                          <div>
                            <p className="font-semibold text-white">Address</p>
                            <p className="text-red-100 text-sm">Mumbai, Maharashtra, India</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                            <Mail className="h-4 w-4 text-white" />
                          </div>
                          <div>
                            <p className="font-semibold text-white">Email</p>
                            <p className="text-red-100 text-sm">students@physiohelper.com</p>
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
                            <p className="text-red-100 text-sm">+91 9398157255</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                            <Clock className="h-4 w-4 text-white" />
                          </div>
                          <div>
                            <p className="font-semibold text-white">Business Hours</p>
                            <p className="text-red-100 text-sm">Mon-Fri: 9AM-6PM IST</p>
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
                  Questions About Medical Disclaimers?
                </h3>
                <p className="text-slate-600 text-base leading-relaxed mb-6">
                  If you have any questions about these medical disclaimers or need clarification on any section, 
                  please don't hesitate to reach out to our support team. Your safety and professional practice 
                  are our top priorities.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a 
                    href="mailto:students@physiohelper.com"
                    className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                  >
                    <Mail className="h-4 w-4" />
                    Contact Support
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
