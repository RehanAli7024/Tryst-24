import React from 'react';
import Title from '../../components/title/title';
import GradientLeft from '../../components/gradients/gradient-left';
import GradientRight from '../../components/gradients/gradient-right';
import Overlay from './overlay';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import './speakers.css';
import { Helmet } from 'react-helmet';

function Speakers() {
	const location = useLocation();
	const [overlay, setOverlay] = React.useState(location.state ? [true, location.state.id] : [false, 0]);
	const [loading, setLoading] = React.useState(true);
	const [data, setData] = React.useState({});
	React.useEffect(() => {
		axios.get(`https://api.tryst-iitd.org/events/speaker/`).then((response) => {
			setData(response.data);
			setLoading(false);
		});
	}, []);
	if (loading) {
		return (
			<div>
				<Helmet>
					<title>Speakers | Tryst 2023</title>
					<meta
						name='description'
						content="Don't miss out on the amazing speakers at tryst! From industry experts to motivational speakers, their talks will leave you feeling inspired and empowered. You'll gain valuable insights and fresh perspectives that can help shape your future. Join us for an engaging and thought-provoking discussion that will challenge you to think differently and take action towards achieving your goals. This is an event you won't forget, so come and be part of an unforgettable experience at tryst'23!"
					/>
				</Helmet>
				<GradientLeft />
				<GradientRight />
				<Title title='SPEAKERS' />
			</div>
		);
	}
	return (
		<div className='speakers-page'>
			{overlay[0] && <Overlay overlay={overlay} setOverlay={setOverlay} />}

			{/* <GradientLeft /> */}

			{/* <GradientRight /> */}
			<Title title='SPEAKERS' />
			<div className='teams-parent'>
				<div className='teams-container teams-container2'>
					<div className='teams-row teams-row2'>
						{data.slice().map((data, idx) => {
							return (
								<div key={idx} onClick={() => setOverlay((prev) => [!prev[0], data.id])} className='one-card'>
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
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}
export default Speakers;
