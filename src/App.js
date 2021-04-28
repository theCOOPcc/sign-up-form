import "./App.css";
import ContactForm from "./components/forms/ContactForm";
import DataScienceForm from "./components/forms/DataScienceForm";
import DesignerForm from "./components/forms/DesignerForm";
import EngineerForm from "./components/forms/EngineerForm";
import InfoIntakeForm from "./components/forms/InfoIntakeForm";

import MentorForm from './components/forms/MentorForm'
import ChoosePath from "./components/forms/ChoosePath";

function App() {
	return (
		<div className="App">

			<ChoosePath />
      {/* <MentorForm />  */}
			{/* <EngineerForm /> */}

			{/* <DataScienceForm />  */}
			{/* <DesignerForm /> */}
			{/* <InfoIntakeForm />  */}
			{/* <ContactForm /> */}
		</div>
	);
}

export default App;
