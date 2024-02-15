import { ReactSession } from 'react-client-session';

function userLoggedOutNavigator(navigate) {
	function navigator() {
		const token = localStorage.getItem('access_token');
		if (token) {
			navigate('/dashboard');
		}
		if (!token) {
			navigate('/login');
		}
	}
	return navigator;
}

export default userLoggedOutNavigator;
