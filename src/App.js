import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import ChoosePath from "./components/forms/ChoosePath";
import Confirmation from "./pages/Confirmation";
import coopLogo from "./components/forms/imgs/coopLogo.svg";
import DesignerRouter from "./pages/DesignerRouter";
import MentorRouter from "./pages/MentorRouter.jsx";
import EngineerRouter from "./pages/EngineerRouter";
import DataScientistRouter from "./pages/DataScientistRouter";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

const App = () => {
	const [formComplete, setFormComplete] = useState(false);
	const [currentForm, setCurrentForm] = useState({
		role: "",
		pronouns: "",
		first_name: "",
		last_name: "",
		email: "",
		linkedin: "",
		github: "",
		portfolio: "",
		bootcamps: "",
		avail_dates: "",
		why_join: [],
		help_with: [],
		data_sci_skillset: [],
		design_techs: [],
		design_skillset: [],
		engineer_skillset: [],
		engineer_techs: [],
	});

	const finalWhyJoin = [];
	currentForm.why_join.map((why) => {
		finalWhyJoin.push(why.value);
	})

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

	const finalHelpWith = [];
	currentForm.help_with.map((help) => {
		finalHelpWith.push(help.value);
	});

	const newForm = {
		first_name: currentForm.first_name,
		last_name: currentForm.last_name,
		email: currentForm.email,
		linkedin: currentForm.linkedin,
		github: currentForm.github,
		portfolio: currentForm.portfolio,

		avail_dates: currentForm.avail_dates.value,
		bootcamps: currentForm.bootcamps.value,
		role: currentForm.role.value,
		pronouns: currentForm.pronouns.value,

		why_join: finalWhyJoin,
		help_with: finalHelpWith,
		data_sci_skillset: finalDataSciSkillset,
		design_techs: finalDesignTechs,
		design_skillset: finalDesignSkills,
		engineer_skillset: finalEngineerSkills,
		engineer_techs: finalEngineerTechs,
	};

	// TODO: This hook updates you of what is going to the backend each time the form is updated. It does not need to go into production.
	useEffect(() => {
		console.log("newForm", newForm);
	}, [newForm]);

	const addItem = (newForm) => {
		axios.post("/api/forms/", newForm).catch((err) => console.log(err));
	};

	const submitForm = () => {
		addItem(newForm);
	};

	// TODO: This function is currently not used in production
	// function deleteItem(form) {
	// 	axios
	// 		.delete(`/api/forms/${form.id}/`)
	// 		.catch((err) => console.log(err));
	// }

	return (

			<div className="App">
				{/* <a href="http://localhost:3000"> */}
				<a href="http://applicant-form.herokuapp.com">
					<img alt="theCoop logo" src={coopLogo} />
				</a>
				{formComplete === false ? (
					<>
						{newForm.role === undefined ? (
							<ChoosePath
								newForm={newForm}
								currentForm={currentForm}
								setCurrentForm={setCurrentForm}
							/>
						) : (
							<div></div>
						)}

						<MentorRouter
							currentForm={currentForm}
							setCurrentForm={setCurrentForm}
							newForm={newForm}
							setFormComplete={setFormComplete}
							submitForm={submitForm}
						/>

						<DesignerRouter
							currentForm={currentForm}
							setCurrentForm={setCurrentForm}
							newForm={newForm}
							setFormComplete={setFormComplete}
						/>

						<EngineerRouter
							currentForm={currentForm}
							setCurrentForm={setCurrentForm}
							newForm={newForm}
							setFormComplete={setFormComplete}
						/>

						<DataScientistRouter
							currentForm={currentForm}
							setCurrentForm={setCurrentForm}
							newForm={newForm}
							setFormComplete={setFormComplete}
						/>
					</>
				) : (
					<Confirmation
						setFormComplete={setFormComplete}
						setCurrentForm={setCurrentForm}
						currentForm={currentForm}
						submitForm={submitForm}
					/>
				)}
			</div>
	);
};

export default App;
