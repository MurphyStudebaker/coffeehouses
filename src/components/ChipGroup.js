export default function ChipGroup({ chips }) {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {chips.map((tag, index) => (
        <span
          key={index}
          className="bg-gray-200 text-gray-700 text-sm font-medium py-1 px-3 rounded-full"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
