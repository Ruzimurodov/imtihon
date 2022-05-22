import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useData from '../../Hooks/useData';
import videogroup from '../../Assets/Images/videogroup.png';
import './singleVideo.scss';
import {
	Liked,
	DisLike,
	Share,
	More,
	Knob,
} from '../../Assets/Images/Icons/Icons';
import fooddrink from '../../Assets/Images/fooddrink.png';
import useNav from '../../Hooks/useNav';

const SingleVideo = () => {
	const [data] = useData();

	const [albumid, setAlbumid] = useState({
		id: 14,
	});

	const [newData, setNewData] = useState(
		data.data.filter((item) => item.albumId === albumid.id),
	);
	const [open, setOpen] = useNav();

	const elSubscribe = useRef();
	const elRec = useRef();
	const { id } = useParams();


	// const [data] = useData();

	const [video, setVideo] = useState([
		{
			isFetched: false,
			data: {},
		},
	]);

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
			.then((response) => response.json())
			.then((json) =>
				setVideo([
					{
						isFetched: true,
						data: json,
					},
				]),
			);
	}, [id]);

	console.log(video);

	return (
		<div className='video-page'>
			<div className='video-page__video'>
				<div className='videoplayer'>
					<img
						className='videoplayer__img'
						src={video[0].data.url}
						alt='video'
					/>
					<img
						className='videoplayer__player'
						src={videogroup}
						alt='video player'
					/>
				</div>
				<h2 className='video-title'>{video[0].data.title}</h2>
				<div className='video-subtiter'>
					<p className='video-subtiter__view'>123k views</p>
					<div className='video-subtiter__icons'>
						<button className='icons'>
							<Liked />
							<span className='video-subtiter__text'>123k</span>
						</button>
						<button className='icons'>
							<DisLike />
							<span className='video-subtiter__text'>435k</span>
						</button>
						<button className='icons'>
							<Share />
							<span className='video-subtiter__text'>Share</span>
						</button>
						<button className='icons'>
							<More />
						</button>
					</div>
				</div>
				<div className='channel'>
					<div className='channel__info'>
						<img
							className='channel__image'
							src={fooddrink}
							alt='channel image'
						/>
						<div className='channel__main'>
							<h2 className='channel__name'>
								<Link className='channel__link' to='/fooddrink'>
									Food & Drink
								</Link>
							</h2>
							<span className='channel__date'>Published on 14 Jun 2019</span>
							<p className='channel__text'>
								A successful marketing plan relies heavily on the pulling-power
								of advertising copy. Writing result-oriented ad copy is
								difficult, as it must appeal to, entice, and convince consumers
								to take action. There is no magic formula to write perfect ad
								copy; it is based on a number of factors, including ad
								placement, demographic, even the consumer’s mood when they see
								your ad.{' '}
							</p>
							<button className='channel__more' type='button'>
								Show more
							</button>
						</div>
					</div>
					<button
						ref={elSubscribe}
						onClick={(evt) =>
							evt.target.matches('.subscribe-icon')
								? elSubscribe.current.classList.toggle('subscribe-icon--active')
								: ''
						}
						className='subscribe-icon'
						type='button'>
						Subscribe
					</button>
				</div>
			</div>
			{!open ? (
				<div ref={elRec} className='recomendation-videos'>
					<div className='recomendation-videos__header'>
						<h3 className='recomendation-videos__title'>Next</h3>
						<span className='recomendation-videos__autoplay'>
							Autoplay <Knob />
						</span>
					</div>
					{data.isFetched ? (
						newData.map((item, index) => (
							<div
								key={index}
								data-id={item.albumId}
								className='recomendation-videos__videos'>
								<Link
									onClick={() => setOpen(false)}
									to={`/videopage/${item.id}`}
									className='recomendation-videos__link'>
									<img
										className='recomendation-videos__img'
										src={item.url}
										alt='video'
									/>
									<span className='video-lists__times'>4:15</span>
									<p className='recomendation-videos__text'>{item.title}</p>
									<span className='recomendation-videos__view'>
										240k views · 4 months ago
									</span>
								</Link>
							</div>
						))
					) : (
						<h1>loading</h1>
					)}
				</div>
			) : (
				<span>.</span>
			)}
		</div>
	);
};

export default SingleVideo;
