import React, { useState } from "react";
import "./signup.css";
import axios, { formToJSON } from "axios";
import { BeatLoader } from "react-spinners";
import Select from "react-select";
import { DOMAIN } from "../../domain";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Cookies from "js-cookie";
import userLoggedOutNavigator from "../../pages/routes/userLoggedOutNavigator";

const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Delhi/U.T./Other",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Orissa",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
];

const Signup = () => {
    const navigate = useNavigate();
    React.useEffect(userLoggedOutNavigator(useNavigate()));
    const [collegechosen, setCollegeChosen] = useState('');
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        college: "",
        college_name: "",
        instagram_ID: "",
        linkedIn_Link: "",
        photo: "",
        referral_id: "",
        category: "",
    });
    const [formissubmitted, setFormissubmitted] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [category, setCategory] = useState("");
    const [usercollege, setUserCollege] = useState("");
    useEffect(() => {
        const code = new URLSearchParams(window.location.search).get("code");
        const csrfToken = Cookies.get("csrftoken");
        if (code) {
            axios.post(
                `${DOMAIN}iitdlogin/`,
                {
                    "code": code
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRFToken': csrfToken
                    }
                }
            )
                .then((response) => {
                    console.log(response);
                    const data = response.data.userdetails;
                    if (data) {
                        setCategory(data['category']);
                        setEmail(data['email']);
                        setName(data['name']);
                        setUserCollege('IIT Delhi');
                    }
                    if (response.data.tokens) {
                        localStorage.setItem("access_token", response.data.tokens.access);
                        localStorage.setItem("refresh_token", response.data.tokens.refresh);
                        localStorage.removeItem("response");
                        navigate("/dashboard");
                    }
                }).catch((error) => {
                    console.log(error);
                    alert('Invalid Credentials! Please try again.');
                    navigate("/login");
                });
        } else {
            setUserCollege('');
        }
    }, [navigate]);

    useEffect(() => {
        if (usercollege) {
            setFormData((prevFormData) => ({
                ...prevFormData,
                name: name,
                email: email,
                category: category,
            }));
            console.log(formData);
        }
    }, [name, email, category, usercollege]);

    useEffect(() => {
        const loginData = JSON.parse(localStorage.getItem("response"));
        const referral_id = localStorage.getItem("referral_id");
        if (loginData) {
            setFormData((prevFormData) => ({
                ...prevFormData,
                name: loginData.data.details.name,
                email: loginData.data.details.email,
                photo: loginData.data.details.photo,
                referral_id: referral_id,
            }));
        }
    }, []);
    const handlesubmit = (e) => {
        setFormissubmitted(true);
        axios
            .post(`${DOMAIN}profile/`, formData)
            .then((response) => {
                if (response.status === 201) {
                    localStorage.setItem("access_token", response.data.tokens.access);
                    localStorage.setItem("refresh_token", response.data.tokens.refresh);
                    localStorage.removeItem("response");
                    navigate("/dashboard");
                }
            })
            .catch((err) => {
                setFormissubmitted(false);
                alert(err.response.data.error);
            });
        e.preventDefault();
    };

    const handleChange = (e) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [e.target.name]: e.target.value,
        }));
    };
    const [loading, setLoading] = useState(false);
    const [loading2, setLoading2] = useState(false);
    const handleCityChange = (city) => {
        if (city !== "") {
            axios.get(`${DOMAIN}college/?city=${city}`).then((response) => {
                setColleges(response.data);
            });
        }
    };
    const handleStateChange = (state) => {
        if (state !== "") {
            axios.get(`${DOMAIN}city/?state=${state}`).then((response) => {
                setCities(response.data);
            });
        }
    };
    useEffect(() => {
        console.log(formData);
    }, [formData]);

    const [cities, setCities] = useState([]);
    const [colleges, setColleges] = useState([]);
    const styles = {
        option: (provided, state) => ({
            ...provided,
            FontFamily: "Rajdhani",
            fontWeight: "normal",
            color: "white",
            backgroundColor: "#00E0FF1A",
            borderRadius: "0px",
        }),
        singleValue: (provided, state) => ({
            ...provided,
            FontFamily: "Rajdhani",
            color: "white",
            borderRadius: "0px",
        }),
        container: (provided, state) =>
            window.innerWidth > 768
                ? {
                    ...provided,
                    FontFamily: "Rajdhani",
                    fontWeight: "normal",
                    backgroundColor: "#00E0FF1A",
                    borderLeft: "2px solid skyblue",
                    borderRadius: "0px",
                    width: "90%",
                    paddingLeft: "4px",
                    paddingTop: "5px",
                    paddingBottom: "5px",
                }
                : {
                    ...provided,
                    FontFamily: "Rajdhani",
                    backgroundColor: "#00E0FF1A",
                    borderLeft: "2px solid skyblue",
                    borderRadius: "0px",
                    width: "100%",
                    paddingLeft: "4px",
                    paddingTop: "5px",
                    paddingBottom: "5px",
                },
        control: (provided, state) => ({
            ...provided,
            FontFamily: "Rajdhani",
            backgroundColor: "rgba(0, 224, 255, 0)",
            border: "none",
            color: "red",
            borderRadius: "0px",
        }),
        placeholder: (provided, state) => ({
            ...provided,
            FontFamily: "Rajdhani",
            border: "none",
            color: "white",
            borderRadius: "0px",
        }),
        menu: (provided, state) => ({
            ...provided,
            border: "none",
            FontFamily: "Rajdhani",
            backgroundColor: "rgba(0, 224, 255, 0)",
            borderRadius: "0px",
        }),
        input: (provided, state) => ({
            ...provided,
            color: "white",
        }),
    };
    const handleKeyDown = (e) => {
        if (
            !(e.key >= "0" && e.key <= "9") &&
            e.key !== "Backspace" &&
            e.key !== "Delete" &&
            e.key !== "ArrowLeft" &&
            e.key !== "ArrowRight" &&
            e.key !== "Home" &&
            e.key !== "End"
        ) {
            e.preventDefault();
        }
    };

    return (
        <>
            <div>
                <div className="signup-container">
                    <form className="signup-form" onSubmit={handlesubmit}>
                        <div className="signup-head">USER SIGNUP</div>
                        <div className="signup-input">
                            <div className="signup-input-container">
                                <div className="signup-input-head">Your Name*</div>
                                <input
                                    className="signup-input-field"
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    readOnly={formData.name ? true : false}
                                />
                            </div>
                            <div className="signup-input-container">
                                <div className="signup-input-head">Phone Number*</div>
                                <input
                                    className="signup-input-field"
                                    type="numeric"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    maxLength={10}
                                    minLength={10}
                                    onKeyDown={handleKeyDown}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="signup-input-container">
                                <div className="signup-input-head">Email ID*</div>
                                <input
                                    className="signup-input-field"
                                    type="text"
                                    name="email"
                                    value={formData.email}
                                    readOnly={formData.email ? true : false}
                                />
                            </div>
                            {!usercollege ? (
                                <>
                                    <div className="signup-input-container">
                                        <div className="signup-input-head">College State*</div>
                                        <Select
                                            className="signup-input-field"
                                            name="state"
                                            id="state"
                                            placeholder="Choose State"
                                            onChange={(selectedOption) => {
                                                setLoading(true);
                                                handleStateChange(selectedOption.value);
                                                handleChange({
                                                    target: { name: "state", value: selectedOption.value },
                                                });
                                            }}
                                            required
                                            options={states.map((state) => ({
                                                value: state,
                                                label: state,
                                            }))}
                                            styles={styles}
                                        />
                                    </div>
                                    <div className="signup-input-container">
                                        <div className="signup-input-head">
                                            College City*{" "}
                                            {cities.length !== 0 ? (
                                                ""
                                            ) : (
                                                <div className="looader">
                                                    <BeatLoader
                                                        color={"#93ffd8"}
                                                        loading={loading}
                                                        size={12}
                                                        aria-label="Loading Spinner"
                                                        data-testid="loader"
                                                    />
                                                </div>
                                            )}
                                        </div>
                                        <Select
                                            className="signup-input-field"
                                            name="city"
                                            id="city"
                                            styles={styles}
                                            onChange={(e) => {
                                                setLoading2(true);
                                                handleCityChange(e.value);
                                                handleChange({
                                                    target: { name: "city", value: e.value },
                                                });
                                            }}
                                            required
                                            options={cities.map((state) => ({
                                                value: state,
                                                label: state,
                                            }))}
                                        >
                                            <option value="">Choose City </option>
                                            {cities.length !== 0 ? (
                                                cities.map((city, inx) => {
                                                    return (
                                                        <option key={inx} value={city}>
                                                            {city}{" "}
                                                        </option>
                                                    );
                                                })
                                            ) : (
                                                <option value="">Select state first</option>
                                            )}
                                        </Select>
                                    </div>
                                </>) : (<></>)}
                            <div className="signup-input-container">
                                <div className="signup-input-head">
                                    College Name*{" "}
                                    {colleges.length !== 0 ? (
                                        ""
                                    ) : (
                                        <div className="looader">
                                            <BeatLoader
                                                color={"#93ffd8"}
                                                loading={loading2}
                                                size={"100%"}
                                                aria-label="Loading Spinner"
                                                data-testid="loader"
                                            />
                                        </div>
                                    )}
                                </div>
                                <Select
                                    className="signup-input-field"
                                    classNamePrefix="college"
                                    name="college"
                                    id="college"
                                    value={usercollege ? { label: usercollege, value: usercollege } : (formData.college_ID)}
                                    placeholder="Choose College"
                                    onChange={(e) => {
                                        console.log(e);
                                        setCollegeChosen(e.label);
                                        handleChange({
                                            target: { name: "college", value: e.value },
                                        });
                                    }}
                                    required
                                    styles={styles}
                                    options={
                                        colleges.length !== 0
                                            ? colleges.map((college, inx) => ({
                                                label: college.name,
                                                value: college.college_ID,
                                            }))
                                            : [{ label: "Select city first", value: "" }]
                                    }
                                ></Select>
                            </div>
                            {formData.college && colleges.find(item => item.college_ID === formData.college).name === "Other" ?
                                <div className="signup-input-container">
                                    <div className="signup-input-head">Specify College*</div>
                                    <input
                                        className="signup-input-field"
                                        type="text"
                                        name="college_name"
                                        value={formData.college_name}
                                        onChange={handleChange}
                                        placeholder="College Name"
                                        required
                                    />
                                </div>
                                : <></>
                            }
                            <div className="signup-input-container">
                                <div className="signup-input-head">Instagram Handle</div>
                                <input
                                    className={`signup-input-field signup-input-field-instagram ${formData.instagram_ID !== '' ? 'signup-input-field-non-empty' : ''}`}
                                    type="text"
                                    name="instagram_ID"
                                    value={formData.instagram_ID}
                                    onChange={handleChange}
                                    placeholder=""
                                />
                            </div>
                            <div className="signup-input-container">
                                <div className="signup-input-head">LinkedIn Handle</div>
                                <input
                                    className={`signup-input-field signup-input-field-linkedin ${formData.linkedIn_Link !== '' ? 'signup-input-field-non-empty' : ''}`}
                                    type="url"
                                    name="linkedIn_Link"
                                    value={formData.linkedIn_Link}
                                    onChange={handleChange}
                                    placeholder=""

                                />
                            </div>
                            <div className="signup-input-container">
                                <div className="signup-input-head signup-input-head-referral">CA Referral ID</div>
                                <input
                                    className="signup-input-field signup-input-field-referral"
                                    type="text"
                                    name="referral_id"
                                    value={formData.referral_id}
                                    onChange={handleChange}
                                    placeholder="TRCXXXXX"
                                />
                            </div>
                        </div>
                        <div className="signup-submit">
                            <button type="submit" disabled={formissubmitted}>
                                {formissubmitted ? "Please Wait" : "Sign Up"}
                            </button>
                        </div>
                    </form>
                </div >
            </div >
        </>
    );
};

export default Signup;