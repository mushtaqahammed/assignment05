import { Suspense } from "react";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import TecnologyCard from "./components/tecnology/TecnologyCard";
import type { Idata } from "./types/dataType";

const tecnologyCardfetch = async (): Promise<Idata[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();

  return data;
};

function App() {
  const tecnologyCardPromise = tecnologyCardfetch();

  console.log(tecnologyCardPromise);

  return (
    <>
      <Nav />

      

      <Banner />

      <Suspense fallback={<h2>Loading...</h2>}>
        <TecnologyCard tecnologyCardPromise={tecnologyCardPromise} />
      </Suspense>
    </>
  );
}

export default App;
