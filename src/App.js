import React, { Component } from 'react';
import SignUp from "./components/Form/Form";
import axios from 'axios'
import "./App.css";

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'


class App extends Component {
	constructor(){
		super()
		this.state = { 
			forms: []
		 }
	}
	 componentDidMount() {
		 this.refreshList()
		 console.log("React works")
	 }

	refreshList = () => {
		axios.get("/api/forms")
		 .then(res=> this.setState({ forms: res.data }))
	 }

	 addItem = (newItem) => {
		 axios.post("/api/forms/", newItem).then(this.refreshList())
	 }

	 deleteItem = (form) => {
		 axios.delete(`/api/forms/${form.id}`)
		 .then(this.refreshList())
	 }

	render() { 
		return (
			<div className="App">
				<button onClick={this.refreshList}>Refresh</button>
				<SignUp addItem={this.addItem} />
				{/* { this.state.forms ? */}
				<ul className="forms">
					{this.state.forms.map((form, idx) => (
						<div key={idx}>
							<li>{form.first_name} <span>{form.id}</span></li>
							<button key={idx} onClick={() => this.deleteItem(form)}>
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
}


export default App;
