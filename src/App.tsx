import { Suspense } from "react"
import HeroSection from "./components/HeroSection"
import Nav from "./components/Nav"
import Technologies from "./components/Technologies/Technologies";
import type { ITechnology } from "./Type/technologyType";

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
        <Suspense>
          <Technologies technologiesPromise={technologiesPromise()}></Technologies>
        </Suspense>
      </main>
    </>
  )
}

export default App
