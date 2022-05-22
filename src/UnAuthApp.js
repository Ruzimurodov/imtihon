import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from "./Hooks/useAuth";

const UnAuthApp = () => {

	const [token,setToken] = useAuth()

	const [image, setImage] = useState({
		img:"", 
		alt:"user image"
	})

	const handleSubmit = (evt) => {
		evt.preventDefault();

		setToken({
			userlogin: evt.target.user_login.value,
			userpassword: evt.target.user_password.value, 
			image
		})

	}


	return (
		<div className='login'>
			<div className='login__inner'>
				<h1 className='login__title'>Log in to Youtube</h1>
				<form onSubmit={handleSubmit} className='login__form' autoComplete='off'>
					<div className='login__user'>
						<input
							className='login__user-input'
							type='text'
							name='user_login'
							placeholder='Phone number, email address'
                            required
						/>
					</div>
					<div className='login__password'>
						<input
							className='login__password-input'
							type='password'
							name='user_password'
							placeholder='Password'
                            required
						/>
					</div>
					<div className='login__file'> 
						<input 
						className='login__img'
						onChange={(evt => {
							setImage({
								img: window.URL.createObjectURL(evt.target.files[0]),
								alt:"user image"
							})
						})}
						name='user_img'
						type="file" />
					</div>
					<button className='login__btn' type='submit'>
						Log In
					</button>
				</form>
			</div>
		</div>
	);
};

export default UnAuthApp;
