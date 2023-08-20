import { useApi } from '../hooks/useApi';
import { ArtistInfoProps } from '../Type';
import { API_BASE_URL } from '../config';

export function useArtistInfo(artistId: number) {
  const artistUrl = `${API_BASE_URL}/artist/${artistId}`;
  return useApi<ArtistInfoProps>(artistUrl);
}
