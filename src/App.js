import React, { useState, useEffect } from "react";
import SignUp from "./components/Form/Form";
import axios from "axios";
import "./App.css";
import ChoosePath from "./components/forms/ChoosePath";
import Confirmation from "./pages/Confirmation";
import coopLogo from "./components/forms/imgs/coopLogo.svg";
import DesignerRouter from "./pages/DesignerRouter";
import MentorRouter from "./pages/MentorRouter.jsx";
import EngineerRouter from "./pages/EngineerRouter"
import DataScientistRouter from "./pages/DataScientistRouter";

// import CoryForm from "./components/CoryTestForm/CoryForm"
// import MySelect, { choices, colorStyles } from "./components/forms/SelectTests/select-re";
// import ResearchForm from "./components/CoryTestForm/Codepen/ResearchForm";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

const App = () => {
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
		why_join: "",
		help_with: [],
		data_sci_skillset: [],
		design_techs: [],
		design_skillset: [],
		engineer_skillset: [],
		engineer_techs: [],
	});
	const [currentPage, setCurrentPage] = useState(1);

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
		why_join: currentForm.why_join,

		bootcamps: currentForm.bootcamps.value,
		role: currentForm.role.value,
		pronouns: currentForm.pronouns.value,

		help_with: finalHelpWith,
		data_sci_skillset: finalDataSciSkillset,
		design_techs: finalDesignTechs,
		design_skillset: finalDesignSkills,
		engineer_skillset: finalEngineerSkills,
		engineer_techs: finalEngineerTechs,
	};

	useEffect(() => {
		console.log("newForm", newForm);
	}, [newForm]);

	function addItem(newForm) {
		axios
			.post("/api/forms/", newForm)
			.catch((err) => console.log(err));
	}

// This function is currently not used in production

	// function deleteItem(form) {
	// 	axios
	// 		.delete(`/api/forms/${form.id}/`)
	// 		.catch((err) => console.log(err));
	// }

	return (
		<div className="App">
			<a href="http://localhost:3000">
				<img src={coopLogo} />
			</a>
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
				addItem={addItem}
				newForm={newForm}
			/>

			<DesignerRouter
				currentForm={currentForm}
				setCurrentForm={setCurrentForm}
				addItem={addItem}
				newForm={newForm}
			/>

			<EngineerRouter
				currentForm={currentForm}
				setCurrentForm={setCurrentForm}
				addItem={addItem}
				newForm={newForm}
			/>

			<DataScientistRouter
				currentForm={currentForm}
				setCurrentForm={setCurrentForm}
				addItem={addItem}
				newForm={newForm}
			/>
		</div>
	);
};

export default App;
