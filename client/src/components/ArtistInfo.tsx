import React from 'react';
import { ArtistInfoProps } from '../Type';
import { getYearFromDate } from '../utils/getYearFromDate';
import Paragraph from './elements/Paragraph';
import Title from './elements/Title';
import { formatDuration } from '../utils/formatDuration';
import Heading3 from './elements/Heading3';
import { formatNumber } from '../utils/formatNumber';

const ArtistInfo: React.FC<ArtistInfoProps> = ({ artist, topTracks, albums }) => {
  return (
    <div>
      <div className='bg-white shadow-md rounded-lg overflow-hidden flex flex-col md:flex-row my-4'>
        <div className="relative md:w-3/4">
          <img src={artist.picture_big} alt={artist.name} className="w-full h-full object-cover" />
          <div className="absolute top-0 left-6 md:left-4 w-full h-full flex flex-col justify-center items-start p-4">
            <h2 className="text-5xl md:text-5xl font-semibold text-gray-700">{artist.name}</h2>
            <Title title={`${formatNumber(artist.nb_fan)} fans`} />
            <hr className="mb-4 w-8 border-gray-700" />
            <Paragraph content={artist.biography || 'Artist biography'} />
          </div>
        </div>

        <div className="p-4 md:w-1/4">
          <Heading3 title='Top tracks' />
          <ol className="list-decimal pl-6">
            {topTracks.map((track) => (
              <li className="mb-2 border-b pb-2" key={track.id}>
                <div className="flex items-center justify-between">
                  <div className="flex-grow">
                    <span className="mr-2">{track.title}</span>
                  </div>
                  <div className="text-gray-500">{formatDuration(track.duration)}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className='mx-6'>
        <Heading3 title='Albums' />
        <div className='my-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-2'>
          {albums.map((album) => (
            <div key={album.id} className='max-w-sm'>
              <img src={album.cover_medium} alt={album.title} className="w-full h-48 sm:h-60 md:h-64 object-cover" />
              <div className="p-5">
                <Title title={album.title} />
                <Paragraph content={getYearFromDate(album.release_date)} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArtistInfo;
