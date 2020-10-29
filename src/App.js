import react ,{Component} from 'react';
import './App.css';
import sung from "./sung.png"

class App extends Component {
  constructor(){
    super()
    this.state ={
      FullName:"Youssef Hammi",
      Bio:"17Yo student at Ali Douagi HighSchool ",
      ImgSrc:sung,
      ImgAlt:"HeeHee",
      Job: "Game And Web Dev",
      Time:0,
      show:false
  };

  }
   


  handelClick=() => this.setState({show : !this.state.show})
  componentDidMount = () => {
    setInterval(()=>{
      let Time = new Date()
      Time=Time.getHours()+":"+Time.getMinutes()
      this.setState({Time:Time})
    },1000)
  }

render(){
  return(
    <>
     <center>
    {
        this.state.show &&
       
    <div>
   
    <h1>{this.state.FullName}</h1>
  <h2>{this.state.Bio}</h2>
  <h2>{this.state.Job}</h2>
  <img src={this.state.ImgSrc} alt={this.state.ImgAlt} />
  <br />
  <h2>{this.state.Time}</h2>
  
  </div>
    }
<button onClick={this.handelClick}>ENZEL!!!</button>
  </center>  
  
 
  </>
   );
}
}
export default App ;
