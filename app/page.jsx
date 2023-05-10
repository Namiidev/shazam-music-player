
import TopSongs from "@components/TopSongs";

const url =
  "https://shazam.p.rapidapi.com/charts/track?locale=en-US&pageSize=20&startFrom=0";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "a83b733ee3mshc48e67c9ca091eap16e4f1jsn47737f86ba07",
    "X-RapidAPI-Host": "shazam.p.rapidapi.com",
  },
};

async function getSongs() {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
}



async function Home() {
  const songs = await getSongs();
  return (
    <main className="flex flex-grow gradient bg-gradient-to-t from-blue-200 to-indigo-900 overflow-hidden">
      <div className="flex flex-col ">
        <div className=" m-12 font-bold text-lg">Browse</div>
        <TopSongs songs={songs}></TopSongs>
      </div>
    </main>
  );
}

export default Home;
