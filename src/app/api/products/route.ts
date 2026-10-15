import { NextResponse } from 'next/server';
import { products } from '@/lib/products';

export async function GET() {
  // In production, this would query the database
  // For now, return the in-memory product data
  return NextResponse.json(products.filter(p => p.category === 'consumer'));
}
