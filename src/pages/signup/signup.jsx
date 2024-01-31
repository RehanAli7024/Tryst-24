import React, { useState } from 'react';
import './signup.css';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import axios from 'axios';
import { ReactSession } from 'react-client-session';
// import userLoggedOutNavigator from '../../routes/userLoggedOutNavigator';
import Select from 'react-select';
import BeatLoader from 'react-spinners/BeatLoader';
import * as yup from 'yup';
import dotsup from '../../assets/signup1.svg';
import dotsdown from '../../assets/signup2.svg';
import { Helmet } from 'react-helmet';


const signUpSchema = yup.object({
    name: yup.string().min(2).max(25).required('please enter your name'),
    email: yup.string().email().required('please enter your email'),
    phone: yup
        .string()
        .matches(/^[0-9]+$/, 'Must be only digits')
        .min(10)
        .max(10)
        .required('please enter your phone number'),
    // password: yup.string().min(8).required('please enter your password'),
    // confirm: yup
    // 	.string()
    // 	.required('enter password again')
    // 	.oneOf([yup.ref('password'), null], 'password must match'),
    state: yup.string(),
    city: yup.string(),
});

const states = [
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Delhi/U.T./Other',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Orissa',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar Pradesh',
    'Uttarakhand',
    'West Bengal',
];

const initialValues = {
    token: '',
    name: '',
    phone: '',
    email: '',
    state: '',
    city: '',
    college: '',
};

function Signup() {
    // React.useEffect(userLoggedOutNavigator(useNavigate()));
    ReactSession.setStoreType('localStorage');
    const navigate = useNavigate();
    const google_token = ReactSession.get('google_token');
    if (google_token === null) {
        navigate('/login', { replace: true });
    }
    const name = ReactSession.get('name');
    const email = ReactSession.get('email');
    // console.log(google_token);
    // console.log(name);
    // console.log(email);

    // console.log(urlParams);

    const [data, setData] = useState({ ...initialValues, token: google_token, name: name, email: email });
    // console.log(data);

    let [loading, setLoading] = useState(false);
    let [loading2, setLoading2] = useState(false);
    const [cities, setCities] = useState([]);
    const [colleges, setColleges] = useState([]);
    const [disable, setDisable] = React.useState(false);


    const { values, errors, touched, handleBlur, handleSubmit, handleChange, setFieldValue } = useFormik({
        initialValues: data,
        validationSchema: signUpSchema,

        onSubmit: (values) => {
            setData(values);
            // console.log(data);
            setDisable(true);
            // console.log(values);
            // ReactSession.remove('google_token');
            // ReactSession.remove('name');
            // ReactSession.remove('email');
            // axios
            //     .post('https://api.tryst-iitd.org/users/', values)
            //     .then((response) => {
            //         //    console.log("entering into database")
            //         // console.log(response.data)
            //         ReactSession.set('access_token', response.data.token.access);
            //         ReactSession.set('refresh_token', response.data.token.refresh);
            //         navigate('/profile', { replace: true })
            //     })
            //     .catch((error) => {
            //         console.log(error);
            //         alert(error.response.data.error + '. Please try again.');
            //         navigate('/login', { replace: true })
            //         setDisable(false);
            //     });
        },
    });

    const handleStateChange = (state) => {
        if (state !== '') {
            axios.get(`https://api.tryst-iitd.org/users/city?state=${state}`).then((response) => {
                setCities(response.data);
            });
        }
    };

    const handleCityChange = (city) => {
        if (city !== '') {
            axios.get(`https://api.tryst-iitd.org/users/college?city=${city}`).then((response) => {
                setColleges(response.data);
            });
        }
    };

    const styles = {
        option: (provided, state) => ({
            ...provided,
            fontWeight: 'normal',
            color: 'white',
            backgroundColor: 'rgba(255, 255, 255, 0.12)',
            borderRadius: '0px',
        }),
        singleValue: (provided, state) => ({
            ...provided,
            color: 'white',
            borderRadius: '0px',
        }),
        container: (provided, state) => ({
            ...provided,
            backgroundColor: 'rgba(255, 255, 255, 0.12)',
            borderLeft: '2px solid rgba(172, 235, 246, 1)',
            borderRadius: '0px',
            width: '96%',
            paddingLeft: '4px',
            paddingTop: '5px',
            paddingBottom: '5px',
        }),
        control: (provided, state) => ({
            ...provided,
            backgroundColor: 'rgba(255, 255, 255, 0.12)',
            border: 'none',
            color: 'white',
            borderRadius: '0px',
        }),
        placeholder: (provided, state) => ({
            ...provided,
            border: 'none',
            color: 'white',
            borderRadius: '0px',
        }),
        menu: (provided, state) => ({
            ...provided,
            border: 'none',
            backgroundColor: '#2c495a',
            borderRadius: '0px',
        }),
        input: (provided, state) => ({
            ...provided,
            color: 'white',
        }),
    };

    return (
        <>
            <Helmet>
                <title>Signup | Tryst 2023</title>
            </Helmet>
            <div className='signup-img-div-1'>
                <img src={dotsup} alt='tryst-dots-design' className='signup-img-1' />
            </div>
            <div className='container red-bor init px-md-5 signup-div'>
                <form onSubmit={handleSubmit}>
                    <div className='row blue-bor'>
                        <h1 className='my-4 text-center back'>USER SIGNUP</h1>
                        <div className='col-md-6 question red-bor'>
                            <p className='head-text'>Your Name*</p>
                            <input
                                type='text'
                                name='name'
                                autoComplete='off'
                                value={name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                disabled={true}
                            />
                            {errors.name && touched.name ? <p className='error'>{errors.name}</p> : null}
                        </div>
                        <div className='col-md-6 question red-bor'>
                            <p className='head-text'>Phone Number*</p>
                            <input
                                type='tel'
                                name='phone'
                                autoComplete='off'
                                value={values.phone}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.phone && touched.phone ? <p className='error'>{errors.phone}</p> : null}
                        </div>
                        <div className='col-md-6 question red-bor'>
                            <p className='head-text'>Email ID*</p>
                            <input
                                type='email'
                                name='email'
                                autoComplete='off'
                                value={email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                disabled={true}
                            />
                            {errors.email && touched.email ? <p className='error'>{errors.email}</p> : null}
                        </div>
                        <div className='col-md-6 question red-bor'>
                            <p className='head-text'>College/School State*</p>
                            <select
                                name='state'
                                id='state'
                                value={values.state}
                                onBlur={handleBlur}
                                required
                                onChange={(e) => {
                                    setLoading(true);
                                    handleStateChange(e.target.value);
                                    handleChange(e);
                                }}
                            >
                                <option value=''>Choose State</option>
                                {states.map((state, inx) => {
                                    return (
                                        <option key={inx} value={state}>
                                            {state}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>

                        <div className='col-md-6 question red-bor'>
                            <div className='loader-parent'>
                                <div className='head-text2'>
                                    <p>College/School City*</p>
                                </div>
                                {cities.length !== 0 ? (
                                    ''
                                ) : (
                                    <div className='looader'>
                                        <BeatLoader
                                            color={'rgba(172, 235, 246, 1)'}
                                            loading={loading}
                                            size={12}
                                            aria-label='Loading Spinner'
                                            data-testid='loader'
                                        />
                                    </div>
                                )}
                            </div>
                            <select
                                name='city'
                                id='city'
                                value={values.city}
                                onBlur={handleBlur}
                                required
                                onChange={(e) => {
                                    setLoading2(true);
                                    handleCityChange(e.target.value);
                                    handleChange(e);
                                }}
                            >
                                <option value=''>Choose City </option>
                                {cities.length !== 0 ? (
                                    cities.map((city, inx) => {
                                        return (
                                            <option key={inx} value={city}>
                                                {city}{' '}
                                            </option>
                                        );
                                    })
                                ) : (
                                    <option value=''>Select state first</option>
                                )}
                            </select>
                        </div>

                        <div className='col-md-6 question red-bor'>
                            <div className='loader-parent'>
                                <div className='head-text2'>
                                    <p>College Name(Select others for school)*</p>
                                </div>
                                {colleges.length !== 0 ? (
                                    ''
                                ) : (
                                    <div className='looader'>
                                        <BeatLoader
                                            color={'rgba(172, 235, 246, 1)'}
                                            loading={loading2}
                                            size={12}
                                            aria-label='Loading Spinner'
                                            data-testid='loader'
                                        />
                                    </div>
                                )}
                            </div>
                            <Select
                                classNamePrefix='college'
                                name='college'
                                id='college'
                                placeholder='Choose College'
                                onChange={(e) => {
                                    // console.log(e);
                                    setFieldValue('college', e.value);
                                }}
                                onBlur={handleBlur}
                                styles={styles}
                                options={
                                    colleges.length !== 0
                                        ? colleges.map((college, inx) => ({
                                            label: college.name,
                                            value: college.collegeId,
                                        }))
                                        : [{ label: 'Select city first', value: '' }]
                                }
                                required
                            ></Select>
                        </div>

                        {/* <div className='col-md-6 question red-bor'>
							<p className='head-text'>Password*</p>
							<input
								type='password'
								name='password'
								value={values.password}
								onChange={handleChange}
								onBlur={handleBlur}
								autoComplete='off'
								placeholder='Enter your 8-digit Password'
							/>
							{errors.password && touched.password ? <p className='error'>{errors.password}</p> : null}
						</div>
						<div className='col-md-6 question red-bor'>
							<p className='head-text'>Confirm Password*</p>
							<input
								type='password'
								name='confirm'
								value={values.confirm}
								onChange={handleChange}
								onBlur={handleBlur}
								autoComplete='off'
								placeholder='Re-enter your 8-digit Password'
							/>
							{errors.confirm && touched.confirm ? <p className='error'>{errors.confirm}</p> : null}
						</div> */}

                        <div className='text-center'>
                            <button type='submit' className='my-4' disabled={disable}>
                                <b>Sign Up</b>
                            </button>
                        </div>

                        {/* <p className='resend text-center'>
							Already Registered?{' '}
							<span className='to-login'>
								<Link to='/login'>Login to Your Account</Link>
							</span>
						</p> */}
                    </div>
                </form>
            </div>
            <div className='signup-img-div-2'>
                <img src={dotsdown} alt='tryst-dots-design' className='signup-img-1' />
            </div>
        </>
    );
}
export default Signup;
