'use client';

import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  Upload, 
  FileText, 
  FileImage, 
  FileVideo, 
  File, 
  X, 
  CheckCircle, 
  AlertCircle,
  CloudUpload,
  Tag
} from 'lucide-react';
import { useUser } from '@/contexts/user-context';
import { Document, UploadProgress } from '@/types/documents';

interface DocumentUploadProps {
  onUploadComplete?: (document: Document) => void;
}

export function DocumentUpload({ onUploadComplete }: DocumentUploadProps) {
  const { user } = useUser();
  const [uploadProgress, setUploadProgress] = useState<UploadProgress[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [documentData, setDocumentData] = useState({
    title: '',
    description: '',
    category: 'course-material' as Document['category'],
    tags: [] as string[],
    isPublic: false
  });

  const [tagInput, setTagInput] = useState('');

  const getFileIcon = (type: string) => {
    if (type.includes('pdf')) return <FileText className="h-6 w-6 text-red-500" />;
    if (type.includes('image')) return <FileImage className="h-6 w-6 text-green-500" />;
    if (type.includes('video')) return <FileVideo className="h-6 w-6 text-purple-500" />;
    return <File className="h-6 w-6 text-blue-500" />;
  };

  const getFileType = (type: string): Document['type'] => {
    if (type.includes('pdf')) return 'pdf';
    if (type.includes('docx') || type.includes('doc')) return 'docx';
    if (type.includes('pptx') || type.includes('ppt')) return 'pptx';
    if (type.includes('xlsx') || type.includes('xls')) return 'xlsx';
    if (type.includes('image')) return 'image';
    if (type.includes('video')) return 'video';
    return 'other';
  };

  const addTag = (tag: string) => {
    if (tag.trim() && !documentData.tags.includes(tag.trim())) {
      setDocumentData(prev => ({
        ...prev,
        tags: [...prev.tags, tag.trim()]
      }));
      setTagInput('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setDocumentData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    if (!user) {
      setError('You must be logged in to upload documents');
      return;
    }

    setIsUploading(true);
    setError(null);

    const newUploads: UploadProgress[] = acceptedFiles.map(file => ({
      fileName: file.name,
      progress: 0,
      status: 'uploading'
    }));

    setUploadProgress(newUploads);

    try {
      // Simulate file upload to Firebase Storage
      for (let i = 0; i < acceptedFiles.length; i++) {
        const file = acceptedFiles[i];
        
        // Simulate upload progress
        for (let progress = 0; progress <= 100; progress += 10) {
          setUploadProgress(prev => 
            prev.map((upload, index) => 
              index === i ? { ...upload, progress } : upload
            )
          );
          await new Promise(resolve => setTimeout(resolve, 100));
        }

        // Simulate successful upload
        setUploadProgress(prev => 
          prev.map((upload, index) => 
            index === i ? { ...upload, status: 'success' } : upload
          )
        );

        // Create document object
        const document: Omit<Document, 'id' | 'url'> = {
          title: documentData.title || file.name,
          description: documentData.description,
          type: getFileType(file.type),
          fileName: file.name,
          fileSize: file.size,
          uploadedBy: user.id,
          uploadedAt: new Date(),
          category: documentData.category,
          tags: documentData.tags,
          isPublic: documentData.isPublic,
          downloadCount: 0,
          viewCount: 0
        };

        // Simulate saving to Firestore
        await new Promise(resolve => setTimeout(resolve, 500));

        // Call completion callback
        if (onUploadComplete) {
          onUploadComplete({
            ...document,
            id: Date.now().toString(),
            url: `https://example.com/${file.name}` // In real app, this would be Firebase Storage URL
          });
        }
      }

      // Reset form
      setDocumentData({
        title: '',
        description: '',
        category: 'course-material',
        tags: [],
        isPublic: false
      });

    } catch (err) {
      setError('Upload failed. Please try again.');
      setUploadProgress(prev => 
        prev.map(upload => ({ ...upload, status: 'error', error: 'Upload failed' }))
      );
    } finally {
      setIsUploading(false);
    }
  }, [user, documentData, onUploadComplete]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
      'application/vnd.openxmlformats-officedocument.presentationml.presentation': ['.pptx'],
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
      'image/*': ['.jpg', '.jpeg', '.png', '.gif'],
      'video/*': ['.mp4', '.avi', '.mov']
    },
    multiple: true
  });

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CloudUpload className="h-6 w-6 text-blue-600" />
          Upload Course Materials
        </CardTitle>
        <CardDescription>
          Upload PDFs, documents, presentations, and other course materials
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Document Metadata Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="title">Document Title</Label>
            <Input
              id="title"
              placeholder="Enter document title"
              value={documentData.title}
              onChange={(e) => setDocumentData(prev => ({ ...prev, title: e.target.value }))}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Select 
              value={documentData.category} 
              onValueChange={(value: Document['category']) => 
                setDocumentData(prev => ({ ...prev, category: value }))
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="course-material">Course Material</SelectItem>
                <SelectItem value="study-guide">Study Guide</SelectItem>
                <SelectItem value="case-study">Case Study</SelectItem>
                <SelectItem value="assessment">Assessment</SelectItem>
                <SelectItem value="reference">Reference</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            placeholder="Enter document description"
            value={documentData.description}
            onChange={(e) => setDocumentData(prev => ({ ...prev, description: e.target.value }))}
            rows={3}
          />
        </div>

        <div className="space-y-2">
          <Label>Tags</Label>
          <div className="flex gap-2">
            <Input
              placeholder="Add a tag"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addTag(tagInput)}
            />
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => addTag(tagInput)}
              disabled={!tagInput.trim()}
            >
              <Tag className="h-4 w-4" />
            </Button>
          </div>
          {documentData.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {documentData.tags.map(tag => (
                <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                  {tag}
                  <button
                    onClick={() => removeTag(tag)}
                    className="ml-1 hover:text-red-600"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="isPublic"
            checked={documentData.isPublic}
            onChange={(e) => setDocumentData(prev => ({ ...prev, isPublic: e.target.checked }))}
            className="rounded"
          />
          <Label htmlFor="isPublic">Make this document public</Label>
        </div>

        {/* File Upload Area */}
        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
            isDragActive 
              ? 'border-blue-500 bg-blue-50' 
              : 'border-gray-300 hover:border-gray-400'
          }`}
        >
          <input {...getInputProps()} />
          <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          {isDragActive ? (
            <p className="text-blue-600 font-medium">Drop the files here...</p>
          ) : (
            <div>
              <p className="text-gray-600 mb-2">
                Drag & drop files here, or click to select files
              </p>
              <p className="text-sm text-gray-500">
                Supports PDF, DOCX, PPTX, XLSX, images, and videos
              </p>
            </div>
          )}
        </div>

        {/* Upload Progress */}
        {uploadProgress.length > 0 && (
          <div className="space-y-3">
            <h4 className="font-medium">Upload Progress</h4>
            {uploadProgress.map((upload, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{upload.fileName}</span>
                  <div className="flex items-center gap-2">
                    {upload.status === 'uploading' && (
                      <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
                    )}
                    {upload.status === 'success' && (
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    )}
                    {upload.status === 'error' && (
                      <AlertCircle className="h-4 w-4 text-red-600" />
                    )}
                  </div>
                </div>
                <Progress value={upload.progress} className="h-2" />
                {upload.status === 'error' && upload.error && (
                  <p className="text-sm text-red-600">{upload.error}</p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Error Display */}
        {error && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {/* Upload Button */}
        <Button 
          className="w-full" 
          disabled={isUploading || uploadProgress.length === 0}
          onClick={() => onDrop([])} // Trigger upload for demo
        >
          {isUploading ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Uploading...
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Upload className="h-4 w-4" />
              Upload Documents
            </div>
          )}
        </Button>
      </CardContent>
    </Card>
  );
}
