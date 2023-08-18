import { FC } from 'react'
import dynamic from 'next/dynamic'

import { IMoviePage } from '../../../../pages/movie/[slug]'
import { Meta } from '../../../utils/meta/Meta'
import { Banner } from '../../ui/banner/Banner'
import { SubHeading } from '../../ui/heading/SubHeading'
import Gallery from '../../ui/gallery/Gallery'
import { Content } from './Content/Content'
import { useUpdateCountOpened } from './useUpdateCountOpened'

const DynamicPlayer = dynamic(
	() => import('../../ui/video-player/VideoPlayer'),
	{
		ssr: false,
	}
)

const DynamicRateMovie = dynamic(() => import('./RateMovie/RateMovie'), {
	ssr: false,
})

export const SingleMovie: FC<IMoviePage> = ({ movie, similarMovies }) => {
	useUpdateCountOpened(movie.slug)

	return (
		<Meta title={movie.title} description={`Watch ${movie.title}`}>
			<Banner
				image={movie.bigPoster}
				Detail={() => <Content movie={movie} />}
			/>

			<DynamicPlayer slug={movie.slug} videoSource={movie.videoUrl} />

			<div className="mt-12">
				<SubHeading title="Similar" />
				<Gallery items={similarMovies} />
			</div>

			<DynamicRateMovie slug={movie.slug} id={movie._id} />
		</Meta>
	)
}
