import ChipGroup from "./ChipGroup";
import Link from "next/link";

const Tile = ({ imageSrc, title, neighborhood, goodFor }) => {
  return (
    <Link
      href={"./coffeeshop/" + title}
      className="w-full bg-white rounded-lg shadow-lg overflow-hidden mx-auto"
    >
      <img
        className="w-full h-48 object-cover"
        src={imageSrc}
        alt={`${title} image`}
      />
      <div className="p-4">
        <p className="text-gray-800">{JSON.stringify(imageSrc[0].url)}</p>
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-600 mt-1">{neighborhood}</p>
        <ChipGroup chips={goodFor} />
      </div>
    </Link>
  );
};

export default Tile;
