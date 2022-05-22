import { NavLink } from 'react-router-dom';
import {
	FavouritesLogo,
	GamesLogo,
	HistoryLogo,
	HomeLogo,
	LibraryLogo,
	Like,
	MusicLogo,
	ShowMoreIcon,
	SubscriptionLogo,
	TrendingLogo,
	Watch,
} from '../../Assets/Images/Icons/Icons';

import './nav.scss';

const Nav = () => {
	return (
		<nav className='navbar'>
			<ul className='navbar__list'>
				<li className='navbar__item'>
					<HomeLogo />
					<NavLink className='navbar__link' to='/'>
						Home
					</NavLink>
				</li>

				<li className='navbar__item'>
					<TrendingLogo />
					<NavLink className='navbar__link' to='/trending'>
						Trending
					</NavLink>
				</li>
				<li className='navbar__item navbar__item--active'>
					<SubscriptionLogo />
					<NavLink className='navbar__link' to='/subscriptions'>
						Subscriptions
					</NavLink>
				</li>
				<li className='navbar__item'>
					<LibraryLogo />
					<NavLink className='navbar__link' to='/library'>
						Library
					</NavLink>
				</li>
				<li className='navbar__item'>
					<HistoryLogo />
					<NavLink className='navbar__link' to='/history'>
						History
					</NavLink>
				</li>
				<li className='navbar__item'>
					<Watch />
					<NavLink className='navbar__link' to='/watchlater'>
						Watch later
					</NavLink>
				</li>
				<li className='navbar__item'>
					<FavouritesLogo />
					<NavLink className='navbar__link' to='/favourites'>
						Favourites
					</NavLink>
				</li>
				<li className='navbar__item'>
					<Like />
					<NavLink className='navbar__link' to='/likedvideos'>
						Liked videos
					</NavLink>
				</li>
				<li className='navbar__item'>
					<MusicLogo />
					<NavLink className='navbar__link' to='/music'>
						Music
					</NavLink>
				</li>
				<li className='navbar__item'>
					<GamesLogo />
					<NavLink className='navbar__link' to='/games'>
						Games
					</NavLink>
				</li>
				<li className='navbar__item'>
					<ShowMoreIcon />
					<NavLink className='navbar__link' to='/showmore'>
						Show more
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
