import MoviesListPage from '@/components/MoviesListPage'

interface Props {
    params: Promise<{ params?: string[] }>
}

export default async function MoviesRoute({ params }: Props) {
    const { params: segments } = await params;
    const [genre = '', sort = ''] = segments ?? []
    return <MoviesListPage genre={genre} sort={sort} />
}
