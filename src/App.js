import React, { useState, useEffect } from "react";
import SignUp from "./components/Form/Form";
import axios from "axios";
import "./App.css";
import ContactForm from "./components/forms/ContactForm";
import DataScienceForm from "./components/forms/DataScienceForm";
import DesignerForm from "./components/forms/DesignerForm";
import EngineerForm from "./components/forms/EngineerForm";
import InfoIntakeForm from "./components/forms/InfoIntakeForm";

import MentorForm from './components/forms/MentorForm'
import ChoosePath from "./components/forms/ChoosePath";
// import CoryForm from "./components/CoryTestForm/CoryForm"
// import MySelect, { choices, colorStyles } from "./components/forms/SelectTests/select-re";
// import ResearchForm from "./components/CoryTestForm/Codepen/ResearchForm";


axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

const App = () => {
	const [currentForm, setCurrentForm] = useState({
		role: "",
		first_name: "",
		last_name: "",
		email: "",
		pronouns: "",
		linkedin: "",
		github: "",
		portfolio: "",
		data_sci_skillset: "",
		design_techs: "",
		design_skillset: "",
		engineer_skillset: "",
		engineer_techs: "",
		why_join: "",
	});

	const [forms, setForms] = useState([]);

	useEffect(() => {
		if (forms === undefined) {
			refreshList();
		}
	}, [forms]);

	function refreshList() {
		axios.get("/api/forms/").then(
			(res) => setForms(res.data)
			// console.log(res.data)
		);
	}

	function addItem(newItem) {
		axios
			.post("/api/forms/", newItem)
			.then(refreshList())
			.catch((err) => console.log(err));
	}

	function deleteItem(form) {
		axios
			.delete(`/api/forms/${form.id}/`)
			.then(refreshList())
			.catch((err) => console.log(err));
	}

	return (
		<>
			<div className="App">
				{/* <ChoosePath currentForm={currentForm} setCurrentForm={setCurrentForm} /> */}
				{/* <MentorForm currentForm={currentForm} setCurrentForm={setCurrentForm} /> */}
				{/* <EngineerForm
					currentForm={currentForm}
					setCurrentForm={setCurrentForm} */}
				/>
				<DataScienceForm
					currentForm={currentForm}
					setCurrentForm={setCurrentForm}
				/>
				{/* <DesignerForm /> */}
				{/* <InfoIntakeForm />  */}
				{/* <ContactForm /> */}
				{/* <MySelect styles={colorStyles} options={choices} /> */}
				{/* <CoryForm /> */}
				{/* <ResearchForm /> */}
			</div>
			{/* <div className="App">
			<button onClick={refreshList}>Refresh</button>
			<SignUp addItem={addItem} /> */}
			{/* { this.state.forms ? */}

			{/* <ul className="forms">
				{forms.map((form, idx) => (
					<div key={idx}>
						<li>
							{form.first_name} <span>{form.id}</span>
						</li>
						<button key={idx} onClick={() => deleteItem(form)}>
							X
						</button>
					</div>
				))}
			</ul>
			{/* :
				<div></div>} */}
			{/* </div> */}
		</>
	);
};

export default App;
