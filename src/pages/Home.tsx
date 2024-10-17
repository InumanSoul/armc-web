import { Link } from "react-router-dom";

export default function Home() {

  return (
    <section className="w-full h-dvh bg-gray-900 text-gray-50 flex items-center justify-center">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold">ARMC Club</h1>
        <p className="text-lg">Motorcycle club since 2005</p>
        <div className="space-x-2">
        <Link to="/app/profile" className="btn btn-outline-white">Members Area</Link>
        <Link to="/login" className="btn btn-outline-white">Login</Link>
        </div>
      </div>
    </section>
  )
}
