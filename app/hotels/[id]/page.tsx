import VillaInfos from '@/app/components/VillaInfos';
import { supabase } from '@/lib/supabase';
import Reservation from '@/app/components/Reservation';
import GalerieHotel from '@/app/components/GalerieHotel';

interface Params {
  params: { id: string };
}

export default async function HotelDetail({ params }: Params) {
  const { id } = params;

  const { data: hotel, error } = await supabase
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
    <div className="space-y-12">
      <GalerieHotel images={hotel.images ?? []} />
      <VillaInfos 
        surface={hotel.surface}
        bedrooms={hotel.bedrooms}
        bathrooms={hotel.bathrooms}
        hasPool={hotel.hasPool}
        hasKitchen={hotel.hasKitchen}
      />
      <Reservation />
    </div>
  );
}
