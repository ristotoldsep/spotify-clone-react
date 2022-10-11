import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';

const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlay }) => (
  //If song is playing and the card and player title match, show pause icon
 isPlaying && activeSong?.title === song.title ? (
  <FaPauseCircle size={35} className="text-gray-300" onClick={handlePause}/>
 ) : (
  <FaPlayCircle size={35} className="text-gray-300" onClick={handlePlay}/>
 )
);

export default PlayPause;
