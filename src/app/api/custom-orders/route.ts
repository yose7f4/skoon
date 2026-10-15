import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      companyName,
      contactName,
      contactEmail,
      contactPhone,
      beanBagStyle,
      preferredColor,
      quantity,
      notes,
    } = body;

    // Validate required fields
    if (!companyName || !contactName || !contactEmail || !quantity) {
      return NextResponse.json(
        { error: 'Missing required fields: companyName, contactName, contactEmail, quantity' },
        { status: 400 }
      );
    }

    const db = getDb();

    const stmt = db.prepare(`
      INSERT INTO custom_orders (
        company_name, contact_name, contact_email, contact_phone,
        bean_bag_style, preferred_color, quantity, notes, created_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, datetime('now'))
    `);

    const result = stmt.run(
      companyName,
      contactName,
      contactEmail,
      contactPhone || null,
      beanBagStyle || 'teardrop',
      preferredColor || null,
      quantity,
      notes || null,
    );

    return NextResponse.json({
      success: true,
      orderId: result.lastInsertRowid,
      message: 'Custom order request received. We will contact you within 1-2 business days.',
    }, { status: 201 });
  } catch (error) {
    console.error('Custom order error:', error);
    return NextResponse.json(
      { error: 'Failed to submit order. Please try again.' },
      { status: 500 }
    );
  }
}
