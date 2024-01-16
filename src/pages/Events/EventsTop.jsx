import React from 'react';
import './events.css';
import tune from './../../images/tune.svg';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
function EventsTop({ tab, setTab, oneEvent, setOneEvent, setSearch, filterHandler, filterList, filterTags }) {
	const navigate = useNavigate();
	if (window.location.search.includes('id')) {
		const element = document.getElementById('events-scroll');
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	}
	const [drop, setDrop] = React.useState(false);

	return (
		<div>
			{drop && <div className='dropdown-bg' onClick={() => setDrop((prev) => !prev)}></div>}
			{
				<div className='filter-parent filter-dropdown' style={{ display: drop ? 'block' : 'none' }}>
					<div className='first-check'>
						<div className='one-ckeck'>
							<div className='check-check'>
								<input type='checkbox' onChange={filterHandler} value='FlagshipEvents' id='FlagshipEvents' />
							</div>
							<div className='check-name'>Flagship Events</div>
						</div>
						<div className='sub-over-head-22' onClick={() => setDrop((prev) => !prev)}>
							<i className='fa-solid fa-xmark'></i>
						</div>
					</div>
					<div className='filter-bar'></div>
					{filterList.map((item, id) => {
						return (
							<div key={id} className='one-ckeck'>
								<div className='check-check'>
									<input type='checkbox' onChange={filterHandler} value={item.value} id={item.value} />
								</div>
								<div className='check-name'>{item.name}</div>
							</div>
						);
					})}
					<br />
					<br />
				</div>
			}
			<Helmet>
				<title>Events | Tryst 2023</title>
			</Helmet>
			<div className='events-div'>
				<div className='events-main'>
					<div
						className='filter-btn2'
						onClick={() => !oneEvent[0] && tab === 'competitions' && setDrop((prev) => !prev)}
					>
						<div>Filters ({filterTags.length})</div>
						<div>
							<img src={tune} alt='tune' />
						</div>
					</div>
					<div className='events-search-div'>
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
					<div id='events-scroll' className='events-nav'>
						<div
							onClick={() => {
								setTab('competitions');
								setOneEvent([false, 0]);
								navigate('/events');
							}}
							style={{
								backgroundColor: tab === 'competitions' ? 'rgba(172, 235, 246, 1)' : 'rgba(255, 255, 255, 0.15)',

								color: tab === 'competitions' ? 'black' : 'white',
								textDecoration: 'none',
							}}
						>
							COMPETITIONS
						</div>
						<div
							onClick={() => {
								setTab('workshops');
								setOneEvent([false, 0]);
								navigate('/events');
							}}
							style={{
								backgroundColor: tab === 'workshops' ? 'rgba(172, 235, 246, 1)' : 'rgba(255, 255, 255, 0.15)',

								color: tab === 'workshops' ? 'black' : 'white',
								textDecoration: 'none',
							}}
						>
							WORKSHOPS
						</div>
						<div
							onClick={() => {
								setTab('Guest%20Lectures');
								setOneEvent([false, 0]);
								navigate('/events');
							}}
							style={{
								backgroundColor: tab === 'Guest%20Lectures' ? 'rgba(172, 235, 246, 1)' : 'rgba(255, 255, 255, 0.15)',

								color: tab === 'Guest%20Lectures' ? 'black' : 'white',
								textDecoration: 'none',
							}}
						>
							GUEST LECTURES
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default EventsTop;
