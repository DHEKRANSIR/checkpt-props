import './App.css';
import Profile from './Profile/Profile.js';
import PROFILEPHOTO from './Profile/imgpro.jpg';

function App() {
  const handleName=name=>alert(name);
  
  return (
    <div className="App">
      <Profile fullName="Dhekra Nsir" bio="I am a 29-year-old married woman. I live in Dar Chaabane,Nabeul,Tunisia.I studied Agronomy studies at ISA Sousse where I graduated as an engineer. I have decided to switch to a different career path, namely web development.Hence, I have signed up to the GoMyCode fullstack program in order to acquire a deeper understanding of this field of study."
profession="Web Developer" handleName={handleName}><img src={PROFILEPHOTO} alt=''width= '150 px' height='150px'/></Profile>
      
    </div>
  );
}

export default App;
