"use client";
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar'
import { CalendarFold} from 'lucide-react';

const PRICE_PER_NIGHT = 130;


export default function Reservation() {

    const [startDate, setStartDate] = useState<Date | undefined>();
    const [endDate, setEndDate] = useState<Date | undefined>();
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleStartDateSelect = (date: Date | undefined) => {
        setStartDate(date);
        if (endDate && date && date > endDate) {
            setEndDate(undefined);
        }
    }

    const handleEndDateSelect = (date: Date | undefined) => {
        if (startDate && date && date >= startDate) {
            setEndDate(date);
        }
    }

    const calculateNights = () => {
        if (startDate && endDate) {
            const timeDiff = endDate.getTime() - startDate.getTime();
            return Math.ceil(timeDiff / (1000 * 3600 * 24));
        }
        return 0;
    }

    const totalNights = calculateNights();
    const totalPrice = totalNights * PRICE_PER_NIGHT;
    const handleReservation = () => {
        setIsSubmitted(true);
    }

    return (
        <div className='max-w-[1200px] mx-auto p-6 bg-white rounded-xl space-y-8'>
            <h2 className='text-3xl font-bold text-gray-800'>Réservez votre séjour</h2>
            <div className='space-y-4'>
                <div className='flex items-center space-x-3'>
                    <CalendarFold className='text-gray-500 h-5 w-5' />
                    <h3 className='text-gray-700 font-medium text-lg'>Sélectionnez vos dates:</h3>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-xl mx-auto'>
                    <div>
                        <p className='text-sm font-medium text-gray-600'>Date de début</p>
                        <Calendar
                            mode="single"
                            selected={startDate}
                            onSelect={handleStartDateSelect}
                            className='rounded-md border shadow-sm mt-2' />
                    </div>
                    {startDate && (
                        <div>
                            <p className='text-sm font-medium text-gray-600'>Date de fin</p>
                            <Calendar
                                mode="single"
                                selected={endDate}
                                onSelect={handleEndDateSelect}
                                className='rounded-md border shadow-sm mt-2' />
                        </div>
                    )}
                </div>
            </div>
            {totalNights > 0 && (
                <div className='p-4 bg-gray-200 border-l-4 border-blue-400 text-blue-700 rounded-lg'>
                    <p className='text-lg font-semibold'>{`Nombre de nuits: ${totalNights}`}</p>
                    <p className='text-lg'>{`Prix total: ${totalPrice}`}</p>
                </div>
                
            )}
            <Button onClick={handleReservation} disabled={!startDate || !endDate || isSubmitted} className='w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-lg'> 
                {isSubmitted ? (<div className='flex items-center justify-center space-x-2'>
                    <CalendarFold className='w-5 h-5 text-green-400'/>
                    <span>Réservation confirmée</span>
                </div>) : ('Réserver')}
            </Button>

            {isSubmitted && (
                    <p className='mt-4 text-center text-green-600 font-medium'>Votre réservation est confirmée</p>
                )}
        </div>
    )
}
