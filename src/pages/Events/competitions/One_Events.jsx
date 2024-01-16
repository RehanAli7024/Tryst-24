import React from 'react';
import EventReg from '../components/eventReg';
import eventwaves from '../../../images/Waves 1.svg';
import axios from 'axios';
import Overlay from '../../speakers/overlay';
import { ReactSession } from 'react-client-session';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import pathsetter from '../../../images/sponsor/PS Logo_Orange.png';

// eslint-disable-next-line no-extend-native
Date.prototype.toShortFormat = function () {
	const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

	const day = this.getDate();

	const monthIndex = this.getMonth();
	const monthName = monthNames[monthIndex];

	const year = this.getFullYear();

	return `${day}-${monthName}-${year}`;
};

function Competition({ id, type }) {
	const [isLoading, setLoading] = React.useState(true);
	const [isModel, setModel] = React.useState(false);
	const [speaker, setSpeaker] = React.useState([false, 0]);
	const [isForm, setForm] = React.useState(false);
	const [isRegistered, setRegistered] = React.useState(false);

	ReactSession.setStoreType('localStorage');
	const token = ReactSession.get('access_token');
	const navigate = useNavigate();
	const [data, setData] = React.useState({});

	React.useEffect(() => {
		axios.get(`https://api.tryst-iitd.org/events?id=${id}`).then((response) => {
			const data = response.data[0];
			data.start = new Date(data.start);
			const addedTime = 5 * 60 * 60 * 1000 + 30 * 60 * 1000;
			data.start = new Date(data.start.getTime());
			data.dateStart = data.start.toShortFormat();
			data.timeStart =
				data.start.toLocaleTimeString('en-IN').slice(0, -6) + ' ' + data.start.toLocaleTimeString('en-IN').slice(-2);
			data.start = data.start.toLocaleString('en-IN');
			data.end = new Date(data.end);
			data.dateEnd = data.end.toShortFormat();
			data.timeEnd =
				data.end.toLocaleTimeString('en-IN').slice(0, -6) + ' ' + data.end.toLocaleTimeString('en-IN').slice(-2);
			data.end = data.end.toLocaleString('en-IN');
			data.contact = JSON.parse(data.contact);

			setData(data);
			setLoading(false);
		});
	}, [id]);

	React.useEffect(() => {
		const eventID = {
			eventId: id,
		};
		if (token) {
			axios
				.post(`https://api.tryst-iitd.org/events/register/check/`, eventID, {
					headers: { Authorization: `Bearer ${token}` },
				})
				.then((response) => {
					setRegistered(response.data.registered);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}, [token, id]);

	const handleRegister = () => {
		if (token) {
			// console.log(data.formLink)
			if (data.formLink !== null && data.formLink !== '' && data.formLink !== undefined) {
				setForm((prev) => !prev);
			} else {
				const eventID = {
					eventId: id,
					data: { name: 'No Data' },
				};
				axios
					.post(`https://api.tryst-iitd.org/events/register/`, eventID, {
						headers: { Authorization: `Bearer ${token}` },
					})
					.then((response) => {
						setRegistered(true);
						alert('You have successfully registered for the event');
					})
					.catch((err) => {
						console.log(err);
					});
			}
		} else {
			alert('Please login to register for the event');
			navigate('/login');
		}
	};

	// const delay = ms => new Promise(res => setTimeout(res, ms));

	const formRef = React.useRef(null);
	// var formProp = {'display':'none'}
	React.useEffect(() => {
		if (isForm && formRef.current) {
			setTimeout(() => {
				formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
			}, 100);
		}
	}, [isForm]);

	if (isLoading) {
		return <div className='loading-page'></div>;
	}
	return (
		<div className='comp-main-main'>
			<Helmet>
				<title>{data.name.toUpperCase()} | Tryst 2023</title>
				<meta name='description' content={data.info} />
			</Helmet>
			{speaker[0] && <Overlay overlay={speaker} setOverlay={setSpeaker} />}
			<div
				onClick={() => setModel((prev) => !prev)}
				className='model-bg'
				style={{ display: isModel ? 'block' : 'none' }}
			>
				<div onClick={() => setModel((prev) => !prev)} className='model-box'>
					<div className='model-header'>
						<div>INFO</div>
						<div onClick={() => setModel((prev) => !prev)}>
							<svg width='28' height='28' viewBox='0 0 28 28' fill='none' xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M13.9996 16.8001L4.19961 26.6001C3.83294 26.9668 3.36628 27.1501 2.79961 27.1501C2.23294 27.1501 1.76628 26.9668 1.39961 26.6001C1.03294 26.2334 0.849609 25.7668 0.849609 25.2001C0.849609 24.6334 1.03294 24.1668 1.39961 23.8001L11.1996 14.0001L1.39961 4.2001C1.03294 3.83343 0.849609 3.36676 0.849609 2.8001C0.849609 2.23343 1.03294 1.76676 1.39961 1.4001C1.76628 1.03343 2.23294 0.850098 2.79961 0.850098C3.36628 0.850098 3.83294 1.03343 4.19961 1.4001L13.9996 11.2001L23.7996 1.4001C24.1663 1.03343 24.6329 0.850098 25.1996 0.850098C25.7663 0.850098 26.2329 1.03343 26.5996 1.4001C26.9663 1.76676 27.1496 2.23343 27.1496 2.8001C27.1496 3.36676 26.9663 3.83343 26.5996 4.2001L16.7996 14.0001L26.5996 23.8001C26.9663 24.1668 27.1496 24.6334 27.1496 25.2001C27.1496 25.7668 26.9663 26.2334 26.5996 26.6001C26.2329 26.9668 25.7663 27.1501 25.1996 27.1501C24.6329 27.1501 24.1663 26.9668 23.7996 26.6001L13.9996 16.8001Z'
									fill='white'
								/>
							</svg>
						</div>
					</div>
					<div>
						{data.rules !== '' ? (
							data.rules
						) : (
							<div>
								No information available <br />
							</div>
						)}
					</div>
				</div>
			</div>
			<div className='competition-main'>
				<div className='competition-main-left'>
					<div className='competition-main-left-img'>
						<img
							src={`https://tryst-bucket.s3.amazonaws.com/${data.poster}`}
							alt='event'
							height={'400px'}
							width={'300px'}
						/>
					</div>
					<div className='competition-main-left-btn'>
						{data.category === 'Competitions' ? (
							<a
								style={{ pointerEvents: data.rules !== '' ? 'auto' : 'none' }}
								href={data.rules}
								target='_blank'
								rel='noreferrer'
								id='myBtn'
							>
								<svg width='16' height='20' viewBox='0 0 16 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M4 16H12V14H4V16ZM4 12H12V10H4V12ZM2 20C1.45 20 0.979333 19.8043 0.588 19.413C0.196 19.021 0 18.55 0 18V2C0 1.45 0.196 0.979 0.588 0.587C0.979333 0.195667 1.45 0 2 0H10L16 6V18C16 18.55 15.8043 19.021 15.413 19.413C15.021 19.8043 14.55 20 14 20H2ZM9 7V2H2V18H14V7H9Z'
										fill='black'
									/>
								</svg>
								<span id='comp-rules'>RULES</span>
							</a>
						) : (
							<button
								onClick={() => {
									setModel((prev) => !prev);
								}}
								id='myBtn'
							>
								<svg width='16' height='20' viewBox='0 0 16 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M4 16H12V14H4V16ZM4 12H12V10H4V12ZM2 20C1.45 20 0.979333 19.8043 0.588 19.413C0.196 19.021 0 18.55 0 18V2C0 1.45 0.196 0.979 0.588 0.587C0.979333 0.195667 1.45 0 2 0H10L16 6V18C16 18.55 15.8043 19.021 15.413 19.413C15.021 19.8043 14.55 20 14 20H2ZM9 7V2H2V18H14V7H9Z'
										fill='black'
									/>
								</svg>
								<span id='comp-rules'>INFO</span>
							</button>
						)}
					</div>
				</div>
				<div className='competition-main-right'>
					<div className='competition-title'>{data.name.toUpperCase()}</div>
					<div className='competition-desc-div'>
						<p className='competition-desc'>{data.info}</p>
					</div>
					<div className='details-images'>
					<div className='competition-details'>
						<div className='competition-detail competition-details-date'>
							<div className='competition-details-icon'>
								<svg width='24' height='28' viewBox='0 0 24 28' fill='none' xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M2.66667 27.3333C1.93333 27.3333 1.30533 27.0724 0.782667 26.5506C0.260889 26.028 0 25.4 0 24.6666V5.99996C0 5.26663 0.260889 4.63907 0.782667 4.11729C1.30533 3.59463 1.93333 3.33329 2.66667 3.33329H4V0.666626H6.66667V3.33329H17.3333V0.666626H20V3.33329H21.3333C22.0667 3.33329 22.6947 3.59463 23.2173 4.11729C23.7391 4.63907 24 5.26663 24 5.99996V24.6666C24 25.4 23.7391 26.028 23.2173 26.5506C22.6947 27.0724 22.0667 27.3333 21.3333 27.3333H2.66667ZM2.66667 24.6666H21.3333V11.3333H2.66667V24.6666ZM2.66667 8.66663H21.3333V5.99996H2.66667V8.66663ZM12 16.6666C11.6222 16.6666 11.3058 16.5386 11.0507 16.2826C10.7947 16.0275 10.6667 15.7111 10.6667 15.3333C10.6667 14.9555 10.7947 14.6386 11.0507 14.3826C11.3058 14.1275 11.6222 14 12 14C12.3778 14 12.6947 14.1275 12.9507 14.3826C13.2058 14.6386 13.3333 14.9555 13.3333 15.3333C13.3333 15.7111 13.2058 16.0275 12.9507 16.2826C12.6947 16.5386 12.3778 16.6666 12 16.6666ZM6.66667 16.6666C6.28889 16.6666 5.972 16.5386 5.716 16.2826C5.46089 16.0275 5.33333 15.7111 5.33333 15.3333C5.33333 14.9555 5.46089 14.6386 5.716 14.3826C5.972 14.1275 6.28889 14 6.66667 14C7.04444 14 7.36133 14.1275 7.61733 14.3826C7.87245 14.6386 8 14.9555 8 15.3333C8 15.7111 7.87245 16.0275 7.61733 16.2826C7.36133 16.5386 7.04444 16.6666 6.66667 16.6666ZM17.3333 16.6666C16.9556 16.6666 16.6391 16.5386 16.384 16.2826C16.128 16.0275 16 15.7111 16 15.3333C16 14.9555 16.128 14.6386 16.384 14.3826C16.6391 14.1275 16.9556 14 17.3333 14C17.7111 14 18.0276 14.1275 18.2827 14.3826C18.5387 14.6386 18.6667 14.9555 18.6667 15.3333C18.6667 15.7111 18.5387 16.0275 18.2827 16.2826C18.0276 16.5386 17.7111 16.6666 17.3333 16.6666ZM12 22C11.6222 22 11.3058 21.872 11.0507 21.616C10.7947 21.3608 10.6667 21.0444 10.6667 20.6666C10.6667 20.2888 10.7947 19.9724 11.0507 19.7173C11.3058 19.4613 11.6222 19.3333 12 19.3333C12.3778 19.3333 12.6947 19.4613 12.9507 19.7173C13.2058 19.9724 13.3333 20.2888 13.3333 20.6666C13.3333 21.0444 13.2058 21.3608 12.9507 21.616C12.6947 21.872 12.3778 22 12 22ZM6.66667 22C6.28889 22 5.972 21.872 5.716 21.616C5.46089 21.3608 5.33333 21.0444 5.33333 20.6666C5.33333 20.2888 5.46089 19.9724 5.716 19.7173C5.972 19.4613 6.28889 19.3333 6.66667 19.3333C7.04444 19.3333 7.36133 19.4613 7.61733 19.7173C7.87245 19.9724 8 20.2888 8 20.6666C8 21.0444 7.87245 21.3608 7.61733 21.616C7.36133 21.872 7.04444 22 6.66667 22ZM17.3333 22C16.9556 22 16.6391 21.872 16.384 21.616C16.128 21.3608 16 21.0444 16 20.6666C16 20.2888 16.128 19.9724 16.384 19.7173C16.6391 19.4613 16.9556 19.3333 17.3333 19.3333C17.7111 19.3333 18.0276 19.4613 18.2827 19.7173C18.5387 19.9724 18.6667 20.2888 18.6667 20.6666C18.6667 21.0444 18.5387 21.3608 18.2827 21.616C18.0276 21.872 17.7111 22 17.3333 22Z'
										fill='#ACEBF6'
									/>
								</svg>
							</div>
							{data.dateStart.split('T')[0]}
						</div>
						{data.location !== '' && (
							<div className='competition-detail competition-details-venue'>
								{' '}
								<div className='competition-details-icon'>
									<svg width='26' height='30' viewBox='0 0 26 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
										<path
											d='M16 11H18.6667V13.6666H16V11ZM18.6667 5.66665H16V8.33331H18.6667V5.66665ZM10.6667 19H13.3333V16.3333H10.6667V19ZM13.3333 5.66665H10.6667V8.33331H13.3333V5.66665ZM10.6667 13.6666H13.3333V11H10.6667V13.6666ZM8 5.66665H5.33333V8.33331H8V5.66665ZM8 11H5.33333V13.6666H8V11ZM15.4 27H13.3333V22.3333H10.6667V27H2.66667V2.99998H21.3333V13.7066C22.28 13.7866 23.1867 14.08 24 14.5066V0.333313H0V29.6666H17.2133C16.6667 28.92 16 28.0133 15.4 27ZM5.33333 24.3333H8V21.6666H5.33333V24.3333ZM8 16.3333H5.33333V19H8V16.3333ZM25.3333 21C25.3333 24.4666 20.6667 29.6666 20.6667 29.6666C20.6667 29.6666 16 24.4666 16 21C16 18.4666 18.1333 16.3333 20.6667 16.3333C23.2 16.3333 25.3333 18.4666 25.3333 21ZM22.2667 21.1333C22.2667 20.3333 21.4667 19.5333 20.6667 19.5333C19.8667 19.5333 19.0667 20.2 19.0667 21.1333C19.0667 21.9333 19.7333 22.7333 20.6667 22.7333C21.6 22.7333 22.4 21.9333 22.2667 21.1333Z'
											fill='#ACEBF6'
										/>
									</svg>
								</div>
								{data.location}
							</div>
						)}
						<div className='competition-detail competition-details-time'>
							{' '}
							<div className='competition-details-icon'>
								<svg width='28' height='28' viewBox='0 0 28 28' fill='none' xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M17.4993 19.3666C17.7438 19.6111 18.0438 19.7333 18.3993 19.7333C18.7549 19.7333 19.066 19.6 19.3327 19.3333C19.5771 19.0888 19.6993 18.7777 19.6993 18.4C19.6993 18.0222 19.5771 17.7111 19.3327 17.4666L15.3327 13.4666V8.63329C15.3327 8.25551 15.2051 7.9444 14.95 7.69996C14.694 7.45551 14.3771 7.33329 13.9993 7.33329C13.6216 7.33329 13.3051 7.46085 13.05 7.71596C12.794 7.97196 12.666 8.28885 12.666 8.66663V13.9666C12.666 14.1444 12.6993 14.3164 12.766 14.4826C12.8327 14.6497 12.9327 14.8 13.066 14.9333L17.4993 19.3666ZM13.9993 27.3333C12.1549 27.3333 10.4216 26.9831 8.79935 26.2826C7.17713 25.5831 5.76602 24.6333 4.56602 23.4333C3.36602 22.2333 2.41624 20.8222 1.71668 19.2C1.01624 17.5777 0.666016 15.8444 0.666016 14C0.666016 12.1555 1.01624 10.4222 1.71668 8.79996C2.41624 7.17774 3.36602 5.76663 4.56602 4.56663C5.76602 3.36663 7.17713 2.4164 8.79935 1.71596C10.4216 1.0164 12.1549 0.666626 13.9993 0.666626C15.8438 0.666626 17.5771 1.0164 19.1993 1.71596C20.8216 2.4164 22.2327 3.36663 23.4327 4.56663C24.6327 5.76663 25.5825 7.17774 26.282 8.79996C26.9825 10.4222 27.3327 12.1555 27.3327 14C27.3327 15.8444 26.9825 17.5777 26.282 19.2C25.5825 20.8222 24.6327 22.2333 23.4327 23.4333C22.2327 24.6333 20.8216 25.5831 19.1993 26.2826C17.5771 26.9831 15.8438 27.3333 13.9993 27.3333ZM13.9993 24.6666C16.9549 24.6666 19.4718 23.628 21.55 21.5506C23.6273 19.4724 24.666 16.9555 24.666 14C24.666 11.0444 23.6273 8.52751 21.55 6.44929C19.4718 4.37196 16.9549 3.33329 13.9993 3.33329C11.0438 3.33329 8.52735 4.37196 6.45002 6.44929C4.37179 8.52751 3.33268 11.0444 3.33268 14C3.33268 16.9555 4.37179 19.4724 6.45002 21.5506C8.52735 23.628 11.0438 24.6666 13.9993 24.6666Z'
										fill='#ACEBF6'
									/>
								</svg>
							</div>
							{data.category === 'Guest Lectures'
								? data.dateStart === data.dateEnd
									? data.timeStart + ' - ' + data.timeEnd
									: data.dateStart + ', ' + data.timeStart + ' - ' + data.dateEnd + ', ' + data.timeEnd
								: data.timeStart}
							{/* {console.log(data.start, data.end)} */}
						</div>
						{data.category !== 'Guest Lectures' && (
							<div className='competition-detail competition-details-time'>
								<span style={{ color: 'rgba(172, 235, 246, 1)' }}>
									Reg-Deadline: <br />{' '}
								</span>{' '}
								{data.dateEnd + ', ' + data.timeEnd}
								{/* {console.log(data.start, data.end)} */}
							</div>
						)}
					</div>
					{data.id === 152 && <div className='event-spon'>
						<img src={pathsetter}></img>
					</div>}
					</div>
					<div className='competition-register'>
						<button disabled={isRegistered} className='competition-register-button' onClick={handleRegister}>
							{isForm ? (
								<span>
									Form Below{' '}
									<svg width='20' height='28' viewBox='0 0 24 34' fill='none' xmlns='http://www.w3.org/2000/svg'>
										<path
											d='M2.66667 27.3333C1.93333 27.3333 1.30533 27.0724 0.782667 26.5506C0.260889 26.028 0 25.4 0 24.6666V5.99996C0 5.26663 0.260889 4.63907 0.782667 4.11729C1.30533 3.59463 1.93333 3.33329 2.66667 3.33329H4V0.666626H6.66667V3.33329H17.3333V0.666626H20V3.33329H21.3333C22.0667 3.33329 22.6947 3.59463 23.2173 4.11729C23.7391 4.63907 24 5.26663 24 5.99996V24.6666C24 25.4 23.7391 26.028 23.2173 26.5506C22.6947 27.0724 22.0667 27.3333 21.3333 27.3333H2.66667ZM2.66667 24.6666H21.3333V11.3333H2.66667V24.6666ZM2.66667 8.66663H21.3333V5.99996H2.66667V8.66663ZM12 16.6666C11.6222 16.6666 11.3058 16.5386 11.0507 16.2826C10.7947 16.0275 10.6667 15.7111 10.6667 15.3333C10.6667 14.9555 10.7947 14.6386 11.0507 14.3826C11.3058 14.1275 11.6222 14 12 14C12.3778 14 12.6947 14.1275 12.9507 14.3826C13.2058 14.6386 13.3333 14.9555 13.3333 15.3333C13.3333 15.7111 13.2058 16.0275 12.9507 16.2826C12.6947 16.5386 12.3778 16.6666 12 16.6666ZM6.66667 16.6666C6.28889 16.6666 5.972 16.5386 5.716 16.2826C5.46089 16.0275 5.33333 15.7111 5.33333 15.3333C5.33333 14.9555 5.46089 14.6386 5.716 14.3826C5.972 14.1275 6.28889 14 6.66667 14C7.04444 14 7.36133 14.1275 7.61733 14.3826C7.87245 14.6386 8 14.9555 8 15.3333C8 15.7111 7.87245 16.0275 7.61733 16.2826C7.36133 16.5386 7.04444 16.6666 6.66667 16.6666ZM17.3333 16.6666C16.9556 16.6666 16.6391 16.5386 16.384 16.2826C16.128 16.0275 16 15.7111 16 15.3333C16 14.9555 16.128 14.6386 16.384 14.3826C16.6391 14.1275 16.9556 14 17.3333 14C17.7111 14 18.0276 14.1275 18.2827 14.3826C18.5387 14.6386 18.6667 14.9555 18.6667 15.3333C18.6667 15.7111 18.5387 16.0275 18.2827 16.2826C18.0276 16.5386 17.7111 16.6666 17.3333 16.6666ZM12 22C11.6222 22 11.3058 21.872 11.0507 21.616C10.7947 21.3608 10.6667 21.0444 10.6667 20.6666C10.6667 20.2888 10.7947 19.9724 11.0507 19.7173C11.3058 19.4613 11.6222 19.3333 12 19.3333C12.3778 19.3333 12.6947 19.4613 12.9507 19.7173C13.2058 19.9724 13.3333 20.2888 13.3333 20.6666C13.3333 21.0444 13.2058 21.3608 12.9507 21.616C12.6947 21.872 12.3778 22 12 22ZM6.66667 22C6.28889 22 5.972 21.872 5.716 21.616C5.46089 21.3608 5.33333 21.0444 5.33333 20.6666C5.33333 20.2888 5.46089 19.9724 5.716 19.7173C5.972 19.4613 6.28889 19.3333 6.66667 19.3333C7.04444 19.3333 7.36133 19.4613 7.61733 19.7173C7.87245 19.9724 8 20.2888 8 20.6666C8 21.0444 7.87245 21.3608 7.61733 21.616C7.36133 21.872 7.04444 22 6.66667 22ZM17.3333 22C16.9556 22 16.6391 21.872 16.384 21.616C16.128 21.3608 16 21.0444 16 20.6666C16 20.2888 16.128 19.9724 16.384 19.7173C16.6391 19.4613 16.9556 19.3333 17.3333 19.3333C17.7111 19.3333 18.0276 19.4613 18.2827 19.7173C18.5387 19.9724 18.6667 20.2888 18.6667 20.6666C18.6667 21.0444 18.5387 21.3608 18.2827 21.616C18.0276 21.872 17.7111 22 17.3333 22Z'
											fill='#ACEBF6'
										/>
									</svg>
								</span>
							) : isRegistered ? (
								'Already Registered!'
							) : (
								'Register'
							)}
						</button>

						{Object.keys(data.contact)[0] !== '' && (
							<div className='competition-contact'>
								<div className='competition-contact-title'>contact</div>
								{Object.keys(data.contact)[0] && (
									<div className='competition-contact-contact'>
										<div className='competition-contact-name'>
											{Object.keys(data.contact)[0].charAt(0).toUpperCase() + Object.keys(data.contact)[0].slice(1)}
										</div>
										<div className='competition-contact-number'>
											<a href={'tel:'}>{data.contact[Object.keys(data.contact)[0]]}</a>
										</div>
									</div>
								)}
								{Object.keys(data.contact)[1] && (
									<div className='competition-contact-contact'>
										<div className='competition-contact-name'>
											{Object.keys(data.contact)[1].charAt(0).toUpperCase() + Object.keys(data.contact)[1].slice(1)}
										</div>
										<div className='competition-contact-number'>
											<a href={'tel:'}>{data.contact[Object.keys(data.contact)[1]]}</a>
										</div>
									</div>
								)}
							</div>
						)}
					</div>
				</div>
			</div>

			<div className='event-img-div-1'>
				<img src={eventwaves} alt='tryst-dots-design' className='event-img-1' />
			</div>
			<div ref={formRef} style={{ display: isForm ? 'block' : 'none' }} className='single-event-form'>
				<EventReg link={data.formLink} event_ID={id} />
			</div>
		</div>
	);
}
export default Competition;
