import {Button} from "../../components/ui/button";

export default function Header() {
  return (
    <header className="relative h-screen flex items-center justify-center bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('/img-home.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative text-center p-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
                Hôtels incroyables
            </h1>
            <p className="text-lg md:text-2xl mb-8 text-white">
                Voyagez vers une destination de rêve.
            </p>
            <Button className="bg-yellow-500 text-white px-6 py-3 rounded-full font-semibold animate-pulse">
                Réserver maintenant
            </Button>
        </div>
        </header>
  )
}
