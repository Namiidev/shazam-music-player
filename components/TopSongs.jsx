"use client";
import { useState } from "react";
import ReactAudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const TopSongs = ({ songs }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);
  const [songTitle, setSongTitle] = useState("no title");

  // the encodeURIComponent javascript function help us to parse the text from the search input
  // so it will be compatible for the url that we want to fetch even if it has spaces...
  const handleSearch = async () => {
    const encodedSearchTerm = encodeURIComponent(searchTerm);
    const url = `https://shazam.p.rapidapi.com/search?term=${encodedSearchTerm}&limit=10`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.RAPID_API_KEY,
        "X-RapidAPI-Host": "shazam.p.rapidapi.com",
      },
    };
    const res = await fetch(url, options);
    const data = await res.json();

    const songSearch = await data.tracks.hits;
    const songSearchTitle = songSearch.map((hit) => hit.track);
    setSearchResults(songSearch);

    console.log(songSearch);
    console.log(songSearchTitle);
  };

  async function handleSongClick(key) {
    const url = `https://shazam.p.rapidapi.com/songs/get-details?key=${key}&locale=en-US`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.RAPID_API_KEY,
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
      <div className="flex gap-3 mb-4 mt-4 flex-wrap items-center justify-center">
        <input
          className="bg-black rounded-2xl border-1 p-4 lg:w-96 h-12"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Search song..."
        />
        <button
          className=" rounded-xl h-12 bg-slate-500 p-2 hover:bg-slate-800"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <ul className="flex gap-6 mt-12 lg:mb-12 mb-4 flex-wrap justify-center">
        {
        searchResults.map((searchResult) => (
          <div
          className="bg-gray-900 shadow-lg rounded-lg w-60 p-3 mb-8  "
          key={searchResult.track.key}
        >
          <div className="group relative ">
            <img
              className="h-48 w-full md:w-72 block rounded "
              src={searchResult.track.images?.coverart}
              alt={searchResult.track.title}
            />
            <div className="absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly">
              <button
                onClick={() => handleSongClick(searchResult.track.key)}
                className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition"
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
            <h3 className="text-white text-lg truncate">{searchResult.track.title}</h3>
            <p className="text-gray-400 truncate">{searchResult.track.subtitle}</p>
          </div>
        </div>
        ))}
      </ul>
      <div>
        <h1 className="mb-8 lg:ml-32 ml-4 lg:text-5xl text-2xl">Browse</h1>
      </div>
      <ul className="flex gap-6 mb-24 flex-wrap justify-center  ">
        {songs.tracks.map((song) => (
          <div
            className="bg-gray-900 shadow-lg rounded-lg w-60 p-3 mb-8  "
            key={song.key}
          >
            <div className="group relative ">
              <img
                className="h-48 w-full md:w-72 block rounded "
                src={song.images?.coverart}
                alt={song.title}
              />
              <div className="absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly">
                <button
                  onClick={() => handleSongClick(song.key)}
                  className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition"
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
        <ReactAudioPlayer
          className="min-w-full rounded-none"
          src={currentSong}
          autoPlay={true}
          controls
          title={songTitle} // Agrega el título de la canción
          style={{ backgroundColor: "#000000", color: "#333333" }} // Agrega estilos personalizados
        >
          {" "}
          <h3 className="z-10 text-white">{songTitle}</h3>{" "}
        </ReactAudioPlayer>
      </div>
    </div>
  );
};

export default TopSongs;
