'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { FileText, Shield, Scale, Clock, Mail, Phone, MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function TermsPage() {
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
                  <FileText className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                </div>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Terms & Conditions
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                Please read these terms carefully before using our services
              </p>
              
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                  Last updated: {currentDate}
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  <Shield className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                  Legal Protection
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="responsive-container py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 mb-8">
              <div className="prose prose-slate max-w-none">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                  Welcome to PhysioHelper
                </h2>
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6">
                  Welcome to PhysioHelper ("Company", "we", "our", "us"). By accessing or using our website 
                  <span className="font-semibold text-blue-600"> physiohelper.com </span> 
                  and purchasing our products/services, you agree to be bound by these Terms & Conditions. 
                  If you do not agree, please discontinue use of our services.
                </p>
                
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                  <p className="text-blue-800 text-sm sm:text-base">
                    <strong>Important:</strong> These terms constitute a legally binding agreement between you and PhysioHelper. 
                    Please read them carefully and contact us if you have any questions.
                  </p>
                </div>
              </div>
            </div>

            {/* Terms Sections */}
            <div className="space-y-6 sm:space-y-8">
              {/* Eligibility */}
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                      1. Eligibility
                    </h3>
                    <p className="text-slate-600 text-base leading-relaxed">
                      You must be at least 18 years old to use our services. By using our website, you represent 
                      that you have the legal right to enter into this agreement. If you are under 18, you may 
                      only use our services with the involvement and consent of a parent or guardian.
                    </p>
                  </div>
                </div>
              </div>

              {/* Products & Services */}
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Scale className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                      2. Products & Services
                    </h3>
                    <p className="text-slate-600 text-base leading-relaxed mb-4">
                      We provide comprehensive physiotherapy learning resources, clinical case studies, 
                      digital libraries, and educational content for healthcare professionals and students. 
                      Our services include:
                    </p>
                    <ul className="list-disc list-inside text-slate-600 text-base space-y-2 ml-4">
                      <li>Clinical skills training modules</li>
                      <li>Case study analysis and discussions</li>
                      <li>Rehabilitation protocols and guidelines</li>
                      <li>Digital library access</li>
                      <li>Professional development resources</li>
                    </ul>
                    <p className="text-slate-600 text-base leading-relaxed mt-4">
                      We reserve the right to modify, suspend, or discontinue any product or service at any time 
                      with reasonable notice to our users.
                    </p>
                  </div>
                </div>
              </div>

              {/* Pricing & Payments */}
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Scale className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                      3. Pricing & Payments
                    </h3>
                    <div className="space-y-4">
                      <p className="text-slate-600 text-base leading-relaxed">
                        All prices are listed in INR and are inclusive of GST, as applicable. 
                        Prices are subject to change without prior notice.
                      </p>
                      <p className="text-slate-600 text-base leading-relaxed">
                        Payments are processed securely via Razorpay, our authorized payment gateway partner. 
                        We do not store your payment information on our servers.
                      </p>
                      <p className="text-slate-600 text-base leading-relaxed">
                        By providing your payment details, you authorize us to charge you for your purchases. 
                        All transactions are secured with industry-standard encryption.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Refund & Cancellation */}
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                      4. Refund & Cancellation Policy
                    </h3>
                    <div className="space-y-4">
                      <p className="text-slate-600 text-base leading-relaxed">
                        Customers may request a refund/cancellation within 7 days of purchase, provided the 
                        product is unused and in original condition.
                      </p>
                      <p className="text-slate-600 text-base leading-relaxed">
                        Approved refunds will be processed back to the original payment method within 5–7 business days.
                      </p>
                      <p className="text-slate-600 text-base leading-relaxed">
                        <strong>Non-refundable items:</strong> Digital products, custom orders, and services that have 
                        been consumed or accessed.
                      </p>
                      <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                        <p className="text-orange-800 text-sm">
                          <strong>Note:</strong> Subscription cancellations take effect at the end of the current billing period. 
                          No refunds are provided for partial months.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Prohibited Uses */}
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                      5. Prohibited Uses
                    </h3>
                    <p className="text-slate-600 text-base leading-relaxed mb-4">
                      You agree not to misuse our services, including but not limited to:
                    </p>
                    <ul className="list-disc list-inside text-slate-600 text-base space-y-2 ml-4">
                      <li>Engaging in unlawful activities or violating applicable laws</li>
                      <li>Reselling or redistributing our content without permission</li>
                      <li>Attempting to disrupt our website's functionality or security</li>
                      <li>Sharing account credentials with unauthorized users</li>
                      <li>Using our services for commercial purposes without proper licensing</li>
                      <li>Uploading malicious content or attempting to hack our systems</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Medical Disclaimers */}
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Scale className="h-6 w-6 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                      6. Medical Disclaimers
                    </h3>
                    <div className="space-y-4">
                      <p className="text-slate-600 text-base leading-relaxed">
                        <strong>IMPORTANT MEDICAL DISCLAIMER:</strong> All content on PhysioHelper is for educational 
                        purposes only and is NOT intended to replace professional medical advice, diagnosis, or treatment.
                      </p>
                      <p className="text-slate-600 text-base leading-relaxed">
                        Users must understand that:
                      </p>
                      <ul className="list-disc list-inside text-slate-600 text-base space-y-2 ml-4">
                        <li>This platform does not provide medical advice or clinical guidance</li>
                        <li>All clinical decisions must be made by qualified healthcare professionals</li>
                        <li>Users are responsible for their professional practice and patient safety</li>
                        <li>Emergency situations require immediate professional medical attention</li>
                      </ul>
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <p className="text-red-800 text-sm font-semibold">
                          🚨 NEVER use this platform as a substitute for professional medical consultation, 
                          diagnosis, or treatment. Always consult with licensed healthcare professionals.
                        </p>
                      </div>
                      <p className="text-slate-600 text-base leading-relaxed">
                        For complete medical disclaimers, please review our 
                        <a href="/medical-disclaimers" className="text-blue-600 hover:text-blue-800 underline font-semibold">
                          Medical Disclaimers page
                        </a>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Limitation of Liability */}
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Scale className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                      7. Limitation of Liability
                    </h3>
                    <div className="space-y-4">
                      <p className="text-slate-600 text-base leading-relaxed">
                        We are not responsible for any indirect, incidental, or consequential damages arising 
                        out of your use of our website, products, or services.
                      </p>
                      <p className="text-slate-600 text-base leading-relaxed">
                        Our total liability to you for any claims arising from these terms or your use of our 
                        services shall not exceed the amount you paid to us in the 12 months preceding the claim.
                      </p>
                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                        <p className="text-yellow-800 text-sm">
                          <strong>Disclaimer:</strong> Our educational content is for informational purposes only and 
                          should not replace professional medical advice, diagnosis, or treatment.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Governing Law */}
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Scale className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                      8. Governing Law
                    </h3>
                    <p className="text-slate-600 text-base leading-relaxed">
                      These Terms shall be governed by and construed in accordance with the laws of India. 
                      Any disputes will be subject to the exclusive jurisdiction of the courts of Mumbai, Maharashtra, India.
                    </p>
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
                      9. Contact Information
                    </h3>
                    <p className="text-blue-100 text-base leading-relaxed mb-6">
                      For any questions, concerns, or complaints regarding these Terms & Conditions, 
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
                            <p className="text-blue-100 text-sm">Mumbai, Maharashtra, India</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                            <Mail className="h-4 w-4 text-white" />
                          </div>
                          <div>
                            <p className="font-semibold text-white">Email</p>
                            <p className="text-blue-100 text-sm">students@physiohelper.com</p>
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
                  Questions About These Terms?
                </h3>
                <p className="text-slate-600 text-base leading-relaxed mb-6">
                  We're here to help! If you have any questions about these Terms & Conditions or need 
                  clarification on any section, please don't hesitate to reach out to our support team.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a 
                    href="mailto:students@physiohelper.com"
                    className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
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
