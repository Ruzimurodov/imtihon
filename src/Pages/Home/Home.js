import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import useData from '../../Hooks/useData';
import useNav from '../../Hooks/useNav';
import dollieImg from '../../Assets/Images/dollie.png';
import './home.scss';
import { Left, Right } from '../../Assets/Images/Icons/Icons';
import drinkImg from '../../Assets/Images/fooddrink.png';

const Home = () => {
	const [data] = useData();

	const [food, setFood] = useState(
		data.data.filter((item) => item.albumId === 10),
	);
	console.log(food);

	const [_, setOpen] = useNav();

	const [albumid, setAlbumid] = useState({
		id: 15,
	});

	const [newData, setNewData] = useState(
		data.data.filter((item) => item.albumId === albumid.id),
	);

	const [newAlbum, setNewAlbum] = useState({
		id: 17,
	});

	const [album, setAlbum] = useState(
		data.data.filter((item) => item.albumId === newAlbum.id),
	);

	return (
		<div>
			<div className='profile__videos'>
				<div className='profile__videos-header'>
					<Link className='home-user-link' to='/dollie'>
						<img
							className='home-user-link__img'
							src={dollieImg}
							alt='user image'
						/>
						<h3 className='profile__videos-title home-user-link__title'>
							Dollie Blair
						</h3>
					</Link>
					<div className='profile__videos-btns'>
						<button className='profile__videos-prev'>
							<Left />
						</button>
						<button className='profile__videos-next'>
							<Right />
						</button>
					</div>
				</div>
				<ul className='video-lists'>
					{data.isFetched ? (
						newData.map((item, index) => (
							<li
								key={index}
								data-id={item.albumId}
								className='video-lists__item'>
								<Link
									onClick={() => setOpen(false)}
									to={`/videopage/${item.id}`}
									className='video-lists__link'>
									<div className='home-user-link__box'>
										<img
											className='video-lists__img'
											src={item.url}
											alt='video'
										/>
										<span className='home-user-link__time'>4:15</span>
									</div>
									<p className='video-lists__title'>{item.title}</p>
									<span className='video-lists__view'>
										240k views · 4 months ago
									</span>
								</Link>
							</li>
						))
					) : (
						<h1>loading</h1>
					)}
				</ul>
			</div>
			<div className='recomended-content'>
				<div className='recomended-content__header'>
					<h3 className='recomended-content__title'>Recommended</h3>
					<div className='profile__videos-btns'>
						<button className='profile__videos-prev'>
							<Left />
						</button>
						<button className='profile__videos-next'>
							<Right />
						</button>
					</div>
				</div>
				<ul className='recomended-content__list'>
					{data.isFetched ? (
						album.map((item, index) => (
							<li
								key={index}
								data-id={item.albumId}
								className='recomended-content__item'>
								<Link
									onClick={() => setOpen(false)}
									to={`/videopage/${item.id}`}
									className='recomended-content__link'>
									<img
										className='recomended-content__img'
										src={item.url}
										alt='video'
									/>
									<span className='recomended-content__time'>4:15</span>
									<p className='recomended-content__title'>{item.title}</p>
									<span className='recomended-content__view'>
										240k views · 4 months ago
									</span>
								</Link>
							</li>
						))
					) : (
						<h1>loading</h1>
					)}
				</ul>
			</div>
			<div className='home-footer'>
				<div className='home-footer__header'>
					<div className='home-footer__header-box'>
						<img
							className='home-footer__header-img'
							src={drinkImg}
							alt='user image'
						/>
						<h2 className='home-footer__header-title'><Link className='home-footer__header-link' to='/fooddrink'>
						Food & Drink</Link></h2>
						<span className='home-footer__header-text'>
							Recommended channel for you
						</span>
					</div>
					<div className='home-footer__btn-box'>
						<button className='subscribe__btn'>Subscribe</button>
						<button className='profile__videos-prev'>
							<Left />
						</button>
						<button className='profile__videos-next'>
							<Right />
						</button>
					</div>
				</div>
				<ul className='home-footer__list'>
					{data.isFetched ? (
						food.map((item, index) => (
							<li
								key={index}
								data-id={item.albumId}
								className='home-footer__item'>
								<Link
									onClick={() => setOpen(false)}
									to={`/videopage/${item.id}`}
									className='video-lists__link'>
									<div className='home-footer__box'>
										<img
											className='video-lists__img'
											src={item.url}
											alt='video'
										/>
										<span className='home-footer__time'>4:15</span>
									</div>
									<p className='video-lists__title'>{item.title}</p>
									<span className='video-lists__view'>
										240k views · 4 months ago
									</span>
								</Link>
							</li>
						))
					) : (
						<h1>loading</h1>
					)}
				</ul>
			</div>
		</div>
	);
};

export default Home;
