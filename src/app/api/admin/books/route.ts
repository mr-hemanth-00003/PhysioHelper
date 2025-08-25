import { NextRequest, NextResponse } from 'next/server';
import HybridDatabaseService from '@/lib/hybrid-database';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '100');
    const year = searchParams.get('year') || 'all';
    
    const books = await HybridDatabaseService.getBooksByYear(year);
    return NextResponse.json(books.slice(0, limit));
  } catch (error) {
    console.error('Error fetching books:', error);
    return NextResponse.json(
      { error: 'Failed to fetch books' },
      { status: 500 }
    );
  }
}
