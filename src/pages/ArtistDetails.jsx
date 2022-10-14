import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";

import {
  useGetArtistDetailsQuery,
} from "../redux/services/shazamCore";

const ArtistDetails = () => {
  const { id: artistId } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  //   Pulling in data
  const { data: artistData, isFetching: isFetchingArtistDetails, error } = useGetArtistDetailsQuery(artistId);

  if (isFetchingArtistDetails) return <Loader title="Searching artist details..." />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">

      {/* Header with all the details */}
      <DetailsHeader 
        artistId={artistId} 
        artistData={artistData} 
      />

      {/* Related songs to the artist */}
      <RelatedSongs
        data={Object.values(artistData?.songs)}
        artistId={artistId}
        isPlaying={isPlaying}
        activeSong={activeSong}
      />


    </div>
  );
};

export default ArtistDetails;
