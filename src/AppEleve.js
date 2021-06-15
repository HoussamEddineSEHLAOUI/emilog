
import './AppEleve.css';
import Signin from './Signin/Signin';
import { Component } from 'react';
import Profile from './Profile/Profile';
import Scanzone from './Scanzone/Scanezone';
import Navigation from './Navigation/Navigation';
import "tachyons";

class AppEleve extends Component {
  constructor(){
    super();
    this.state ={
      route:'signin',
      isSignedIn:false,
      user : {
        name : "" ,
        prenom : "" ,
        matricle : "" ,
        email : "" ,
        numero : "" ,
        Promotion : "" ,
        filiere : "" ,
        gender : "" ,
        Batiment : "" ,
        chambre : "",
        classement :0,
      } 
    }
  }

  onRouteChange=(route)=>{
    if(route==='signin'){
      this.setState({isSignedIn:false})
    }else if (route==='profile' | route==='scane'){
      this.setState({isSignedIn:true})
    }
    console.log(route)
    console.log(this.state.route)
    this.setState({route:route})
    console.log(this.state.route)
  }


  loadUser=(data)=>{
    this.setState({user : {
        name : data.name,
        prenom : data.prenom,
        matricule : data.matricle,
        email : data.email ,
        numero :data.numero ,
        Promotion : data.Promo,
        filiere : data.filier,
        gender : data.gender,
        Batiment : data.departement ,
        chambre : data.chambre,
        classement :data.classement

    }})
  }





  render(){
    const {route ,isSignedIn} =this.state;
    return (
    <div>
        <Navigation onRouteChange={this.onRouteChange} isSignedIn={isSignedIn}/>
        {route==='signin'
        ?<Signin onRouteChange={this.onRouteChange} loadUser={this.loadUser}/>
        :(
          route==='profile'
          ?<Profile user={this.state.user} 
                    onRouteChange={this.onRouteChange}
                   loadUser={this.loadUser}/>
          
          :<Scanzone onRouteChange={this.onRouteChange} user={this.state.user}/>
          
        )
        }     
    </div>
    );
  }
  
}

export default AppEleve;
