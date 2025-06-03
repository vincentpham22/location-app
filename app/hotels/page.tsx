"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../../components/ui/button";

type Hotel = {
  id: number;
  name: string;
  location: string;
  description: string;
  price_per_night: number;
  image_url: string;
};

export default function HotelsPage() {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const res = await fetch("/api/hotels");
        const data = await res.json();
        setHotels(data);
      } catch (err) {
        console.error("Erreur lors du fetch:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchHotels();
  }, []);

  if (loading) return <p className="p-6">Chargement...</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Liste des hôtels</h1>
      <div className="grid gap-6">
        {hotels.map((hotel) => (
          <div
            key={hotel.id}
            className="border p-4 rounded-lg shadow flex flex-col md:flex-row items-center md:items-stretch gap-6"
          >
            {/* Textes à gauche */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-semibold">{hotel.name}</h2>
                <p className="text-gray-600">{hotel.location}</p>
                <p className="text-sm mt-2">{hotel.description}</p>
                <p className="text-yellow-600 font-bold mt-2">
                  {hotel.price_per_night} € / nuit
                </p>
                <div className="mt-4 hidden md:block">
                  <Button className="bg-yellow-500 text-white px-6 py-3 rounded-full font-semibold">
                    <Link href={`/hotels/${hotel.id}`}>Voir les détails</Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <Image
                src={hotel.image_url}
                alt={hotel.name}
                width={240}
                height={160}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

