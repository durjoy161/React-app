import { Suspense } from "react"
import HeroSection from "./components/HeroSection"
import Nav from "./components/Nav"
import Technologies from "./components/Technologies/Technologies";
import type { ITechnology } from "./Type/technologyType";
import { ToastContainer } from "react-toastify";

function App() {

  const technologiesPromise = async ():Promise<ITechnology[]> =>{
    const res = await fetch("/data.json");
    const data = await res.json();
    return data;
  }
  return (
    <>
      <Nav />
      <main className="mt-24">
        <HeroSection />
        <Suspense fallback={<h2>Loading...</h2>}>
          <Technologies technologiesPromise={technologiesPromise()}></Technologies>
        </Suspense>
      </main>
      <ToastContainer />
    </>
  )
}

export default App
