import React from 'react';
import './events.css';
import './filter.css';
import './form.css';
import tune from './../../images/tune.svg';
import EventsTop from './EventsTop';
import Title from '../../components/title/title';
import EventCard from './components/EventCard';
import Competition from './competitions/One_Events';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

function Events({setOverlay}) {

	const getDate = (a) => {
		a = new Date(a);
		a = a.toLocaleString();
		return Number(a.slice(3, 5) + a.slice(0, 2) + a.slice(12, 14) + a.slice(15, 17));
	};
	const Sort = (list) => {
		let arr2 = list;
		arr2.sort((a, b) => {
			if (a.poster.includes('events') && !b.poster.includes('events')) {
				return -1;
			} else if (!a.poster.includes('events') && b.poster.includes('events')) {
				return 1;
			} else {
				return 0;
			}
		});

		arr2.sort((a, b) => {
			if (getDate(a.start) < getDate(b.start)) {
				return -1;
			} else if (getDate(a.start) > getDate(b.start)) {
				return 1;
			} else {
				return 0;
			}
		});
		return arr2;
	};
	const filterList = [
		{ name: 'Computer Science', value: 'ComputerScience' },
		{ name: 'Chemistry and Biotechnology', value: 'ChemistryBiotechnology' },
		{ name: 'Economics', value: 'Economics' },
		{ name: 'Management and Consulting', value: 'ManagementConsulting' },
		{ name: 'Mechanical and Automobile', value: 'MechanicalAutomobile' },
		{ name: 'Physics and Structural Design', value: 'PhysicsStructuralDesign' },
		{ name: 'Robotics', value: 'Robotics' },
		{ name: 'Strategy', value: 'Strategy' },
	];
	const [filterTags, setFilterTags] = React.useState([]);
	const filterHandler = (event) => {
		if (event.target.checked) {
			setFilterTags([...filterTags, event.target.value]);
		} else {
			setFilterTags(filterTags.filter((filterTag) => filterTag !== event.target.value));
		}
	};
	const [tab, setTab] = React.useState('competitions');
	const [search, setSearch] = React.useState('');
	const [oneEvent, setOneEvent] = React.useState([false, 0]); // to show one event [visible, id]
	const [data, setData] = React.useState([[], [], []]);
	const [finished, setFinished] = React.useState([[], [], []]);
	const [isLoading, setLoading] = React.useState(true);
	const { innerWidth: width } = window;
	const history = useNavigate();

	const d = new Date();
	const now = d;
	React.useEffect(() => {
		const queryParams = new URLSearchParams(window.location.search);
		// console.log(queryParams.get('id'));
		if (queryParams.get('id') !== null) {
			// console.log(queryParams.get('id'));
			setOneEvent([true, queryParams.get('id')]);
		}
		let temp = [[], [], []];
		let tempFinished = [[], [], []];
		// axios
		// 	.get(`https://api.tryst-iitd.org/events?category=competitions`)
		// 	.then((response) => {
		// 		for (let i = 0; i < response.data.length; i++) {
		// 			const dateA = new Date(response.data[i].start);
		// 			const bool = dateA.getTime() >= now.getTime();
		// 			if (bool) {
		// 				temp[0].push(response.data[i]);
		// 			} else {
		// 				tempFinished[0].push(response.data[i]);
		// 			}
		// 		}
		// 	})
		// 	.then(() => {
		// 		axios.get(`https://api.tryst-iitd.org/events?category=workshop`).then((response) => {
		// 			for (let i = 0; i < response.data.length; i++) {
		// 				const dateA = new Date(response.data[i].start);
		// 				const bool = dateA.getTime() >= now.getTime();
		// 				if (bool) {
		// 					temp[1].push(response.data[i]);
		// 				} else {
		// 					tempFinished[1].push(response.data[i]);
		// 				}
		// 			}
		// 		});
		// 	})
		// 	.then(() => {
		// 		axios
		// 			.get(`https://api.tryst-iitd.org/events?category=Guest%20Lectures`)
		// 			.then((response) => {
		// 				for (let i = 0; i < response.data.length; i++) {
		// 					const dateA = new Date(response.data[i].start);
		// 					const bool = dateA.getTime() >= now.getTime();
		// 					if (bool) {
		// 						temp[2].push(response.data[i]);
		// 					} else {
		// 						tempFinished[2].push(response.data[i]);
		// 					}
		// 				}
		// 				setData(temp);
		// 				setFinished(tempFinished);
		// 			})
		// 			.catch((err) => {
		// 				console.log(err);
		// 			});
		// 	});
		setLoading(false);
	}, []);

	const allData = data[0].concat(data[1], data[2], finished[0], finished[1], finished[2]);

	let location = useLocation();

	React.useEffect(() => {
		if (location.pathname === '/events') {
			setOneEvent([false, 0]);
		}
		if (location.search !== '') {
			setOneEvent([true, Number(location.search.slice(4))]);
			// console.log(Number(location.pathname.slice(4)));
		}
	}, [location]);

	const handleEvent = (id) => {
		setOneEvent([true, id]);
		history(`/events/?id=${id}`);
	};

	if (isLoading) {
		return (
			<div>
				<EventsTop tab={tab} setTab={setTab} filterList={filterList} filterTags={filterTags} oneEvent={oneEvent} />
				<div style={{ marginBottom: '100px' }}></div>
			</div>
		);
	}
	return (
		<div>
			<Title title='EVENTS' />
			<div className='events-manager-parent'>
				{/* {!oneEvent[0] && tab === 'competitions' && ( */}
					{/* <div className='filter-parent-parent'>
						<div className='filter-btn1'>
							<div>Filters ({filterTags.length})</div>
							<div>
								<img src={tune} alt='tune' />
							</div>
						</div>
						<div className='filter-parent'>
							<div className='one-ckeck'>
								<div className='check-check'>
									<input type='checkbox' onChange={filterHandler} value='FlagshipEvents' id='FlagshipEvents' />
								</div>
								<div className='check-name'>Flagship Events</div>
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
						</div>
					</div> */}
				{/* )} */}

				<div className='events-manager'>
					<EventsTop
						tab={tab}
						setTab={setTab}
						setOneEvent={setOneEvent}
						oneEvent={oneEvent}
						setSearch={setSearch}
						search={search}
						filterHandler={filterHandler}
						filterList={filterList}
						filterTags={filterTags}
					/>
					{oneEvent[0] || (
						<div>
							{tab === 'competitions' && search === '' && (
								<div className='competitions-top'>
									<div className='competitions-cards'>
										{Sort(
											data[0].filter((val) => {
												if (filterTags.length > 0) {
													if (filterTags.includes(val.club)) return val;
												} else {
													return val;
												}
											})
										)
											.map((item, idx) => {
												{/* console.log(idx) */ }
												return (
													<div onClick={() => handleEvent(item.id)} key={idx}>
														<EventCard card={item} grey={false} tab={tab} oneEvent={oneEvent} />
													</div>
												);
											})}
										{
											Sort(
												finished[0].filter((val) => {
													if (filterTags.length > 0) {
														if (filterTags.includes(val.club)) return val;
													} else {
														return val;
													}
												})
											).map((item, idx) => {
												return (
													<div onClick={() => handleEvent(item.id)} key={idx}>
														<EventCard card={item} grey={true} tab={tab} oneEvent={oneEvent} />
													</div>
												);
											})}
									</div>
								</div>
							)}
							{tab === 'workshops' && search === '' && (
								<div
									className='competitions-cards'
									style={
										!oneEvent[0] && tab !== 'competitions' && window.innerWidth > 768 ? { padding: '0 10vw' } : null
									}
								>
									{Sort(data[1]).map((item, idx) => {
										return (
											<div onClick={() => handleEvent(item.id)} key={idx}>
												<EventCard card={item} grey={false} tab={tab} oneEvent={oneEvent} />
											</div>
										);
									})}
									{finished[1].map((item, idx) => {
										return (
											<div onClick={() => handleEvent(item.id)} key={idx}>
												<EventCard card={item} grey={true} tab={tab} oneEvent={oneEvent} />
											</div>
										);
									})}
								</div>
							)}
							{tab === 'Guest%20Lectures' && search === '' && (
								<div className='competitions-top'>
									<div
										className='competitions-cards'
										style={
											!oneEvent[0] && tab !== 'competitions' && window.innerWidth > 768 ? { padding: '0 10vw' } : null
										}
									>
										{Sort(data[2]).map((item, idx) => {
											return (
												<div onClick={() => handleEvent(item.id)} key={idx}>
													<EventCard card={item} grey={false} tab={tab} oneEvent={oneEvent} />
												</div>
											);
										})}
										{finished[2].map((item, idx) => {
											return (
												<div onClick={() => handleEvent(item.id)} key={idx}>
													<EventCard card={item} grey={true} tab={tab} oneEvent={oneEvent} />
												</div>
											);
										})}
									</div>
								</div>
							)}

							<div onClick={() => setOverlay((prev) => [!prev[0], category])} className='new-event-button'>
				<i className='fa-regular fa-plus'></i> ADD NEW
			</div>
						</div>
					)}

					<div className='competitions-cards'>
						{search !== '' &&
							Sort(allData)
								.filter((val) => {
									if (val.name.toLowerCase().includes(search.toLowerCase())) {
										return val;
									}
								})
								.map((item, idx) => {
									const dateA = new Date(item.start);
									const bool = dateA.getTime() < now.getTime();
									return (
										<div
											onClick={() => {
												setOneEvent([true, item.id]);
												setSearch('');
											}}
											key={idx}
										><div onClick={() => handleEvent(item.id)} key={idx}>
												<EventCard card={item} tab={tab} grey={bool} oneEvent={oneEvent} />
											</div>
										</div>
									);
								})}
					</div>

					{oneEvent[0] && search === '' && <Competition id={oneEvent[1]} type={'EVENT'} />}

					<div style={{ marginBottom: '100px' }}></div>
				</div>
			</div>
		</div>
	);
}
export default Events;
