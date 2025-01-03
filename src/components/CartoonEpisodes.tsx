import cartoonList from '../JSONs/cartoonlist.json';

const CartoonEpisodes = ({ setSelectedCartoon, selectedCartoon, videoUrl, setVideoUrl, setIsWatch }: { setSelectedCartoon: any, selectedCartoon: any, videoUrl: any, setVideoUrl: any, setIsWatch: any }) => {
    const filterCartoon = cartoonList.find(list => list.id === selectedCartoon);

    const handleWatch = (cartoon: any) => {
        setVideoUrl(cartoon.videoUrl);
        setIsWatch(true)
    }
    return (
        <div className='mt-7 mb-20 overflow-y-auto'>
            <div className='flex flex-col gap-4 px-2'>
                <img src={filterCartoon?.cartoonPosterThumbnail} alt="thumbnail" width={120} />
                <div className='text-xs'>
                    <h1 className='font-bold text-xl my-2'>{filterCartoon?.title}</h1>
                    <p>{filterCartoon?.description}</p>
                </div>
            </div>
            <div className='font-bold mt-4 mx-4'>
                Episodes
            </div>
            {filterCartoon?.episodes.map(cartoon => {
                return <div className='mx-4 mt-4 flex gap-3' key={cartoon.id}>
                    <div>
                        <img src={cartoon?.videoThumbnail} alt="episode_thumbnail" width={80} />
                    </div>
                    <div className='text-xs space-y-2'>
                        <h1 className='font-bold'>{cartoon.episodeNumber + " - " + cartoon?.episodeName}</h1>
                        <button className='bg-blue-400 text-white rounded-lg p-2 text-xs' onClick={() => handleWatch(cartoon)}>
                            Watch Now
                        </button>
                    </div>
                </div>
            })}
        </div>
    )
}

export default CartoonEpisodes