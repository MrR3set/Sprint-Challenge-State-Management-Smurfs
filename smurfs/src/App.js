import React, { Component, useState } from "react";
import "./App.css";
import {connect} from "react-redux";
import {fetchSmurfs,addSmurf,removeSmurf,editSmurf} from "./actions/actions";
import SmurfList from "./components/smurfList"


function App(props) {

  const getSmurfs = e =>{
    e.preventDefault();
    props.fetchSmurfs();
  }
  const removeSmurf = id =>{
    props.removeSmurf(id);
  }
  const editSmurf = s =>{
    props.editSmurf(s);
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

  return (
    <div className="App">
      <div className="App">
         <h1>SMURFS! 2.0 W/ Redux</h1>
         <div>
            <form>
              <label htmlFor="Name"></label>
                Name <input type="text" name="name" onChange={handleChange}></input>
              <label htmlFor="age"></label>
                Age <input type="text" name="age" onChange={handleChange}></input>
              <label htmlFor="height"></label>
                Height <input type="text" name="height" onChange={handleChange}></input>
              <button onClick={submitForm}>Add smurf</button>
            </form>
         </div>
         <button onClick={getSmurfs} className="cta-addsmurf">Show smurfs</button>
         <div>
           <SmurfList data={props.data} removeSmurf={removeSmurf} editSmurf={editSmurf}></SmurfList>
         </div>
       </div>
    </div>
  );
}

const mapStateToProps = state => {
  return state
}

export default connect(
  mapStateToProps, 
  {fetchSmurfs,addSmurf,removeSmurf,editSmurf}
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