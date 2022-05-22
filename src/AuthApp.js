import React from 'react';
import Nav from './Components/Nav/Nav';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Trending from './Pages/Trending/Trending';
import SubscriptionPage from './Pages/SubscriptionsPage/SubscriptionsPage';
import Library from './Pages/Library/Library';
import History from './Pages/History/History';
import WatchLater from './Pages/WatchLater/WatchLater';
import Favourites from './Pages/Favourites/Favourites';
import LikedVideo from './Pages/LikedVideos/LikedVideos';
import Music from './Pages/Music/Music';
import Games from './Pages/Games/Games';
import ShowMore from './Pages/ShowMore/ShowMore';
import Subscription from './Components/Subscription/Subscription';
import Gussie from './UserPage/Gussie/Gussie';
import Leah from './UserPage/Leah/Leah';
import Emma from './UserPage/Emma/Emma';
import Eunice from './UserPage/Eunice/Eunice';
import Nora from './UserPage/Nora/Nora';
import Belle from './UserPage/Belle/Belle';
import Header from './Components/Header/Header';
import useNav from './Hooks/useNav';
import Flora from './UserPage/Flora/Flora';
import Philip from './UserPage/Philip/Philip';
import Violet from './UserPage/Violet/Violet';
import UserHome from './UserPage/UserHome/UserHome';
import About from './UserPage/About/About';
import Channels from './UserPage/Channels/Channels';
import Discussions from './UserPage/Discussion/Discussion';
import Playlists from './UserPage/Playlists/Playlists';
import Videos from './UserPage/Videos/Videos';
import VideosPage from './Pages/VideosPage/VideosPage';
import SingleVideo from './Pages/SingleVideo/SingleVideo';
import FoodDrink from './UserPage/FoodDrink/FoodDrink';
import Dollie from './UserPage/Dollie/Dollie';

const AuthApp = () => {
	const [open] = useNav();

	return (
		<div className='youtube-home'>
			<Header />
			<div className='youtube-home__main'>
				{open && (
					<div className='youtube-home__menu'>
						{/* {open && <Nav />} */}
						<Nav />
						<Subscription />
					</div>
				)}
				<div
					className={`youtube-home__content ${
						!open ? 'youtube-home__content--active' : ''
					}`}>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/trending' element={<Trending />} />
						<Route path='/subscriptions' element={<SubscriptionPage />} />
						<Route path='/library' element={<Library />} />
						<Route path='/history' element={<History />} />
						<Route path='/watchlater' element={<WatchLater />} />
						<Route path='/favourites' element={<Favourites />} />
						<Route path='/likedvideos' element={<LikedVideo />} />
						<Route path='/music' element={<Music />} />
						<Route path='/games' element={<Games />} />
						<Route path='/showmore' element={<ShowMore />} />
						<Route path='/gussiesingleton' element={<Gussie />} />
						<Route path='/norafrancis' element={<Nora />} />
						<Route path='/dollie' element={<Dollie />} />
						<Route path='/bellebriggs' element={<Belle />} />
						<Route path='/eunicecortez' element={<Eunice />} />
						<Route path='/emmahanson' element={<Emma />} />
						<Route path='/fooddrink' element={<FoodDrink />} />
						<Route path='/leahberry' element={<Leah />} />
						<Route path='/florabenson' element={<Flora />} />
						<Route path='/philipmullins' element={<Philip />} />
						<Route path='/violetcobb' element={<Violet />} />
						<Route path='/usermenu' element={<UserHome />} />
						<Route path='/userabout' element={<About />} />
						<Route path='/userchanels' element={<Channels />} />
						<Route path='/userdiscussion' element={<Discussions />} />
						<Route path='/userplaylist' element={<Playlists />} />
						<Route path='/uservideos' element={<Videos />} />
						<Route path='/videopage/:id' element={<SingleVideo />} />
						<Route path='/videopage' element={<VideosPage />} />
					</Routes>
				</div>
			</div>
		</div>
	);
};

export default AuthApp;
