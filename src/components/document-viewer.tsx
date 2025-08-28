'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Search, 
  Filter, 
  Download, 
  Eye, 
  FileText, 
  FileImage, 
  FileVideo, 
  File, 
  Calendar,
  User,
  Tag,
  ExternalLink,
  Grid,
  List
} from 'lucide-react';
import { Document, DocumentFilter } from '@/types/documents';

interface DocumentViewerProps {
  documents: Document[];
  onDocumentSelect?: (document: Document) => void;
}

export function DocumentViewer({ documents, onDocumentSelect }: DocumentViewerProps) {
  const [filteredDocuments, setFilteredDocuments] = useState<Document[]>(documents);
  const [selectedDocument, setSelectedDocument] = useState<Document | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filters, setFilters] = useState<DocumentFilter>({});
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    let filtered = documents;

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(doc => 
        doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Apply category filter
    if (filters.category) {
      filtered = filtered.filter(doc => doc.category === filters.category);
    }

    // Apply type filter
    if (filters.type) {
      filtered = filtered.filter(doc => doc.type === filters.type);
    }

    // Apply public filter
    if (filters.isPublic !== undefined) {
      filtered = filtered.filter(doc => doc.isPublic === filters.isPublic);
    }

    setFilteredDocuments(filtered);
  }, [documents, searchTerm, filters]);

  const handleDocumentSelect = (document: Document) => {
    setSelectedDocument(document);
    if (onDocumentSelect) {
      onDocumentSelect(document);
    }
  };

  const getFileIcon = (type: Document['type']) => {
    switch (type) {
      case 'pdf': return <FileText className="h-6 w-6 text-red-500" />;
      case 'image': return <FileImage className="h-6 w-6 text-green-500" />;
      case 'video': return <FileVideo className="h-6 w-6 text-purple-500" />;
      default: return <File className="h-6 w-6 text-blue-500" />;
    }
  };

  const getFileTypeLabel = (type: Document['type']) => {
    switch (type) {
      case 'pdf': return 'PDF';
      case 'docx': return 'Word';
      case 'pptx': return 'PowerPoint';
      case 'xlsx': return 'Excel';
      case 'image': return 'Image';
      case 'video': return 'Video';
      default: return 'File';
    }
  };

  const getCategoryColor = (category: Document['category']) => {
    switch (category) {
      case 'course-material': return 'bg-blue-100 text-blue-800';
      case 'study-guide': return 'bg-green-100 text-green-800';
      case 'case-study': return 'bg-purple-100 text-purple-800';
      case 'assessment': return 'bg-orange-100 text-orange-800';
      case 'reference': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const openDocument = (document: Document) => {
    // For PDFs, use Google Docs Viewer
    if (document.type === 'pdf') {
      window.open(`https://docs.google.com/gview?url=${encodeURIComponent(document.url)}&embedded=true`, '_blank');
    } else {
      // For other files, open in new tab
      window.open(document.url, '_blank');
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Course Materials</h2>
          <p className="text-sm text-gray-500">{filteredDocuments.length} documents</p>
        </div>

        {/* Search and Filters */}
        <div className="p-4 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search documents..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="space-y-3">
            <Select 
              value={filters.category || ''} 
              onValueChange={(value) => setFilters(prev => ({ ...prev, category: value || undefined }))}
            >
              <SelectTrigger>
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Categories</SelectItem>
                <SelectItem value="course-material">Course Material</SelectItem>
                <SelectItem value="study-guide">Study Guide</SelectItem>
                <SelectItem value="case-study">Case Study</SelectItem>
                <SelectItem value="assessment">Assessment</SelectItem>
                <SelectItem value="reference">Reference</SelectItem>
              </SelectContent>
            </Select>

            <Select 
              value={filters.type || ''} 
              onValueChange={(value) => setFilters(prev => ({ ...prev, type: value as Document['type'] || undefined }))}
            >
              <SelectTrigger>
                <SelectValue placeholder="All Types" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Types</SelectItem>
                <SelectItem value="pdf">PDF</SelectItem>
                <SelectItem value="docx">Word</SelectItem>
                <SelectItem value="pptx">PowerPoint</SelectItem>
                <SelectItem value="xlsx">Excel</SelectItem>
                <SelectItem value="image">Image</SelectItem>
                <SelectItem value="video">Video</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('grid')}
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('list')}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Document List */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="space-y-2">
            {filteredDocuments.map((doc) => (
              <div
                key={doc.id}
                className={`p-3 rounded-lg cursor-pointer transition-colors ${
                  selectedDocument?.id === doc.id 
                    ? 'bg-blue-50 border border-blue-200' 
                    : 'hover:bg-gray-50'
                }`}
                onClick={() => handleDocumentSelect(doc)}
              >
                <div className="flex items-start gap-3">
                  {getFileIcon(doc.type)}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm text-gray-900 truncate">
                      {doc.title}
                    </h4>
                    <p className="text-xs text-gray-500 truncate">
                      {formatFileSize(doc.fileSize)} • {formatDate(doc.uploadedAt)}
                    </p>
                    <div className="flex items-center gap-1 mt-1">
                      <Badge variant="outline" className="text-xs">
                        {getFileTypeLabel(doc.type)}
                      </Badge>
                      <Badge className={`text-xs ${getCategoryColor(doc.category)}`}>
                        {doc.category.replace('-', ' ')}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {selectedDocument ? (
          <>
            {/* Document Header */}
            <div className="bg-white border-b border-gray-200 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-xl font-semibold text-gray-900">
                    {selectedDocument.title}
                  </h1>
                  <p className="text-sm text-gray-500 mt-1">
                    {selectedDocument.description}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-2" />
                    {selectedDocument.viewCount} views
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    {selectedDocument.downloadCount} downloads
                  </Button>
                  <Button onClick={() => openDocument(selectedDocument)}>
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Open Document
                  </Button>
                </div>
              </div>
              
              <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>Uploaded by {selectedDocument.uploadedBy}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{formatDate(selectedDocument.uploadedAt)}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Tag className="h-4 w-4" />
                  <span>{selectedDocument.tags.join(', ')}</span>
                </div>
              </div>
            </div>

            {/* Document Viewer */}
            <div className="flex-1 p-4">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {getFileIcon(selectedDocument.type)}
                    {selectedDocument.title}
                  </CardTitle>
                  <CardDescription>
                    {selectedDocument.description || 'No description available'}
                  </CardDescription>
                </CardHeader>
                <CardContent className="h-full">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg h-96 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        {getFileIcon(selectedDocument.type)}
                      </div>
                      <h3 className="text-lg font-medium text-gray-900 mb-2">
                        Document Preview
                      </h3>
                      <p className="text-gray-500 mb-4">
                        Click "Open Document" to view this {selectedDocument.type.toUpperCase()} file
                      </p>
                      <Button onClick={() => openDocument(selectedDocument)}>
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Open {getFileTypeLabel(selectedDocument.type)} Document
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No Document Selected
              </h3>
              <p className="text-gray-500">
                Choose a document from the sidebar to view its details
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
