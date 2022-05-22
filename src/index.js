import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AuthProvider } from './Context/AuthContext';
import { DataProvider } from './Context/Data';
import { LogoProvider } from './Context/Logo';
import { NavProvider } from './Context/NavContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<AuthProvider>
				<NavProvider>
					<DataProvider>
						<LogoProvider>
							<App />
						</LogoProvider>
					</DataProvider>
				</NavProvider>
			</AuthProvider>
		</BrowserRouter>
	</React.StrictMode>,
);
