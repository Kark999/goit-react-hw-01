// import friends from '../friends.json';
// import transactions from '../transactions.json';
// import profile from '../components/Profile';
// import friendList from '../components/FriendList';
// import transactionHistory from '../components/TransactionHistory';
import './App.css';
import Profile from '../components/Profile/Profile';
import ProfileData from '../assets/Profile.json';

const App = () => {
  return (
    <div>
      <Profile {...ProfileData} />;
    </div>
  );
};

export default App;
