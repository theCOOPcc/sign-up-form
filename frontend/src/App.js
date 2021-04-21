import React, { Component } from 'react';
import SignUp from "./components/Form/Form";
import axios from 'axios'
import "./App.css";


class App extends Component {
	state = { 
		forms: []
	 }
	 componentDidMount() {
		 this.refreshList()
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
		 .then(res=> this.refreshList())
	 }

	render() { 
		return (
			<div className="App">
				<h1>Cory Rules</h1>
				<button onClick={this.refreshList}>Refresh</button>
				<SignUp addItem={this.addItem} />
				<ul className="forms">
					{this.state.forms.map((form, idx) => (
						<div key={idx}>
							<li>{form.id}</li>
							<button key={idx} onClick={() => this.deleteItem(form)}>
								X
							</button>
						</div>
					))}
				</ul>
			</div>
		);
	}
}


export default App;
