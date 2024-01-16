import React from 'react';
import './eventReg.css';
import EventForm from './eventForm';
import formup from '../../../images/form-1.svg';
import formdown from '../../../images/form-2.svg';
// const link = 'https://docs.google.com/forms/d/e/1FAIpQLSdjYQEzwKytR7TZzgtGRU9cDfE3b7sCPYP1_zm8ExUW4O7WSg/viewform';
function EventReg(props) {
	const formlink = props.link.split('/');
	let mainlink = '';
	let linkmaxlen = 0;
	for (let i = 0; i < formlink.length; i++) {
		if (formlink[i].length > linkmaxlen) {
			linkmaxlen = formlink[i].length;
			mainlink = formlink[i];
		}
	}
	// console.log(mainlink);
	// console.log(props);
	return (
		<div>
			<div className='event-reg-wrap'>
				<div className='reg-img-div-1'>
					<img src={formup} alt='tryst-dots-design' className='reg-img-1' />
				</div>
				<div className='event-reg-title'>Registration</div>
				<EventForm link={mainlink} event_ID={props.event_ID} />
				<div className='reg-img-div-2'>
					<img src={formdown} alt='tryst-dots-design' className='reg-img-1' />
				</div>
			</div>
		</div>
	);
}
export default EventReg;
