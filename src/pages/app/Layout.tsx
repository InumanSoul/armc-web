import { Outlet } from "react-router-dom";
import Navigation from "../../components/Navigation";

export function Layout (){
  return (
    <>
      <header className="w-full bg-gray-950 flex items-center justify-center fixed bottom-0 h-16">
        <Navigation />
      </header>
      <Outlet />
    </>
  )
}