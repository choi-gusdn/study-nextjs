import { Suspense } from 'react';
import MovieInfo from '../../../../components/movie-info';
import MovieVideos from '../../../../components/movie-videos';

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  console.log('start fetcing');
  //   방법1 - 기본
  //   const movie = await getMovie(id);
  //   const videos = await getVideos(id);
  //   방법2 - 동시에
  //   const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
  // 방법3 - 각자 컴포넌트로 분리
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info...</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos...</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
