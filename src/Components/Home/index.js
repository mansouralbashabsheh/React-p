import React , {Component} from 'react'
import Footer from '../Footer'
import Header from '../Header'
import Content from '../Content'
import axios from 'axios';
import {Mansour} from './style'


class Home extends Component {
  state = { users : [] }
  componentDidMount(){  axios.get('js/data.json').then(res => {
this.setState({users:res.data.users}) }

)
  }
  
    render()
    {
 
      const {users} = this.state;
      const allUsers = users.map((user) =>{ return(
        <Mansour color={user.id} key={user.id}>  
        <span>{user.name}</span>
        <br />
        <item>{user.age}</item>
        </Mansour>
      )
    
    })

      return (
        <div>
      <Header />
    <Content />
    <Footer />
    {allUsers}
      </div>
      );
    }
  
  }

export default Home;