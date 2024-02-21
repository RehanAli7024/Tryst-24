import React from 'react';
import './Registration_form.css';
import Accordion from './accordion';
import { useFormik } from 'formik';
import axios from 'axios';
import { ReactSession } from 'react-client-session';
//import {useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

/*import acm1 from './../../images/accomodation/amit.png';
import acm2 from './../../images/acm1.webp';
import acm3 from './../../images/acm2.webp';*/


const Registrationform = ()=>{


    const [tab, setTab] = React.useState(1);
	const [subTab, setSubTab] = React.useState(false);
	const [data, setData] = React.useState({ check_in: 4, check_out: 5, men: 1, women: 1, members: [], agree: false });

	const [overlay, setOverlay] = React.useState([false, {}]);
	const images = [acm1, acm2, acm3];
	ReactSession.setStoreType('localStorage');
	const token = ReactSession.get('access_token');
	const [userData, setUserData] = React.useState({});



    const handleIdChange = (e, idx) => {
		data.members[idx] = { ...data.members[idx], userId: e };
		setData({ ...data, member: data.members });
	};
	const handleNameChange = (e, idx) => {
		data.members[idx] = { ...data.members[idx], name: e };
		setData({ ...data, member: data.members });
	};
	const handleAadharChange = (e, idx) => {
		data.members[idx] = { ...data.members[idx], aadhar: e };
		setData({ ...data, member: data.members });
	};


    const { values, errors, handleChange } = useFormik({
		initialValues: data,
		validate: (values) => {
			const errors = { members: [] };
			for (let i = 0; i < values.men + values.women; i++) {
				errors.members.push({ userId: '', name: '', aadhar: '' });
			}
			if (values.check_in >= values.check_out) {
				errors.check_out = 'Check-out date should be after check-in date';
			}
			if (values.men + values.women === 0) {
				errors.men = 'At least one person should be registered';
			}
			if (values.members.length > 0) {
				values.members.forEach((member, idx) => {
					if (!member.userId) {
						errors.members[idx].userId = 'Required';
					}
					if (!member.name) {
						errors.members[idx].name = 'Required';
					}
					if (!member.aadhar) {
						errors.members[idx].aadhar = 'Required';
					}
				});
			}
			return errors;
		},
	});

    const handleSubmit2 = (e) => {
		if (data.agree) {
			const formdata = new FormData();
			let tempMembers = {};
			for (let i = 0; i < data.members.length; i++) {
				tempMembers[i] = data.members[i];
			}
			formdata.append("checkin", `2023-03-0${values.check_in}`)
			formdata.append("checkout", `2023-03-0${values.check_out}`)
			formdata.append("men", values.men)
			formdata.append("women", values.women)
			formdata.append('memberDetails', JSON.stringify(tempMembers))
			const amount = 769*(values.men+values.women)*(values.check_out-values.check_in)
			setOverlay([true, {formdata: formdata, amount: amount}])
			e.preventDefault();
		} else {
			e.preventDefault();
			alert('please check the agreement');
		}
	};


        return (<>
           <div className='accom-reg' style={{ display: tab === 1 ? 'block' : 'none' }}>
					<div className='accom-reg-title'>REGISTRATION FORM</div>
					<div style={{ display: !subTab ? 'block' : 'none' }}>
						<div className='accm-note'>
							*Charges: <span className='accm-note-1'>&#8377; 769/- per head per day</span>
							<br />
							*Limited availability
							{/* <br />
							<span style={{color:'red'}}>Currently under Maintenance </span> */}
						</div>
						<form
							className='accom-reg-form'
							onSubmit={(e) => {
								e.preventDefault();
								setSubTab(true);
								let membersList = [];
								for (let i = 0; i < values.men + values.women; i++) {
									membersList.push({ userId: '', name: '', aadhar: '' });
								}
								setData({ ...data, members: membersList });
							}}
						>
							<div className='accom-reg-field' style={{ minWidth: '50%' }}>
								<div className='accom-reg-label'>CHECK IN*</div>
								<div className='accom-reg-dates'>
									{[3, 4, 5, 6].map((idx) => {
										return (
											<div
												className={'accom-reg-date'.concat(values.check_in === idx ? ' accom-reg-date-active' : '')}
												onClick={() => {
													handleChange({ target: { name: 'check_in', value: idx } });
												}}
												key={idx}
											>
												{idx}
											</div>
										);
									})}
								</div>
							</div>
							<div className='accom-reg-field' style={{ minWidth: '50%' }}>
								<div className='accom-reg-label'>CHECK OUT*</div>
								<div className='accom-reg-dates'>
									{[4, 5, 6, 7].map((idx) => {
										return (
											<div
												className={'accom-reg-date'.concat(values.check_out === idx ? ' accom-reg-date-active' : '')}
												onClick={() => {
													handleChange({ target: { name: 'check_out', value: idx } });
												}}
												key={idx}
											>
												{idx}
											</div>
										);
									})}
								</div>
								{errors.check_out ? <p className='error'>{errors.check_out}</p> : null}
							</div>
							<div className='accom-reg-field' style={{ minWidth: '100%' }}>
								<div className='accom-reg-label'>No. of People*</div>
								<div className='accom-reg-people'>
									{['men', 'women'].map((g) => {
										return (
											<div className='accom-reg-people-field' key={g}>
												<div className='accom-reg-people-label'>{g.slice(0, 1).toUpperCase().concat(g.slice(1))}</div>
												<div className='accom-reg-people-input'>
													<button
														type='button'
														onClick={() => handleChange({ target: { name: g, value: Math.max(0, values[g] - 1) } })}
													>
														<div>-</div>
													</button>
													<input type='text' value={values[g]} readOnly />
													<button
														type='button'
														onClick={() => handleChange({ target: { name: g, value: Math.min(10, values[g] + 1) } })}
													>
														<div>+</div>
													</button>
												</div>
											</div>
										);
									})}
								</div>
								{errors.men ? <p className='error text-center'>{errors.men}</p> : null}
							</div>
							<div className='total-amount'>
								Total = &#8377;{' '}
								{values.check_out - values.check_in > 0
									? 769 * (values.men + values.women) * (values.check_out - values.check_in)
									: 0}
							</div>
							<button
								type='submit'
								className='accom-reg-next'
								disabled
							>
								closed
							</button>
						</form>
						<div className='accm-mail-policy'>
							<div className='reach-title-2'>
								<b>Accommodation policy:</b>
							</div>
							<div className='tabbed'>
								<div className='reach-title-2'>Accommodation charges:</div>
								<div className='tabbed'>
									Accommodation charges are &#8377;769 per candidate per day. Period of stay is during the fest i.e 4th
									March to 6th March. Facilities include 3 meals per day and accommodation will be provided in the
									visitors room or common room of hostels. The guests will also receive access to all the events and
									pronites of Tryst’23. Guests can also purchase meals from night canteens or food outlets scattered
									throughout the campus.
								</div>
								<div className='reach-title-2'>Timing: </div>
								<div className='tabbed'>
									Check in: check in starts at 9 AM on the check in date <br />
									Check out: Any time before 9 AM or on the checkout date
								</div>
								<div className='reach-title-2'>Cancellation Policy:</div>
								<div className='tabbed'>
									Confirmed Accommodation can not be canceled.
									<br />
									For more enquiry contact to hospitality team from “CONTACT US” tab
								</div>
							</div>
						</div>
					</div>
					<form className='accom-reg-form' onSubmit={handleSubmit2} style={{ display: subTab ? 'block' : 'none' }}>
						<em>NOTE: TRYST UID is generated after successfully registering on TRYST'23 Website</em>
						<div className='accom-reg-field accom-reg-field' style={{ minWidth: '100%' }}>
							<div className='accom-reg-members'>
								{data.members.map((member, idx) => {
									return (
										<div className='accom-reg-member' key={idx}>
											<div className='accom-reg-label'>MEMBER {idx + 1}</div>
											<div className='accom-reg-member-field'>
												<div className='accom-reg-member-label'>TRYST UID*</div>
												<input
													type='text'
													name={`members[${idx}].uid`}
													value={member.userId}
													onChange={(e) => {
														handleIdChange(e.target.value.trim(), idx);
													}}
													required
													autoComplete='off'
													maxLength="10"
													minLength="10"
												/>
											</div>
											<div className='accom-reg-member-field'>
												<div className='accom-reg-member-label'>Full Name (As on Aadhar Card)*</div>
												<input
													type='text'
													name={`members[${idx}].name`}
													value={member.name}
													onChange={(e) => {
														handleNameChange(e.target.value, idx);
													}}
													required
													autoComplete='off'
												/>
											</div>
											<div className='accom-reg-member-field'>
												<div className='accom-reg-member-label'>Aadhar Card No.*</div>
												<input
													type='text'
													name={`members[${idx}].aadhar`}
													value={member.aadhar}
													onChange={(e) => {
														handleAadharChange(e.target.value.trim(), idx);
													}}
													required
													autoComplete='off'
													maxLength="12"
													minLength="12"
												/>
											</div>
											<hr />
										</div>
									);
								})}
								<div className='agree-1'>
									<div className='agree'>
										<div className='agree-check'>
											<input
												type='checkbox'
												checked={data.agree}
												onChange={() => setData({ ...data, agree: !data.agree })}
											/>
										</div>
										<div className='agree-text'>
											I certify that the above entered information is true to the best of my knowledge and belief and I
											understand that I subject myself to disciplinary action in the event that the above facts are
											found to be falsified which includes immediate dismissal from the accommodation facilities.
										</div>
									</div>
									<button type='submit' className='accom-reg-next'>
										NEXT
									</button>
								</div>
							</div>
						</div>
					</form>
				</div>

        </>);
}


export default Registrationform