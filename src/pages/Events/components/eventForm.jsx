import React from 'react';
import { ReactSession } from 'react-client-session';

class EventForm extends React.Component {
	render() {
		return <div id='ff-compose'></div>;
	}
	componentDidMount() {
		var script = document.createElement('script');
		script.id = 'ff-script';
		script.src =
			'https://formfacade.com/include/114008573578641109388/form/' + this.props.link + '/classic.js?div=ff-compose';
		// console.log(this.props);
		script.defer = true;
		script.async = true;
		document.body.appendChild(script);
		const inject = document.createElement('script');
		ReactSession.setStoreType('localStorage');
		const token = ReactSession.get('access_token');
		inject.innerHTML = `
		function trystSubmit(frm) {
			if (formFacade.validate(frm, 'root') > 0) {
				return;
			}
			const s = {};
			document.querySelectorAll('input').forEach(i => s[i.name] = i.value);
			document.querySelectorAll('select').forEach(i => s[i.name] = i.value);
			fetch('https://api.tryst-iitd.org/events/register/', {
				method:'POST',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': 'Bearer ${token}',
				},
				body: JSON.stringify({eventId: '${this.props.event_ID}', data: s})
			}).then(() => {formFacade.submit(frm, 'root')});
		}
		const t = setInterval(() => {if (document.getElementById('ff-submit-root')) {
			document.getElementById('ff-submit-root').outerHTML = "<button type='button' class='rest-btn rest-btn-lg rest-btn-primary ff-submit' id='ff-submit-root2' onclick='trystSubmit(this.form)'><span class='material-icons'>send</span><span>Submit </span></button>";
		}}, 250);
		`;
		document.body.appendChild(inject);
	}
}
export default EventForm;
