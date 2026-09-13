
import type { Idata } from "../../types/dataType";

import {
  FaReact,
  FaVuejs,
  FaNodeJs,
  FaDocker,
  FaJava,
} from "react-icons/fa";

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

// Technology Icons
const icons = {
  react: <FaReact className="text-[#61DAFB]" />,
  vue: <FaVuejs className="text-[#4FC08D]" />,
  svelte: <SiSvelte className="text-[#FF3E00]" />,
  next: <SiNextdotjs className="text-black" />,
  node: <FaNodeJs className="text-[#339933]" />,
  postgresql: <SiPostgresql className="text-[#4169E1]" />,
  redis: <SiRedis className="text-[#DC382D]" />,
  javascript: <SiJavascript className="text-[#F7DF1E]" />,
  typescript: <SiTypescript className="text-[#3178C6]" />,
  java: <FaJava className="text-[#ED8B00]" />,
  tailwind: <SiTailwindcss className="text-[#06B6D4]" />,
  docker: <FaDocker className="text-[#2496ED]" />,
};

// Technology Badge Colors
const badgeColors = {
  react: "border-[#61DAFB] text-[#61DAFB]",
  vue: "border-[#4FC08D] text-[#4FC08D]",
  svelte: "border-[#FF3E00] text-[#FF3E00]",
  next: "border-black text-black",
  node: "border-[#339933] text-[#339933]",
  postgresql: "border-[#4169E1] text-[#4169E1]",
  redis: "border-[#DC382D] text-[#DC382D]",
  javascript: "border-[#F7DF1E] text-[#F7DF1E]",
  typescript: "border-[#3178C6] text-[#3178C6]",
  java: "border-[#ED8B00] text-[#ED8B00]",
  tailwind: "border-[#06B6D4] text-[#06B6D4]",
  docker: "border-[#2496ED] text-[#2496ED]",
};

interface Props {
  datas: Idata[];
  selected: string[];
  setSelected: React.Dispatch<React.SetStateAction<string[]>>;
}

const AvailableTecnology = ({
  datas,
  selected,
  setSelected,
}: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {datas.map((data: Idata) => {
        const iconKey = data.icon as keyof typeof icons;

        return (
          <div
            key={data.name}
            className={`card bg-base-70 w-full shadow-sm px-7 ${
              selected.includes(data.name)
                ? "border-2 border-orange-300"
                : "border border-gray-200"
            }`}
          >
            <div className="card-body">

              {/* Icon + Badge */}
              <div>
                <div className="flex items-start justify-between">
                  
                  {/* Icon */}
                  <span className="text-3xl">
                    {icons[iconKey]}
                  </span>

                  {/* Badge */}
                  <div
                    className={`badge badge-outline ${
                      badgeColors[iconKey]
                    }`}
                  >
                    {data.badge}
                  </div>
                </div>

                {/* Technology Name */}
                <h2 className="card-title text-2xl">
                  {data.name}
                </h2>
              </div>

              {/* Description */}
              <p className="text-gray-500">
                {data.description}
              </p>

              {/* Category + Level + Rating */}
              <div className="flex items-center justify-between mt-4">
                <span className="badge badge-ghost">
                  {data.category}
                </span>

                <span className="text-gray-500">
                  {data.level}
                </span>

                <span>
                  ⭐ {data.rating}
                </span>
              </div>

              {/* Button */}
              <div className="card-actions">
                <button
                  onClick={() => {
                    setSelected([...selected, data.name]);

                    toast.success(
                      `${data.name} is selected successfully`
                    );
                  }}
                  className="btn btn-neutral w-full"
                  disabled={selected.includes(data.name)}
                >
                  {selected.includes(data.name)
                    ? "Added to Stack"
                    : "Add to Stack"}
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
