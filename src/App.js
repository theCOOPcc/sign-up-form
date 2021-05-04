import React, { useState, useEffect } from "react";
import SignUp from "./components/Form/Form";
import axios from "axios";
import "./App.css";
// import ContactForm from "./components/forms/ContactForm";
// import DataScienceForm from "./components/forms/DataScienceForm";
import DesignerForm from "./components/forms/DesignerForm";
// import EngineerForm from "./components/forms/EngineerForm";
// import InfoIntakeForm from "./components/forms/InfoIntakeForm";

// import MentorForm from './components/forms/MentorForm'
// import ChoosePath from "./components/forms/ChoosePath";
import MySelect, { choices, colorStyles } from "./components/forms/SelectTests/select-re";


axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

const App = () => {
	const [forms, setForms] = useState([]);

	useEffect(() => {
		if (forms === undefined) {
			refreshList();
		}
	}, [forms]);

	//  componentDidMount() {
	// 	 this.refreshList()
	// 	 console.log("React works")
	//  }

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

	// render() {
	return (
		<>
		<div className="App">

			{/* <ChoosePath /> */}
      {/* <MentorForm />  */}
			{/* <EngineerForm /> */}

			{/* <DataScienceForm />  */}
			<DesignerForm />
			{/* <InfoIntakeForm />  */}
			{/* <ContactForm /> */}

			<MySelect styles={colorStyles} options={choices} />
			
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
