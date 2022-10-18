import './App.css';
import {useDispatch,useSelector} from 'react-redux';
import {VadivelActions,GounderActions} from './index';

function App() {
  const comedies = useSelector(state=>state);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <p>{comedies}</p>
      <button onClick={()=>dispatch(VadivelActions())}>Vadivel</button>&nbsp;
      <button onClick={()=>dispatch(GounderActions())}>Gounder</button>
      
    </div>
  );
}

export default App;
