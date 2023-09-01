import {useState, useEffect} from 'react';
import youtube from '../api/youtube';

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
		if(defaultSearchTerm){
			search(defaultSearchTerm)
		}
	}, [defaultSearchTerm]);

  const search = async term => {
		try{
			const response = await youtube.get('/search', {
				params: {
					q: term,
					part: 'snippet',
					maxResults: 5,
					type: 'video',
					key: process.env.REACT_APP_YOUTUBE_API_KEY,
				},
			});
			setVideos(response.data.items);
		}catch(err){
			alert('Não foi possivel encontrar video devido numero de cotas excedido')
			console.error(err)
		}



	};

  return [videos, search];
};

export default useVideos;
