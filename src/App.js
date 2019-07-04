import React,{Component} from 'react';
import Home from './Components/Home'
import { BrowserRouter , Route} from 'react-router-dom'
import Navbar from './Components/Navbar';
import Page2 from './Components/Page2'

class App extends Component {
  render()
  {
    return (
      <div>
        <BrowserRouter>
        <Navbar/>
       
      

       <Route exact path="/" component={Home} />
        <Route path="/page2" component={Page2} />
        </BrowserRouter>

    
 

    </div>
    );
  }

}

export default App;
