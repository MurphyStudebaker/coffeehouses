import TileGrid from "@/components/TileGrid";

import base from "../lib/airtable";

async function fetchRecords() {
  try {
    const records = await base("Coffeehouses").select().all();
    return records.map((record) => record.fields); // Adjust based on your record structure
  } catch (error) {
    console.error("Error fetching records from Airtable:", error);
    return [];
  }
}

export default async function Home() {
  const dummyShop = {
    imageSrc:
      "https://theoccidentalnews.com/wp-content/uploads/2019/11/MuddyPaw_CommNews_Kathy7.jpg",
    title: "Java Haven",
    neighborhood: "Downtown",
    tags: ["Espresso", "Organic", "Vegan", "Cozy"],
  };
  const coffeeShops = Array(10)
    .fill(null)
    .map(() => ({ ...dummyShop }));

  const records = await fetchRecords();

  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <header className="w-full">
        <div className="bg-froth">
          <h1 className="p-20 max-w-5xl flex-col items-center justify-between font-bold text-6xl text-bean">
            {" "}
            Find independent coffeehouses in Los Angeles.{" "}
          </h1>
        </div>

        <svg
          viewBox="0 0 1440 93"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M452.5 41.9374C281.315 90.8795 168.5 -7.93758 -0.999993 92.9997L-0.999969 -97L1440 -96.9997L1440 81.1251C1193 -23.3748 1077.54 114.599 893 81.125C626 32.6922 661.175 -17.7233 452.5 41.9374Z"
            fill="#F7F4F0"
          />
        </svg>
      </header>

      <main className="p-24">
        {/* <p className="max-w-full">{records[0].name}</p> */}
        <TileGrid coffeeShops={records} />
      </main>
      <footer className="p-8">
        Live in LA? Submit your favorite coffeeshop. Thanks!
      </footer>
    </div>
  );
}
