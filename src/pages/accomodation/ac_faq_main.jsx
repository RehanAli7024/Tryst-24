import React, { useState } from "react";
import Accordion from "./accordion";
import "./ac_faq.css";
const faqs = [
  {
		ques: "What is the Cancellation policy?",
		ans: "Confirmed Accommodation can not be canceled once done.",
    index: "01",
	},
	{
		"ques": "What Mode of payments can we use?",
		"ans": "Any mode you can use",
    index: "02",
	},

	{
		"ques": "What to do in case of payment failure?",
		"ans": "Contact the Hospitality team by using the “CONTACT US” tab on Tryst website.",
    index: "03",
	},
	{
		"ques": "Will we get accommodation if we arrive before 28th march?",
		"ans": "No accommodation will be provided before 28th march",
    index: "04",
	},
	{
		"ques": "Type of meals (veg or non veg) provided?",
		"ans": "No food is provided with the booking. You need to purchase your own food on arrival",
    index: "05",
	},
	{
		"ques": "Do we get any food facilities at outside accommodation places?",
		"ans": "Yes, Food outlets and restaurants are available in the IIT Delhi campus both Veg and Non- veg.",
    index: "06",
	},
	{
		"ques": "What documents should be carried?",
		"ans": "Any valid Govt photo ID (Aadhaar card) ** Print out of Email confirmation ** Valid College ID for participants",
    index: "07",
	},
	{
		"ques": "Is a college id card mandatory?",
		"ans": "Yes, college ID is mandatory to be carried by the participants.",
    index: "08",
	},
	{
		"ques": "What is the procedure for availing accommodation?",
		"ans": "Go to Tryst IIT Delhi web page \nUnder Accommodation tab click on REGISTER \nComplete the form by filling the details \nComplete the Payment procedure \nOn successful payment confirmation, email will be sent to registered email-ID \nSave the mail for hassle free process",
    index: "09",
	},
	{
		"ques": "Where should I report ?",
		"ans": "The guests will receive information from the team of Tryst’24 about the hostel in which they will be accommodated. The guests are then required to go to the respective hostels and report to a member of the team of Tryst’24.",
    index: "10",
	},
	{
		"ques": "Can I enter the IIT-Delhi campus anytime?",
		"ans": "The check in and checkout time are given in the accommodation policy section of this webpage. During your stay, please restrict movement outside the campus before midnight as the gates will be closed at 11:59 pm. Also, please keep your confirmation mail and id card at hand as you will be asked to show them on return to the campus.",
    index: "11",
	},
	{
		"ques": "Is there a medical care facility in the campus/will it be free for outsiders?",
		"ans": "A primary medical kit will be provided for basic health care. There is also a hospital and a pharmacy in the college which can be availed if required.",
    index: "12",
	},
	{
		"ques": "What is the type of accommodation/type of rooms?",
		"ans": "The guests will be required to stay in visitor rooms or common rooms of the hostels allotted. Further details are available in the accommodation policy section.",
    index: "13",
	},
	{
		"ques": "Will there be separate accommodation for boys and girls?",
		"ans": "Yes. Girls will be accommodate in the girls hostels and boys will be accommodated in boys hostels",
    index: "14",
	},
	{
		"ques": "When will we get confirmation for successful registration of accommodation?",
		"ans": "If there is an availability of accommodation you will receive a confirmation on your registered email id within 24 hrs. ** Accommodation will be based on a first come first serve basis.",
    index: "15",
	},
	{
		"ques": "Will Pronites passes be provided ?",
		"ans": "On successful confirmation of accommodation, pronites passes will be provided.",
    index: "16",
	},
];
const FAQ_main = () => {
  return (
    <div id='faqs' className='col-12 red_bor'>
						{faqs.map((data) => {
							return <Accordion value={data.ques} ans={data.ans} index = {data.index}/>;
						})}
		</div>
  );
};

export default FAQ_main;
