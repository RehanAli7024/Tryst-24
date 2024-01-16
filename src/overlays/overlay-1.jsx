import React from 'react';
import './events-over.css';
import './overlays.css';
import { useDropzone } from 'react-dropzone';

import { useFormik } from 'formik';
import axios from 'axios';
import { ReactSession } from 'react-client-session';

function CompetitionsOverlay({ overlay, setOverlay, setCount }) {
	ReactSession.setStoreType('localStorage');
	const token = ReactSession.get('admin_access_token');
	const [contact, setContact] = React.useState([
		['', ''],
		['', ''],
	]);
	const [poster, setPoster] = React.useState({});
	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		accept: 'image/*',
		onDrop: (file) => {
			setPoster(
				Object.assign(file[0], {
					preview: URL.createObjectURL(file[0]),
				})
			);
		},
	});

	const handleContactname1 = (val) => {
		setContact((prev) => [[val, prev[0][1]], prev[1]]);
	};
	const handleContactnum1 = (val) => {
		setContact((prev) => [[prev[0][0], val], prev[1]]);
	};
	const handleContactname2 = (val) => {
		setContact((prev) => [prev[0], [val, prev[1][1]]]);
	};
	const handleContactnum2 = (val) => {
		setContact((prev) => [prev[0], [prev[1][0], val]]);
	};
	const data = {
		category: overlay[1],
		end: '',
		formLink: '',
		info: '',
		location: '',
		name: '',
		rules: '',
		start: '',
		club: '',
	};
	const { values, handleBlur, handleSubmit, handleChange } = useFormik({
		initialValues: data,
		onSubmit: (values) => {
			const formdata = new FormData();
			const contacts = {
				[contact[0][0]]: Number(contact[0][1]),
				[contact[1][0]]: Number(contact[1][1]),
			};
			formdata.append('contact', JSON.stringify(contacts));
			formdata.append('poster', poster);
			formdata.append('category', values.category);
			formdata.append('end', values.end);
			formdata.append('formLink', values.formLink);
			formdata.append('info', values.info);
			formdata.append('location', values.location);
			formdata.append('name', values.name);
			formdata.append('rules', values.rules);
			formdata.append('start', values.start);
			formdata.append('club', values.club);
			// console.log(values);
			axios
				.post('https://api.tryst-iitd.org/admin/events/', formdata, {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				})
				.then((res) => {
					setOverlay((prev) => [!prev[0], '']);
					setCount((prev) => prev + 1);
				})
				.catch((err) => console.log(err));
		},
	});
	return (
		<div className={`overlay-main ${overlay[0] ? 'block-disp' : 'none-disp'}`}>
			<form onSubmit={handleSubmit}>
				<div className='event-over'>
					<div className='event-over-head'>
						<div className='event-over-head-title'>New {overlay[1]}</div>
						<div className='sub-over-head-22' onClick={() => setOverlay((prev) => [!prev, ''])}>
							<i className='fa-solid fa-xmark'></i>
						</div>
					</div>
					<div className='event-over-main'>
						<div className='drag-drop-parent'>
							<div className='drag-drop-1'>
								<div className='title'>Poster :</div>
								<div className='drag-input dashed-border' {...getRootProps()}>
									<input {...getInputProps()} />
									{isDragActive ? <div className='either'>drop poster here</div> : <div>select poster</div>}
									<div className='image-preview-parent either'>
										{' '}
										<img src={poster.preview} className='image-preview' alt='image-preview' />
									</div>
								</div>
							</div>
							<div className='drag-drop-2'>
								<div className='title'>Title :</div>
								<input
									type='text'
									name='name'
									autoComplete='off'
									value={values.name}
									onChange={handleChange}
									onBlur={handleBlur}
									placeholder={`${overlay[1]} name`}
								></input>

								<div className='title'>Description :</div>
								<textarea
									name='info'
									autoComplete='off'
									value={values.info}
									onChange={handleChange}
									onBlur={handleBlur}
									rows='10'
									placeholder={`${overlay[1]} description`}
								></textarea>
							</div>
						</div>
						<div className='event-over-timeinputs'>
							<div>
								<div className='title'>
									Start time :<span className='small-title'>(Required)</span>
								</div>
								<input
									type='datetime-local'
									name='start'
									autoComplete='off'
									value={values.start}
									onChange={handleChange}
									onBlur={handleBlur}
								></input>
							</div>
							<div>
								<div className='title'>
									End time :<span className='small-title'>(Required)</span>
								</div>
								<input
									type='datetime-local'
									name='end'
									autoComplete='off'
									value={values.end}
									onChange={handleChange}
									onBlur={handleBlur}
								></input>
							</div>
						</div>
						<div className='title'>CLUB :</div>
						<select
							name='club'
							value={values.club}
							onChange={handleChange}
							onBlur={handleBlur}
							style={{ display: 'block' }}
						>
							<option value='' label='Select a club (leave empty if not applicable)' />
							<option value='FlagshipEvents' label='Flagship Events' />
							<option value='ComputerScience' label='Computer Science' />
							<option value='ChemistryBiotechnology' label='Chemistry and Biotechnology' />
							<option value='Economics' label='Economics' />
							<option value='ManagementConsulting' label='Management and Consulting' />
							<option value='MechanicalAutomobile' label='Mechanical and Automobile' />
							<option value='PhysicsStructuralDesign' label='Physics and Structural Design' />
							<option value='Robotics' label='Robotics' />
							<option value='Strategy' label='Strategy' />
						</select>
						<div className='title'>Location :</div>
						<input
							type='text'
							name='location'
							autoComplete='off'
							value={values.location}
							onChange={handleChange}
							onBlur={handleBlur}
							placeholder='Eg: LH111'
						></input>
						<div className='event-over-contact'>
							<div className='title'>
								<div>Contact Person(s) Details :</div>
							</div>
							<div className='event-over-contact-inputs'>
								<div className='event-over-contact-input'>
									<input
										type='text'
										name={contact[0][0]}
										autoComplete='off'
										value={contact[0][0]}
										onChange={(e) => handleContactname1(e.target.value)}
										placeholder='Name of Contact person'
									></input>
								</div>
								<div className='event-over-contact-input'>
									<input
										type='tel'
										name={contact[0][1]}
										autoComplete='off'
										value={contact[0][1]}
										onChange={(e) => handleContactnum1(e.target.value)}
										placeholder='Mobile number'
									></input>
								</div>
							</div>
							<div className='event-over-contact-inputs'>
								<div className='event-over-contact-input'>
									<input
										type='text'
										name={contact[1][0]}
										autoComplete='off'
										value={contact[1][0]}
										onChange={(e) => handleContactname2(e.target.value)}
										placeholder='Name of Contact person'
									></input>
								</div>
								<div className='event-over-contact-input'>
									<input
										type='tel'
										name={contact[1][1]}
										autoComplete='off'
										value={contact[1][1]}
										onChange={(e) => handleContactnum2(e.target.value)}
										placeholder='Mobile number'
									></input>
								</div>
							</div>
						</div>
						<div className='title'>Registration form link :</div>
						<input
							type='text'
							name='formLink'
							autoComplete='off'
							value={values.formLink}
							onChange={handleChange}
							onBlur={handleBlur}
							placeholder='Link to registration form'
						></input>
						<div className='title'>Rules :</div>
						<input
							type='text'
							name='rules'
							autoComplete='off'
							value={values.rules}
							onChange={handleChange}
							onBlur={handleBlur}
							placeholder='Link to rulebook'
						></input>
					</div>
					<div className='event-over-submit-p'>
						<button type='submit' className='event-over-submit'>
							Done
						</button>
					</div>
				</div>
			</form>
		</div>
	);
}

export default CompetitionsOverlay;
