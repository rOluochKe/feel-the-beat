export interface Track {
  id: number;
  title: string;
  duration: number;
  artist: {
    id: number;
    name: string;
  };
  album: {
    title: string;
    cover_medium: string;
  };
  preview: string;
}

export interface TrackListProps {
  tracks: Track[];
}

export interface ArtistInfoProps {
  artist: {
    id: number;
    name: string;
    nb_fan: number;
    picture_big: string;
    biography: string;
  };
  topTracks: { id: number; title: string; duration: number }[];
  albums: { id: number; title: string; cover_medium: string; release_date: string }[];
}
