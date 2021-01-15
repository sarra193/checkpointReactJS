import './App.css';
import NavBar from './Components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Forms from './Components/Forms/forms'
import Main from './Components/Main/main'
import Footer from './Components/Footer/footer'
import bg from "./assets/bg.jpg";
function App() {
  return (
    <div  style={{  background: `url(${bg})` , backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'}}>
      <NavBar />
      <Main/>
      <Forms></Forms>
      <Footer/>
    </div>
  );
}

export default App;
