
import TopSongs from "@components/TopSongs";

const url =
  "https://shazam.p.rapidapi.com/charts/track?locale=en-US&pageSize=20&startFrom=0";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.RAPID_API_KEY,
    "X-RapidAPI-Host": "shazam.p.rapidapi.com",
  },
};

async function getSongs() {
  const response = await fetch(url, options, { next: { revalidate: 172800 } });
  const data = await response.json();
  return data;
}



async function Home() {
  const songs = await getSongs();
  return (
    <main className="flex flex-grow gradient bg-gradient-to-t from-blue-200 to-indigo-900 overflow-hidden">
      <div className="flex flex-col ">
        <div className="mt-8 font-bold text-lg"></div>
        <TopSongs songs={songs}></TopSongs>
      </div>
    </main>
  );
}

export default Home;
