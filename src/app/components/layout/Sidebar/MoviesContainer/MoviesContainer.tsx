import { FC } from 'react'
import dynamic from 'next/dynamic'

import { PopularMovies } from './PopularMovies'

const DynamicFavoriteMovies = dynamic(() => import('./FavoriteMovies/FavoriteMovies'), {
	ssr: false,
})

export const MoviesContainer: FC = () => {
  return (
    <div>
      <PopularMovies />
      <DynamicFavoriteMovies />
    </div>
  )
}
