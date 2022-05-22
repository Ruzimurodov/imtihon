import AuthApp from './AuthApp';
import useAuth from './Hooks/useAuth';
import UnAuthApp from './UnAuthApp';
import './Assets/main.scss';

function App() {
	const [token] = useAuth();

	if (token) {
		return <AuthApp />;
	} else {
		return <UnAuthApp />;
	}
}

export default App;
