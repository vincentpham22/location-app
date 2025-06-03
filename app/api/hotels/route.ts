import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/client';

export async function GET() {
  const { data: hotels, error } = await createClient()
    .from('hotels')
    .select('*');

  if (error) {
    console.error('Erreur Supabase:', error);
    return NextResponse.json({ error: 'Erreur lors de la récupération des hôtels' }, { status: 500 });
  }

  return NextResponse.json(hotels);
}

