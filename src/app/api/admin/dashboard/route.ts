import { NextRequest, NextResponse } from 'next/server';
import HybridDatabaseService from '@/lib/hybrid-database';

export async function GET(request: NextRequest) {
  try {
    const stats = await HybridDatabaseService.getDashboardStats();
    return NextResponse.json(stats);
  } catch (error) {
    console.error('Error fetching dashboard stats:', error);
    return NextResponse.json(
      { error: 'Failed to fetch dashboard statistics' },
      { status: 500 }
    );
  }
}
