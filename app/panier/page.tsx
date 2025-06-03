"use client";
import { useEffect, useState } from "react";
import { Trash2 } from 'lucide-react';

export default function PanierPage() {
  const [panier, setPanier] = useState<any[]>([]);

  // Charger le panier au montage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("panier") || "[]");
    setPanier(stored);
  }, []);

  // Fonction pour supprimer une réservation
  const removeReservation = (idx: number) => {
    const newPanier = panier.filter((_, i) => i !== idx);
    setPanier(newPanier);
    localStorage.setItem("panier", JSON.stringify(newPanier));
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4">Mon panier</h1>
      {panier.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <ul className="space-y-4">
          {panier.map((res, idx) => (
            <li key={idx} className="border p-4 rounded flex items-center justify-between">
              <div>
                <div><b>Hôtel ID :</b> {res.hotelId}</div>
                <div><b>Du</b> {new Date(res.startDate).toLocaleDateString()} <b>au</b> {new Date(res.endDate).toLocaleDateString()}</div>
                <div><b>Nuits :</b> {res.totalNights}</div>
                <div><b>Prix total :</b> {res.totalPrice} €</div>
              </div>
              <button
                onClick={() => removeReservation(idx)}
                className="ml-4 text-yellow-600 hover:text-yellow-800"
                title="Supprimer cette réservation"
              >
                <Trash2 />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
