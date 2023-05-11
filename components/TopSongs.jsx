"use client";
import { useState } from "react";
import ReactAudioPlayer from "react-audio-player";

const TopSongs = ({ songs }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentSong, setCurrentSong] = useState(null);

  // the encodeURIComponent javascript function help us to parse the text from the search input
  // so it will be compatible for the url that we want to fetch even if it has spaces...
  const handleSearch = async () => {
    const encodedSearchTerm = encodeURIComponent(searchTerm);
    const url = `https://shazam.p.rapidapi.com/search?term=${encodedSearchTerm}&limit=1`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "a83b733ee3mshc48e67c9ca091eap16e4f1jsn47737f86ba07",
        "X-RapidAPI-Host": "shazam.p.rapidapi.com",
      },
    };
    const res = await fetch(url, options);
    const data = await res.json();
    const songSearch = data.tracks.hits[0];
    if (songSearch) {
      const audioUrl = songSearch.track.hub.actions[1].uri;
      setCurrentSong(audioUrl);
    } else {
      console.log("No se encontraron resultados para la canción buscada.");
    }
  };

  async function handleSongClick(key) {
    const url = `https://shazam.p.rapidapi.com/songs/get-details?key=${key}&locale=en-US`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "a83b733ee3mshc48e67c9ca091eap16e4f1jsn47737f86ba07",
        "X-RapidAPI-Host": "shazam.p.rapidapi.com",
      },
    };
    const response = await fetch(url, options);
    const result = await response.json();
    const songAudio = result.hub?.actions[1]?.uri;

    setCurrentSong(songAudio);
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div>
      <div className="flex gap-3 mb-4 ml-24">
        <input
          className="bg-black rounded-lg border-1 p-1"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Search song..."
        />
        <button
          className=" rounded-md bg-slate-600 p-1 hover:bg-slate-800"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <ul className="flex gap-6 mb-8 flex-wrap justify-center  ">
        {songs.tracks.map((song) => (
          <div className="bg-gray-900 shadow-lg rounded w-60 p-3 mb-8  ">
            <div className="group relative ">
              <img
                className="h-40 w-full md:w-72 block rounded "
                src={song.images?.coverart}
                alt={song.title}
              />
              <div className="absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly">
                <button
                  onClick={() => handleSongClick(song.key)}
                  class="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="currentColor"
                    className="bi bi-play-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-white text-lg truncate">{song.title}</h3>
              <p className="text-gray-400 truncate">{song.subtitle}</p>
            </div>
          </div>
        ))}
      </ul>

      <div className="fixed bottom-0 left-0 right-0 rounded-none ">
        <ReactAudioPlayer className="min-w-full rounded-none" src={currentSong} autoPlay controls />
      </div>
    </div>
  );
};

export default TopSongs;
