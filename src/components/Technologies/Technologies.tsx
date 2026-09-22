import { use, useState } from "react";
import type { ITechnology } from "../../Type/technologyType";
import TechnologiesCard from "./TechnologiesCard";
import YourStack from "./YourStack";
import { toast } from "react-toastify";

interface TechnologiesProps {
  technologiesPromise: Promise<ITechnology[]>;
}

const Technologies = ({ technologiesPromise }: TechnologiesProps) => {
  const technologies = use(technologiesPromise);

  const [selectedTechnologies, setSelectedTechnologies] = useState<ITechnology[]>([]);

  const handleAddToStack = (technology: ITechnology) => {
    const alreadyAdded = selectedTechnologies.find(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already added!`);
      return;
    }

    setSelectedTechnologies([...selectedTechnologies,technology,]);

    toast.success(`${technology.name} added to your stack!`);
  };

  const handleRemoveTechnology = (id: string, name: string) => {
    const remainingTechnologies = selectedTechnologies.filter(
      (technology) => technology.id !== id
    );

    setSelectedTechnologies(remainingTechnologies);

    toast.error(`${name} removed from your stack!`);
  };

  const handleRemoveAll = () => {
    setSelectedTechnologies([]);

    toast.info("All technologies removed!");
  };

  return (
    <section className="bg-[#f8fafc] py-16">
      <div className="mx-auto container px-5">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-[#202b3d]">
            Explore the{" "}
            <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
              Technologies
            </span>
          </h1>

          <p className="mt-2 text-gray-500">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_300px]">

          {/* Technologies */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {technologies.map((technology) => {
              const isAdded = selectedTechnologies.some(
                (item) => item.id === technology.id
              );

              return (
                <TechnologiesCard
                  key={technology.id}
                  technology={technology}
                  isAdded={isAdded}
                  onAdd={handleAddToStack}
                />
              );
            })}
          </div>

          {/* Your Stack */}
          <YourStack
            selectedTechnologies={selectedTechnologies}
            onRemove={handleRemoveTechnology}
            onRemoveAll={handleRemoveAll}
          />

        </div>
      </div>
    </section>
  );
};

export default Technologies;