import React, { useState, useEffect } from 'react';
import SignUp from "./components/Form/Form";
import axios from 'axios'
import "./App.css";

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'


const App = () => {

	const [forms, setForms] = useState([])

	useEffect(() => {
		if (forms === undefined) {
			refreshList()
		}
	})
 
	//  componentDidMount() {
	// 	 this.refreshList()
	// 	 console.log("React works")
	//  }

	function refreshList (){
		axios.get("/api/forms")
		 .then(res=> setForms(res.data))
	 }

	 function addItem(newItem) {
		 axios.post("/api/forms/", newItem).then(refreshList())
	 }

	 function deleteItem(form) {
		 axios.delete(`/api/forms/${form.id}`)
		 .then(refreshList())
	 }

	// render() { 
		return (
			<div className="App">
				<button onClick={refreshList}>Refresh</button>
				<SignUp addItem={addItem} />
				{/* { this.state.forms ? */}
				<ul className="forms">
					{forms.map((form, idx) => (
						<div key={idx}>
							<li>{form.first_name} <span>{form.id}</span></li>
							<button key={idx} onClick={() => deleteItem(form)}>
								X
							</button>
						</div>
					))}
				</ul> 
				{/* :
				<div></div>} */}
			</div>
		);
	}



export default App;
