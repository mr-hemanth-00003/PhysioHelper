export interface Document {
  id: string;
  title: string;
  description?: string;
  type: 'pdf' | 'docx' | 'pptx' | 'xlsx' | 'image' | 'video' | 'other';
  url: string;
  fileName: string;
  fileSize: number;
  uploadedBy: string;
  uploadedAt: Date;
  category: 'course-material' | 'study-guide' | 'case-study' | 'assessment' | 'reference';
  tags: string[];
  isPublic: boolean;
  downloadCount: number;
  viewCount: number;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  documents: string[]; // Document IDs
  createdAt: Date;
  updatedAt: Date;
  isActive: boolean;
  enrollmentCount: number;
}

export interface UploadProgress {
  fileName: string;
  progress: number;
  status: 'uploading' | 'success' | 'error';
  error?: string;
}

export interface DocumentFilter {
  category?: string;
  type?: string;
  tags?: string[];
  search?: string;
  isPublic?: boolean;
}
