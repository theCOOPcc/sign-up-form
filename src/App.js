import './App.css';
import { FormikContainer } from './components/Formik-stuff/FormikContainer';
import FormikControl from './components/Formik-stuff/FormikControl';
import { MentorForm } from './components/forms/MentorForm';

function App() {
  return (
    <div className="App">
     {/* <MentorForm /> */}
     
     <FormikContainer />

     <FormikControl />
    </div>
  );
}

export default App;
