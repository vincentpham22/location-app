import { createClient } from '@/lib/supabase/client';
import VillaInfos from '@/app/components/VillaInfos';
import Reservation from '@/app/components/Reservation';
import GalerieHotel from '@/app/components/GalerieHotel';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function HotelDetail({ params }: PageProps) {
  const { id } = await params;

  const { data: hotel, error } = await createClient()
    .from('hotels')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    return <p className="text-red-500">Erreur lors du chargement de l'hôtel</p>;
  }

  if (!hotel) {
    return <p>Aucun hôtel trouvé.</p>;
  }

  return (
    <>
      <div className='mt-6'>
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold text-gray-800">{hotel.name}</h1>
          <p className="text-gray-500 text-lg">{hotel.location}</p>
          <p className="text-gray-700 mt-2">{hotel.description}</p>
          <p className="text-yellow-600 font-bold mt-2">
            {hotel.price_per_night} € / nuit </p>
        </div>
      </div>
      <GalerieHotel images={hotel.images ?? []} />
      <VillaInfos
        surface={hotel.surface}
        bedrooms={hotel.bedrooms}
        bathrooms={hotel.bathrooms}
        has_pool={hotel.has_pool}
        has_kitchen={hotel.has_kitchen}
      />
      <Reservation pricePerNight={hotel.price_per_night} hotelId={hotel.id} />
    </>
  );
}
