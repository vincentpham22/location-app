import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
  const { data: hotels, error } = await supabase
    .from('hotels')
    .select('*');

  if (error) {
    console.error('Erreur Supabase:', error);
    return NextResponse.json({ error: 'Erreur lors de la récupération des hôtels' }, { status: 500 });
  }

  return NextResponse.json(hotels);
}

