import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./componets/Navbar";
import Home from "./componets/Home";
import Services from './componets/Services';
import Cards from './componets/Cards';
import Discount from './componets/Discount';
import Sale from './componets/Sale';
import Mainbody from './componets/Mainbody';
import Contact from './componets/Contact';
import Footer from './componets/Footer';

function App() {
  return (
   <>
   <Navbar /> 
   
   <Home />

   <Services />
   
   <Cards />
   
   <Discount />
   <Sale />
   

   <Mainbody />

   <Contact />

   <Footer />
   
 </> 
 
  );
}


export default App;
