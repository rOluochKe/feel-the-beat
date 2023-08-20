import React from 'react';
import { Link } from 'react-router-dom';
import { TrackListProps } from '../Type';
import { formatDuration } from '../utils/formatDuration';
import Paragraph from './elements/Paragraph';
import Title from './elements/Title';

const TrackList: React.FC<TrackListProps> = ({ tracks }) => {
  return (
    <div className='my-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-2'>
      {tracks.map((track) => (
        <div
          key={track.id}
          className='max-w-sm'
        >
          <video width="640" height="360" controls poster={track.album.cover_medium}>
            <source src={track.preview} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="p-5">
            <Paragraph content={formatDuration(track.duration)} />
            <Title title={track.title} />
            <p className="font-normal text-gray-500 dark:text-gray-400 hidden lg:block">Album: {track.album.title}</p>
            <Link to={`/profile/${track.artist.id}`}>
              <Paragraph content={`by ${track.artist.name}`} />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrackList;
