// CHANGED TO BY COUNTRY, BECAUSE API DOES NOT SUPPORT ESTONIA...

import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { countries } from "../assets/constants";

import { Error, Loader, SongCard } from "../components";
import { useGetSongsByCountryQuery } from "../redux/services/shazamCore";

const AroundYou = () => {
  const [country, setCountry] = useState(countries[0].name);
  const [loading, setLoading] = useState(true);
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const { data, isFetching, error } = useGetSongsByCountryQuery(country);

  console.log(country);

  // console.log(data);

  /* useEffect(() => {
        axios
          .get(
            "https://geo.ipify.org/api/v2/country?apiKey=at_Yt2zHosqssG2KnegWCuAXoN7azBwl"
          )
          .then((res) => setCountry(res?.data?.location?.country))
          .catch((err) => console.log(err))
          .finally(() => setLoading(false));
      }, [country]); */

  /*    useEffect(() => {
        axios
          .get(
            "https://geo.ipify.org/api/v2/country?apiKey=at_Yt2zHosqssG2KnegWCuAXoN7azBwl"
          )
          .then((res) => setCountry(country))
          .catch((err) => console.log(err))
          .finally(() => setLoading(false));
      }, [country]); */

  if (isFetching && loading)
    return <Loader title="Loading top songs in selected country..." />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-left">
          By Country (<span className="font-black">{country}</span>)
        </h2>
        <select
          onChange={(e) => {
            setCountry(e.target.value);
          }}
          value={country}
          className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
        >
          {countries.map((country, i) => (
            <option key={i} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
        ))}
      </div>
    </div>
  );
};

export default AroundYou;
