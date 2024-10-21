import PublicNavigation from "../components/public/Navigation";

export default function Home() {

  return (
    <>
    <PublicNavigation />
    <section className="w-full h-dvh bg-zinc-900 text-zinc-50 flex items-center justify-center">
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-4xl font-bold">Angeles Rebeldes MC</h1>
        <p className="text-lg">Hermandad Paraguay, 2009</p>
        <div className="space-x-2">
        </div>
      </div>
    </section>
    </>
  )
}
