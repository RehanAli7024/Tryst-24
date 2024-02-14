import { ReactSession } from 'react-client-session';
function adminLoggedOutNavigator(navigate) {
	function navigator() {
		const token = localStorage.getItem("admin_access_token");
		console.log(token);
		if (token) {
			navigate('/admin/events');
		}
	}
	return navigator;
}

export default adminLoggedOutNavigator;
