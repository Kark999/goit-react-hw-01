// import friends from '../friends.json';
// import transactions from '../transactions.json';
// import profile from '../components/Profile';
// import friendList from '../components/FriendList';
// import transactionHistory from '../components/TransactionHistory';
import './App.css';
import Profile from '../components/Profile/Profile';
import userData from '../assets/Profile.json';

const App = () => {
  const { username, tag, location, avatar, stats } = userData;

  return (
    <div>
      <Profile
        name={username}
        tag={tag}
        location={location}
        image={avatar}
        stats={stats}
      />
    </div>
  );
};

export default App;
