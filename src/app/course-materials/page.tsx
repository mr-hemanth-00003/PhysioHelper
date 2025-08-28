'use client';

import { useState } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Upload, 
  FileText, 
  BookOpen, 
  Users, 
  Calendar,
  Plus,
  Search,
  Filter
} from 'lucide-react';
import { DocumentUpload } from '@/components/document-upload';
import { DocumentViewer } from '@/components/document-viewer';
import { Document } from '@/types/documents';
import { useUser } from '@/contexts/user-context';

// Mock data for demonstration
const mockDocuments: Document[] = [
  {
    id: '1',
    title: 'Introduction to Physiotherapy',
    description: 'Comprehensive overview of physiotherapy principles and practices',
    type: 'pdf',
    url: 'https://example.com/intro-physio.pdf',
    fileName: 'intro-physio.pdf',
    fileSize: 2048576, // 2MB
    uploadedBy: 'Dr. Smith',
    uploadedAt: new Date('2024-01-15'),
    category: 'course-material',
    tags: ['introduction', 'basics', 'principles'],
    isPublic: true,
    downloadCount: 45,
    viewCount: 120
  },
  {
    id: '2',
    title: 'Anatomy and Physiology Notes',
    description: 'Detailed notes covering human anatomy and physiological systems',
    type: 'docx',
    url: 'https://example.com/anatomy-notes.docx',
    fileName: 'anatomy-notes.docx',
    fileSize: 1048576, // 1MB
    uploadedBy: 'Prof. Johnson',
    uploadedAt: new Date('2024-01-20'),
    category: 'study-guide',
    tags: ['anatomy', 'physiology', 'human body'],
    isPublic: true,
    downloadCount: 32,
    viewCount: 89
  },
  {
    id: '3',
    title: 'Case Study: Sports Injury Rehabilitation',
    description: 'Real-world case study of a professional athlete\'s rehabilitation journey',
    type: 'pptx',
    url: 'https://example.com/sports-rehab.pptx',
    fileName: 'sports-rehab.pptx',
    fileSize: 5242880, // 5MB
    uploadedBy: 'Dr. Williams',
    uploadedAt: new Date('2024-01-25'),
    category: 'case-study',
    tags: ['sports', 'rehabilitation', 'injury'],
    isPublic: false,
    downloadCount: 18,
    viewCount: 45
  },
  {
    id: '4',
    title: 'Assessment Guidelines',
    description: 'Standardized assessment procedures and evaluation criteria',
    type: 'pdf',
    url: 'https://example.com/assessment-guidelines.pdf',
    fileName: 'assessment-guidelines.pdf',
    fileSize: 1572864, // 1.5MB
    uploadedBy: 'Dr. Brown',
    uploadedAt: new Date('2024-01-30'),
    category: 'assessment',
    tags: ['assessment', 'evaluation', 'guidelines'],
    isPublic: true,
    downloadCount: 28,
    viewCount: 76
  }
];

export default function CourseMaterialsPage() {
  const { user } = useUser();
  const [documents, setDocuments] = useState<Document[]>(mockDocuments);
  const [activeTab, setActiveTab] = useState('view');

  const handleUploadComplete = (newDocument: Document) => {
    setDocuments(prev => [newDocument, ...prev]);
    setActiveTab('view');
  };

  const handleDocumentSelect = (document: Document) => {
    // Increment view count when document is selected
    setDocuments(prev => 
      prev.map(doc => 
        doc.id === document.id 
          ? { ...doc, viewCount: doc.viewCount + 1 }
          : doc
      )
    );
  };

  const stats = {
    totalDocuments: documents.length,
    totalSize: documents.reduce((sum, doc) => sum + doc.fileSize, 0),
    totalViews: documents.reduce((sum, doc) => sum + doc.viewCount, 0),
    totalDownloads: documents.reduce((sum, doc) => sum + doc.downloadCount, 0)
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <>
      <Header />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white">
          <div className="responsive-container py-8 sm:py-12">
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Course Materials
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Access comprehensive study materials, case studies, and reference documents for your physiotherapy education
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="responsive-container py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-blue-600 font-medium">Total Documents</p>
                    <p className="text-2xl font-bold text-blue-900">{stats.totalDocuments}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-green-600 font-medium">Total Size</p>
                    <p className="text-2xl font-bold text-green-900">{formatFileSize(stats.totalSize)}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-purple-600 font-medium">Total Views</p>
                    <p className="text-2xl font-bold text-purple-900">{stats.totalViews}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-orange-600 font-medium">Total Downloads</p>
                    <p className="text-2xl font-bold text-orange-900">{stats.totalDownloads}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
              <TabsTrigger value="view" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                View Materials
              </TabsTrigger>
              <TabsTrigger value="upload" className="flex items-center gap-2">
                <Upload className="h-4 w-4" />
                Upload Materials
              </TabsTrigger>
            </TabsList>

            <TabsContent value="view" className="mt-0">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <DocumentViewer 
                  documents={documents} 
                  onDocumentSelect={handleDocumentSelect}
                />
              </div>
            </TabsContent>

            <TabsContent value="upload" className="mt-0">
              {user ? (
                <DocumentUpload onUploadComplete={handleUploadComplete} />
              ) : (
                <Card className="w-full max-w-4xl mx-auto">
                  <CardContent className="p-12 text-center">
                    <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Users className="h-10 w-10 text-gray-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Login Required
                    </h3>
                    <p className="text-gray-600 mb-6">
                      You must be logged in to upload course materials
                    </p>
                    <Button asChild>
                      <a href="/login">Sign In to Upload</a>
                    </Button>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          </Tabs>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
