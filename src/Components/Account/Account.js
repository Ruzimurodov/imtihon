import React, { useEffect, useRef, useState } from 'react';
import bgimg from '../../Assets/Images/bgimg.png';
import floraImg from '../../Assets/Images/flora.png';
import violet from '../../Assets/Images/violet.png';
import philip from '../../Assets/Images/philip.png';
import cover from '../../Assets/Images/cover.png';
import { Left, Notific, Right } from '../../Assets/Images/Icons/Icons';
import './account.scss';
import { Link } from 'react-router-dom';
import AccNav from '../AccNav/AccNav';
import useData from '../../Hooks/useData';
import useNav from '../../Hooks/useNav';

const Account = ({ accImg, userName, follower, id, header }) => {
	const [data] = useData();

	const [_, setOpen] = useNav();

	const [albumid, setAlbumid] = useState({
		id: id,
	});

	const [newData, setNewData] = useState(
		data.data.filter((item) => item.albumId === albumid.id),
	);

	const elBtn = useRef();

	return (
		<div className='profile'>
			<div className='profile__back'>
				<img
					className='bgimg'
					src={newData[1].url}
					alt='profile background image'
				/>
			</div>
			<div className='profile__header'>
				<div className='account'>
					<img className='account__img' src={accImg} alt='user image' />
					<div className='account__info'>
						<h2 className='account__title'>{userName}</h2>
						<span className='account__followers'>{follower}</span>
					</div>
				</div>
				<div className='subscribe'>
					<button className='subscribe__icon'>
						<Notific />
					</button>
					<button
						ref={elBtn}
						onClick={() => elBtn.current.classList.toggle('follow-btn')}
						className='subscribe__btn'>
						Subscribe
					</button>
				</div>
			</div>
			<div className='profile__nav'>
				<div className='profile__nav-header'>
					<AccNav />
					<Link
						onClick={() => setOpen(false)}
						to={`/videopage/${newData[0].id}`}
						className='favourite'>
						<div className='favourite__video-box'>
							<img
								className='favourite__video'
								src={newData[0].url}
								alt='video'
							/>
							<span className='video-lists__video-time'>4:15</span>
						</div>
						<div className='favourite__content'>
							<h3 className='favourite__title'>{newData[0].title}</h3>
							<p className='favourite__info'>
								Your cheap internet-based banner advertising will become one of
								the sought for ads there are. Today, the world of Internet
								advertising is rapidly evolving beyond banner ads and intrusive
								pop-ups. Bayles A common medium for advertising on the Internet
								is the use of banner ads.{' '}
							</p>
							<span className='favourite__subscribe'>
								11k views · 6 months ago
							</span>
						</div>
					</Link>
				</div>
				<div className='recomended'>
					<h3 className='recomended__title'>Recommended channel</h3>
					<div className='recomended__content'>
						<div className='recomended__user'>
							<Link className='recomended__link' to='/florabenson'>
								<img
									className='recomended__img'
									src={floraImg}
									alt='user image'
								/>
								<span className='recomended__name'>Flora Benson</span>
							</Link>
						</div>
						<div className='recomended__user'>
							<Link className='recomended__link' to='/violetcobb'>
								<img
									className='recomended__img'
									src={violet}
									alt='user image'
								/>
								<span className='recomended__name'>Violet Cobb</span>
							</Link>
						</div>
						<div className='recomended__user'>
							<Link className='recomended__link' to='/philipmullins'>
								<img
									className='recomended__img'
									src={philip}
									alt='user image'
								/>
								<span className='recomended__name'>Phillip Mullins</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className='profile__videos'>
				<div className='profile__videos-header'>
					<h3 className='profile__videos-title'>{header}</h3>
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
									<img
										className='video-lists__img'
										src={item.url}
										alt='video'
									/>
									<span className='video-lists__time'>4:15</span>
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

export default Account;
