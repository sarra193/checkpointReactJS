import './App.css';
import NavBar from './Components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Forms from './Components/Forms/forms'
import Footer from './Components/Footer/footer'

function App() {
  return (
    <div  className=" Container homepage-bgimage">
      
      <NavBar />
      

      
      <Forms></Forms>
      <Footer/>
    </div>


  );
}

export default App;
