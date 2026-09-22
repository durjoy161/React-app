import type { ITechnology } from "../../Type/technologyType";


interface YourStackProps {
  selectedTechnologies: ITechnology[];
  onRemove: (id: string, name: string) => void;
  onRemoveAll: () => void;
}

const YourStack = ({
  selectedTechnologies,
  onRemove,
  onRemoveAll,
}: YourStackProps) => {
  return (
    <div className="h-fit rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
      <h2 className="text-xl font-bold text-[#202b3d]">
        Your Stack
      </h2>

      <p className="mt-1 text-sm text-gray-500">
        {selectedTechnologies.length === 0
          ? "No technologies selected yet."
          : `${selectedTechnologies.length} Technologies Selected`}
      </p>

      {selectedTechnologies.length === 0 && (
        <div className="mt-6 rounded-xl border border-dashed border-gray-300 py-10 text-center">
          <p className="text-gray-400">
            Your stack is empty.
          </p>
        </div>
      )}

      {selectedTechnologies.length > 0 && (
        <>
          <div className="mt-5 space-y-3">
            {selectedTechnologies.map((technology) => (
              <div
                key={technology.id}
                className="flex items-center justify-between rounded-md border border-gray-200 p-3"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={technology.icon}
                    alt={technology.name}
                    className="h-8 w-8 object-contain"
                  />

                  <div>
                    <h3 className="text-sm font-semibold text-[#202b3d]">
                      {technology.name}
                    </h3>

                    <p className="text-xs text-gray-500">
                      {technology.category}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() =>
                    onRemove(technology.id, technology.name)
                  }
                  className="text-lg text-gray-400 transition hover:text-red-500"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={onRemoveAll}
            className="mt-5 w-full rounded-md border border-red-200 py-2 text-sm font-medium text-red-500 transition hover:bg-red-50"
          >
            Remove All
          </button>
        </>
      )}
    </div>
  );
};

export default YourStack;