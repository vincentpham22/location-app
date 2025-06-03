"use client";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();
  const supabase = createClient();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  return (
    <button
      onClick={handleLogout}
      className="mt-6 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
    >
      Se déconnecter
    </button>
  );
}
