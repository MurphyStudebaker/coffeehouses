import Tile from "./Tile";

const TileGrid = ({ coffeeShops }) => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {coffeeShops.map((shop, index) => (
        <Tile
          key={index}
          imageSrc={shop.photo[0].thumbnails.large.url}
          title={shop.name}
          neighborhood={shop.neighborhood}
          goodFor={shop.goodFor}
        />
      ))}
    </div>
  );
};

export default TileGrid;
