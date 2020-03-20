import React, { Component, useState } from "react";
import "./App.css";
import {connect} from "react-redux"
import {fetchSmurfs,addSmurf,removeSmurf} from "./actions/actions"


function App(props) {

  const getSmurfs = e =>{
    e.preventDefault();
    props.fetchSmurfs();
  }
  const removeSmurf = id =>{
    props.removeSmurf(id);
  }

  
  const [smurf, setSmurf] = useState({
    name:"",
    age:"",
    height:"",
  })

  const handleChange = f =>{
    f.preventDefault();
    setSmurf({...smurf, [f.target.name]:f.target.value});
  }

  const submitForm = form =>{
    form.preventDefault();
    console.log("sending", {...smurf, id:Date.now()});
    props.addSmurf(smurf);
  }

  console.log(props)

  return (
    <div className="App">
      <div className="App">
         <h1>SMURFS! 2.0 W/ Redux</h1>
         <button onClick={getSmurfs}>asdasd</button>
         <div>
            <form>
              <label htmlFor="Name">
                Name <input type="text" name="name" onChange={handleChange}></input>
              </label>
              <label htmlFor="age">
                Age
                <input type="text" name="age" onChange={handleChange}></input>
              </label>
              <label htmlFor="height">
                Height
                <input type="text" name="height" onChange={handleChange}></input>
              </label>
              <button onClick={submitForm}>addsmurf</button>
            </form>
         </div>
         {/* <div>Welcome to your state management version of Smurfs!</div>
         <div>Start inside of your `src/index.js` file!</div>
         <div>Have fun!</div> */}
         {props.data.map(smurf=>{
           return <p key={smurf.id}>{smurf.name}<button onClick={() => removeSmurf(smurf.id)}>X</button></p>
         })}
       </div>
    </div>
  );
}

const mapStateToProps = state => {
  return state
}

export default connect(
  mapStateToProps, 
  {fetchSmurfs,addSmurf,removeSmurf}
)(App);










// class App extends Component {

//   constructor(){
//     super();
//     this.state={
//       data:[]
//     }
//   }

//   getSmurfs(e){
//     e.preventDefault();
//     fetchSmurfs();
//   }


//   render() {
//     console.log(this.props);
//     return (
//       <div className="App">
//         <h1>SMURFS! 2.0 W/ Redux</h1>
//         <button onClick={this.getSmurfs}>asdasd</button>
//         {/* <div>Welcome to your state management version of Smurfs!</div>
//         <div>Start inside of your `src/index.js` file!</div>
//         <div>Have fun!</div> */}
//         <div>

//         </div>
//       </div>
//     );
//   }

// }

// const mapStateToProps = state => {
//   return state
// }

// export default connect(
//   mapStateToProps, 
//   {fetchSmurfs}
// )(App);