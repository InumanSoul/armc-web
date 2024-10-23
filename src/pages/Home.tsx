import PublicNavigation from "../components/public/Navigation";

export default function Home() {

  return (
    <>
    <PublicNavigation />
    <section className="w-full h-[calc(100dvh-90px)] bg-zinc-900 text-zinc-50 flex items-center justify-center bg-hero-home bg-cover bg-center">
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-6xl font-bold">Angeles Rebeldes MC</h1>
        <p className="text-lg">Hermandad Paraguay, 2009</p>
        <div className="space-x-2">
        </div>
      </div>
    </section>
    <section className="container py-28">
      <h2 className="font-bold text-2xl">Quienes somos</h2>
      <p>
        Somos una hermandad de motociclistas que comparten la pasión por las motos y la libertad de rodar por las rutas del país.
      </p>
    </section>
    <footer className="border-t border-zinc-600">
      <div className="container">
        <p className="text-zinc-50 text-center py-5">© 2021 Angeles Rebeldes MC</p>
      </div>
    </footer>
    </>
  )
}
