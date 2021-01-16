import './App.css';
import NavBar from './Components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Forms from './Components/Forms/forms'
import Main from './Components/Main/main'
import Footer from './Components/Footer/footer'
function App() {
  return (
    <div  className="container-fluid homepage-bgimage">
      
      <NavBar />
      <Main/>
      
      <Forms></Forms>
      <Footer/>
    </div>
  );
}

export default App;
