import { NextRequest, NextResponse } from 'next/server';
import { clearDatabase } from '@/lib/hybrid-seeder';

export async function POST(request: NextRequest) {
  try {
    await clearDatabase();
    return NextResponse.json({ message: 'Database cleared successfully' });
  } catch (error) {
    console.error('Error clearing database:', error);
    return NextResponse.json(
      { error: 'Failed to clear database' },
      { status: 500 }
    );
  }
}
