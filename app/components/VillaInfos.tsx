"use client";
import { FC } from 'react';
import { CookingPot, Waves, Bath, Bed, Square } from 'lucide-react';

interface VillaInfosProps {
    surface: number;
    bedrooms: number;
    bathrooms: number;
    has_pool: boolean;
    has_kitchen: boolean;
}

const VillaInfo: FC<VillaInfosProps> = ({
    surface, bedrooms, bathrooms, has_pool, has_kitchen }) => {
        return (
            <div className='max-w-[800px] mx-auto p-6 bg-white shadow-lg rounded-md'>
                <h2 className='text-2xl font-semibold mb-4'>Informations</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {has_pool && (
                        <div className='flex items-center space-x-2'>
                            <Waves className='text-blue-500' />
                            <span className='text-lg font-medium'>Piscine</span>
                        </div>
                    )}
                    {has_kitchen && (
                        <div className='flex items-center space-x-2'>
                            <CookingPot className='text-green-500' />
                            <span className='text-lg font-medium'>Cuisine aménagée</span>
                        </div>
                    )}
                    <div className='flex items-center space-x-2'>
                        <Bath className='text-purple-500' />
                        <span className='text-lg font-medium'>{bathrooms} salle(s) de bain</span>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <Bed className='text-yellow-500' />
                        <span className='text-lg font-medium'>{bedrooms} chambre(s)</span>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <Square className='text-yellow-500' />
                        <span className='text-lg font-medium'>{surface} m²</span>
                    </div>
                </div>
                <div>
                    <p className='mt-6'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, reiciendis dolore! Vitae explicabo deleniti vero molestias voluptatem ducimus id iure, nam repellendus praesentium, ullam quas neque eius quibusdam corporis corrupti dolor cumque commodi cupiditate rem nemo earum voluptas illo consequatur. Minima repudiandae ducimus aliquid qui? Voluptatem distinctio accusamus ad est.
                    </p>
                </div>
            </div>
        )
    }

export default VillaInfo;