import { useQuery } from "@tanstack/react-query";

import { fetchPhotos } from "./api";
import { PhotoGrid, PhotoImage, PhotoItem } from "./style";

export interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: URL;
  thumbnailUrl: URL;
}

const Album = () => {
  const {
    data: photos,
    error,
    isLoading,
  } = useQuery<Photo[], Error>({
    queryKey: ["photos"],
    queryFn: fetchPhotos,
  });
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <PhotoGrid>
      {photos?.map((photo: Photo) => (
        <PhotoItem key={photo.id}>
          <PhotoImage src={photo.thumbnailUrl} alt={photo.title} />
          <p>{photo.title}</p>
        </PhotoItem>
      ))}
    </PhotoGrid>
  );
};

export default Album;
