//TODO: adicionar barra de pesquisa de video

import styles from './styles.module.scss'
import SearchBar from './SearchBar';

import VideoDetail from './VideoDetail';
import useVideos from '../../hooks/useVideos';
import { useState, useEffect } from 'react';

export default function Video(){

  const [term, setTerm] = useState('')
  const [selectedVideo, setSelectedVideo] = useState(null);
	const [videos, search] = useVideos('');

	useEffect(() => {
		setSelectedVideo(videos[0]);
	}, [videos]);
  return(
    <div className={styles.video}>
      
			<div className='background'></div>
			<SearchBar term={term} setTerm={setTerm} onFormSubmit={search} />
			{term && <div className='video-content-section'>
				<div className='video-player-container'>
					<VideoDetail video={selectedVideo} />
				</div>
				<div className='video-previews-container'>
				</div>
			</div>}

    </div>
  )
}
