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
		why_join: "",
		data_sci_skillset: [],
		design_techs: [],
		design_skillset: [],
		engineer_skillset: [],
		engineer_techs: [],
	});

	const [forms, setForms] = useState([]);


	const finalDataSciSkillset = [];
	currentForm.data_sci_skillset.map((skill) => {
		finalDataSciSkillset.push(skill.value);
	});

	const finalDesignTechs = [];
	currentForm.design_techs.map((tech) => {
		finalDesignTechs.push(tech.value);
	});

	const finalDesignSkills = [];
	currentForm.design_skillset.map((skill) => {
		finalDesignSkills.push(skill.value);
	});

	const finalEngineerSkills = [];
	currentForm.engineer_skillset.map((skill) => {
		finalEngineerSkills.push(skill.value);
	});

	const finalEngineerTechs = [];
	currentForm.engineer_techs.map((tech) => {
		finalEngineerTechs.push(tech.value);
	});

	const newForm = {
		first_name: currentForm.first_name,
		last_name: currentForm.last_name,
		email: currentForm.email,
		linkedin: currentForm.linkedin,
		github: currentForm.github,
		portfolio: currentForm.portfolio,
		why_join: currentForm.why_join,

		role: currentForm.role.value,
		pronouns: currentForm.pronouns.value,
		
		data_sci_skillset: finalDataSciSkillset,
		design_techs: finalDesignTechs,
		design_skillset: finalDesignSkills,
		engineer_skillset: finalEngineerSkills,
		engineer_techs: finalEngineerTechs,
	};

	useEffect(() => {
		if (forms === undefined) {
			refreshList();
		}
		console.log(newForm)
	}, [forms, currentForm]);

	function refreshList() {
		axios.get("/api/forms/").then(
			(res) => setForms(res.data)
			// console.log(res.data)
		);
	}

	function addItem(newForm) {
		axios
			.post("/api/forms/", newForm)
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
				{/* <ChoosePath newForm={newForm} currentForm={currentForm} setCurrentForm={setCurrentForm} />
				<MentorForm currentForm={currentForm} setCurrentForm={setCurrentForm} />
				<EngineerForm
					currentForm={currentForm}
					setCurrentForm={setCurrentForm}
				/>
				<DataScienceForm
					currentForm={currentForm}
					setCurrentForm={setCurrentForm}
				/>
				<DesignerForm
					currentForm={currentForm}
					setCurrentForm={setCurrentForm}
				/>
				<InfoIntakeForm
					currentForm={currentForm}
					setCurrentForm={setCurrentForm}
				/>
				<ContactForm
					currentForm={currentForm}
					setCurrentForm={setCurrentForm}
					addItem={addItem}
					newForm={newForm}
				/> */}
				{/* <MySelect styles={colorStyles} options={choices} /> */}
				{/* <CoryForm /> */}
				{/* <ResearchForm /> */}
			{/* </div> */}
{/* <div className="App"> */}
			<button onClick={refreshList}>Refresh</button>
			<SignUp addItem={addItem} /> 
			{ forms ?

			<ul className="forms">
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
		 :
				<div></div>} 
			</div>
		</>
	);
};

export default App;
