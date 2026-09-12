import { use, useState } from "react";
import type { Idata } from "../../types/dataType";
import AvailableTecnology from "./AvailableTecnology";
import RemoveTecnology from "./removeTecnology";
import RemoveAllTecnology from "./RemoveAllTecnology";

interface DataProps {
  tecnologyCardPromise: Promise<Idata[]>;
}

const TecnologyCard = ({ tecnologyCardPromise }: DataProps) => {
  const datas = use(tecnologyCardPromise);

  const [selected, setSelected] = useState<string[]>([]);

  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-4xl font-bold ">
          Explore the{" "}
          <span className="bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Technologies
          </span>
        </p>

        <br />

        <p>Pick one technology per category to build your ideal stack.</p>
      </div>

      <div className="flex gap-5 my-2 mt-10">
        {/* Available Technology */}
        <AvailableTecnology
          datas={datas}
          selected={selected}
          setSelected={setSelected}
        />

        {/* Your Stack */}
        <div className="mt-3 p-3 ml-5 w-64 rounded-lg border border-gray-200 ">
          <div>
            <p className="font-bold text-xl">Your Stack</p>
            <p className="text-gray-500">
              {selected.length} Technologies Selected
            </p>
          </div>

          {/* Empty Stack */}
          {selected.length === 0 && (
            <p className="text-gray-500 mt-3">Your stack is empty.</p>
          )}

          {/* Selected Technologies */}
          <div className=" ">
            {selected.map((technology) => (
              <div
                key={technology}
                className="mt-2 p-3 rounded-lg border border-gray-200 flex items-center justify-between"
              >
                <span className="font-semibold text-lg">{technology}</span>

                {/* Remove One Technology */}
                <RemoveTecnology
                  technology={technology}
                  selected={selected}
                  setSelected={setSelected}
                />
              </div>
            ))}
          </div>

          {/* Remove All */}
          {selected.length > 0 && (
            <div className="mt-4">
              <RemoveAllTecnology setSelected={setSelected} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TecnologyCard;
