import './App.css';
import {useDispatch,useSelector} from 'react-redux';
import {VadivelActions,GounderActions} from './action/action';


function App() {
  const comedy = useSelector(state=>state);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <p>{comedy}</p>
      <button onClick={()=>dispatch(VadivelActions())}>Vadivel</button>&nbsp;
      <button onClick={()=>dispatch(GounderActions())}>Gounder</button>
      
    </div>
  );
}

export default App;
