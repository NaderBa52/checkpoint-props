
import './App.css';
import Profile from './profile/Profile';

function App() {
  let intro={
   fullname:'benamor nader',
     bio:'welcome here',
     profession:'web developer'
  }
  const handlename=(name)=>{
alert (`this is my name ${name}`)
  }
  return (
    <div className="App">
 <Profile data={intro} handlename={handlename}>
   <img src="/user.jpg" alt="" width="450" className="avatar" />
 </Profile>
    </div>
  );
}

export default App;
