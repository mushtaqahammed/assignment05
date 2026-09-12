import type { Idata } from "../../types/dataType";

import { FaReact, FaVuejs, FaNodeJs, FaDocker, FaJava } from "react-icons/fa";

import {
  SiSvelte,
  SiNextdotjs,
  SiPostgresql,
  SiRedis,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import { toast } from "react-toastify";

const icons = {
  react: <FaReact />,
  vue: <FaVuejs />,
  svelte: <SiSvelte />,
  next: <SiNextdotjs />,
  node: <FaNodeJs />,
  postgresql: <SiPostgresql />,
  redis: <SiRedis />,
  javascript: <SiJavascript />,
  typescript: <SiTypescript />,
  java: <FaJava />,
  tailwind: <SiTailwindcss />,
  docker: <FaDocker />,
};

interface Props {
  datas: Idata[];
  selected: string[];
  setSelected: React.Dispatch<React.SetStateAction<string[]>>;
}

const AvailableTecnology = ({ datas, selected, setSelected }: Props) => {
  return (
    <div className="grid grid-cols-3 gap-3">
      {datas.map((data: Idata) => {
        return (
          <div
            key={data.name}
            className={`card bg-base-70 w-96 shadow-sm px-7 ${
              selected.includes(data.name)
                ? "border-2 border-success"
                : "border border-gray-200"
            }`}
          >
            <div className="card-body">
              <div>
                <div className="flex items-start justify-between">
                  <span className="text-3xl">
                    {icons[data.icon as keyof typeof icons]}
                  </span>

                  <div className="badge badge-success badge-outline">
                    {data.badge}
                  </div>
                </div>

                <h2 className="card-title text-2xl">{data.name}</h2>
              </div>

              <p className="text-gray-500">{data.description}</p>

              <div className="flex items-center justify-between mt-4">
                <span className="badge badge-ghost">{data.category}</span>

                <span className="text-gray-500">{data.level}</span>

                <span>⭐ {data.rating}</span>
              </div>

              <div className="card-actions">
                <button
                  onClick={() => {
                    setSelected([...selected, data.name]);
                    toast.success(`${data.name} is selected successfully`);
                  }}
                  className="btn btn-neutral w-full"
                  disabled={selected.includes(data.name)}
                >
                  {selected.includes(data.name) ? "Added to Stack" : "Add to Stack"}
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AvailableTecnology;
