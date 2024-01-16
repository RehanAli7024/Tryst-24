import React from 'react';
import axios from 'axios';
function Overlay({ overlay, setOverlay }) {
	const [loading, setLoading] = React.useState(true);
	const [data, setData] = React.useState([]);
	React.useEffect(() => {
		console.log(Number(overlay[1]));
		axios.get(`https://api.tryst-iitd.org/events/speaker?id=${Number(overlay[1])}`).then((response) => {
			setData(response.data[0]);
			setLoading(false);
		});
	}, [overlay]);
	if (loading) return <div></div>;
	return (
		<div className='speaker-overlay'>
			<div
				onClick={() => setOverlay((prev) => [!prev[0], prev[1]])}
				className={overlay[0] ? 'speaker-overlay-cont' : 'speaker-overlay-cont hidden'}
			>
				<div onClick={() => setOverlay((prev) => [!prev[0], prev[1]])} className='notif-overlay-box'>
					<div className='noti-over-head noti-over-head2'>
						<div onClick={() => setOverlay((prev) => [!prev[0], prev[1]])} className='cross pointer'>
							<i className='fa-solid fa-xmark'></i>
						</div>
						<div className='speaker-flex'>
							<div className='one-card one-card2'>
								<div className='card-top'>
									<div className='card-name'>
										<p className='position-text'>{data.name}</p>
									</div>
								</div>
								<div className='card-bottom'>
									<div className='position'>
										<p className='position-text'>{data.designation}</p>
									</div>
								</div>
								<img
									className='avatar'
									src={`https://tryst-bucket.s3.amazonaws.com/${data.image}`}
									alt={data.name}
								></img>
							</div>

							<div className='over-about'>
								<div className='about-speaker'>About the Speaker</div>

								{!loading ? (
									data.about
								) : (
									<p className='dummy-data'>
										Raghuram Govind Rajan is an Indian economist and a distinguished IIT Delhi Alumnus. He was the 23rd
										Governor of the Reserve Bank of India. Between 2003 and 2006, he was Chief Economist and director of
										research at the International Monetary Fund.
									</p>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='admin-events'>
			<div className='events-search-div admin-search'>
				<form className='events-search'>
					<input
						type='text'
						autoComplete='off'
						id='eventsearch'
						name='eventsearch'
						placeholder='Event name here'
						onChange={(e) => {
							setSearch(e.target.value);
						}}
					/>
					<button>
						<svg width='20' height='20' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M26.5 28.8333L17.1667 19.5C16.3333 20.1667 15.375 20.6944 14.2917 21.0833C13.2083 21.4722 12.0556 21.6667 10.8333 21.6667C7.80556 21.6667 5.24333 20.6183 3.14667 18.5217C1.04889 16.4239 0 13.8611 0 10.8333C0 7.80556 1.04889 5.24278 3.14667 3.145C5.24333 1.04833 7.80556 0 10.8333 0C13.8611 0 16.4239 1.04833 18.5217 3.145C20.6183 5.24278 21.6667 7.80556 21.6667 10.8333C21.6667 12.0556 21.4722 13.2083 21.0833 14.2917C20.6944 15.375 20.1667 16.3333 19.5 17.1667L28.875 26.5417C29.1806 26.8472 29.3333 27.2222 29.3333 27.6667C29.3333 28.1111 29.1667 28.5 28.8333 28.8333C28.5278 29.1389 28.1389 29.2917 27.6667 29.2917C27.1944 29.2917 26.8056 29.1389 26.5 28.8333ZM10.8333 18.3333C12.9167 18.3333 14.6878 17.6044 16.1467 16.1467C17.6044 14.6878 18.3333 12.9167 18.3333 10.8333C18.3333 8.75 17.6044 6.97889 16.1467 5.52C14.6878 4.06222 12.9167 3.33333 10.8333 3.33333C8.75 3.33333 6.97889 4.06222 5.52 5.52C4.06222 6.97889 3.33333 8.75 3.33333 10.8333C3.33333 12.9167 4.06222 14.6878 5.52 16.1467C6.97889 17.6044 8.75 18.3333 10.8333 18.3333Z'
								fill='#ACEBF6'
							/>
						</svg>
					</button>
				</form>
			</div>
			<div onClick={() => setOverlay((prev) => [!prev[0], category])} className='new-event-button'>
				<i className='fa-regular fa-plus'></i> ADD NEW
			</div>
			<div className='admin-events-container'>
				<div className='admin-events-head'>
					<div className='admin-events-title'>PUBLISHED</div>
				</div>
				<div className='admin-events-contents'>
					{data
						.filter((val) => {
							if (val.name.toLowerCase().includes(search.toLowerCase())) {
								return val;
							}
						})
						.map((comp, idx) => {
							return (
								<div key={idx} className='admin-event'>
									<img
										src={`https://tryst-bucket.s3.amazonaws.com/${category === 'Speakers' ? comp.image : comp.poster}`}
										alt='event poster'
										className='poster-image'
									/>
									<div className='ud-buttons'>
										<div
											className='event-button event-edit-button'
											onClick={() => setOverlay2((prev) => [!prev[0], comp.id, category])}
										>
											<i className='fa-solid fa-pen'></i> EDIT
										</div>
										<div
											className='event-button event-delete-button'
											onClick={() => {
												window.confirm('Are you sure you want to delete?')
													? category === 'Speakers'
														? deleteSpeaker(comp.id)
														: deleteComp(comp.id)
													: console.log('Not deleted');
											}}
										>
											<i className='fa-solid fa-trash'></i> DELETE
										</div>
										{category === 'Speakers' || (
											<div
												className='event-button'
												style={{ padding: '0px' }}
												onClick={() => downloadData(comp.id, comp.name)}
											>
												<img src={sheet} alt='download' className='download-icon' height='32px' width='32px' />
											</div>
										)}
									</div>
								</div>
							);
						})}
				</div>
			</div>
		</div>
		</div>
		
	);
}
export default Overlay;
