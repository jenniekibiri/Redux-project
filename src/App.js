
import './App.css';
import { useSelector,useDispatch } from "react-redux";
import { bindActionCreators } from 'redux';
import { actionCreators } from "./redux/index";
//access the data  in the store

function App() {
  const state =useSelector((state)=>state)
   const dispatch = useDispatch()
   const {depositMoney,withdrawMoney} =bindActionCreators(actionCreators, dispatch)
  console.log(state)
 
  return (
    <div className="App">
      <div>
        <button onClick={()=>depositMoney(1000)} >deposit</button>
        <button  onClick={()=>withdrawMoney(1000)}  >withdraw</button>
      </div>
     <p>{state.account}</p>
    </div>
  );
}

export default App;
