import type { ITechnology } from "../../Type/technologyType";

interface TechnologiesCardProps {
  technology: ITechnology;
  isAdded: boolean;
  onAdd: (technology: ITechnology) => void;
}

const TechnologiesCard = ({
  technology,
  isAdded,
  onAdd,
}: TechnologiesCardProps) => {
  return (
    <div
      className={`rounded-lg border bg-white p-5 shadow-sm ${
        isAdded ? "border-pink-500" : "border-gray-200"
      }`}
    >
      <div className="flex items-center justify-between">
        <img
          src={technology.icon}
          alt={technology.name}
          className="h-10 w-10"
        />

        {technology.badge && (
          <span
            className={`rounded-full border px-3 py-1 text-xs font-medium ${
              technology.badge === "Popular"
                ? "border-blue-200 bg-blue-50 text-blue-600"
                : technology.badge === "Versatile"
                ? "border-purple-200 bg-purple-50 text-purple-600"
                : technology.badge === "Fast"
                ? "border-orange-200 bg-orange-50 text-orange-600"
                : technology.badge === "Modern"
                ? "border-purple-200 bg-purple-50 text-purple-600"
                : technology.badge === "Standard"
                ? "border-green-200 bg-green-50 text-green-600"
                : technology.badge === "Top SQL"
                ? "border-blue-200 bg-blue-50 text-blue-600"
                : technology.badge === "Flexible"
                ? "border-green-200 bg-green-50 text-green-600"
                : technology.badge === "Cache"
                ? "border-red-200 bg-red-50 text-red-600"
                : technology.badge === "Ubiquitous"
                ? "border-yellow-200 bg-yellow-50 text-yellow-600"
                : technology.badge === "Essential"
                ? "border-blue-200 bg-blue-50 text-blue-600"
                : technology.badge === "Containers"
                ? "border-cyan-200 bg-cyan-50 text-cyan-600"
                : "border-gray-200 bg-gray-50 text-gray-600"
            }`}
          >
            {technology.badge}
          </span>
        )}
      </div>

      <h2 className="mt-5 text-xl font-bold text-[#202b3d]">
        {technology.name}
      </h2>

      <p className="mt-3 min-h-[72px] text-sm leading-6 text-gray-500">
        {technology.description}
      </p>

      <div className="mt-5 flex items-center justify-between gap-2 text-xs">
        <span className="rounded-md bg-[#f1f5f9] px-3 py-1.5 font-medium text-[#475569]">
          {technology.category}
        </span>

        <span className="text-[#64748b]">
          {technology.difficulty}
        </span>

        <span className="flex items-center gap-1 font-medium text-[#475569]">
          <span className="text-yellow-500">★</span>
          {technology.rating}
        </span>
      </div>

      <button
        onClick={() => onAdd(technology)}
        disabled={isAdded}
        className={`mt-5 w-full rounded-md py-3 text-sm font-medium transition ${
          isAdded
            ? "cursor-not-allowed bg-pink-100 text-pink-600"
            : "bg-[#172033] text-white hover:bg-[#28364d]"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechnologiesCard;