import { ReactSession } from 'react-client-session';
function adminLoggedInNavigator(navigate) {
	function navigator() {
		const token = localStorage.getItem("admin_access_token");
		if (!token) {
			navigate('/admin');
		}
	}
	return navigator;
}

export default adminLoggedInNavigator;
