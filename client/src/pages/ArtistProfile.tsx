import React, { useParams, Link } from 'react-router-dom';
import ArtistInfo from '../components/ArtistInfo';
import { useArtistInfo } from '../hooks/useArtistInfo';
import Spinner from '../components/elements/Spinner';
import { BiArrowBack } from 'react-icons/bi';

const iconProps = {
  style: {
    fontSize: '16px',
    display: 'inline',
    marginTop: '-4px',
  },
};

const ArtistProfile = () => {
  const { artistId } = useParams<{ artistId: string | undefined }>();
  const parsedArtistId = artistId ? parseInt(artistId, 10) : 0;

  const [artistInfo, loading, error] = useArtistInfo(parsedArtistId);

  return (
    <div>
      <Link to="/">
        <button
        className="py-2.5 px-5 mr-2 mb-2 mt-6 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
          <BiArrowBack style={iconProps.style} /> Go back
        </button>
      </Link>

      {loading ? (
        <Spinner />
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        artistInfo && <ArtistInfo {...artistInfo} />
      )}
    </div>
  );
};

export default ArtistProfile;
