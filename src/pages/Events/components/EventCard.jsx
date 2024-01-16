import React from 'react';
import './eventCard.css';
function EventCard({ card, grey, tab, oneEvent }) {
	// console.log(card);
	// console.log(grey);
	return (
		<div className='events-card' id='event-card'>
			<div className='events-card-img'>
				{/* {console.log(oneEvent,tab,window.innerWidth)} */}
				<img
					src={`https://tryst-bucket.s3.amazonaws.com/${card.poster}`}
					alt='event'
					className='events-card-image'
					style={
						!oneEvent[0] && tab !== 'competitions' && window.innerWidth > 768
							? { filter: grey ? 'grayscale(100%)' : 'none', width: '300px' }
							: { filter: grey ? 'grayscale(100%)' : 'none' }
					}
				/>
			</div>
		</div>
	);
}
export default EventCard;
