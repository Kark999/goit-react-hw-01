import './App.css';
import Profile from '../components/Profile/Profile';
import userData from '../assets/Profile.json';
import FriendList from '../components/FriendList/FriendList';
import friendsData from '../assets/FriendList.json';

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
      <FriendList friends={friendsData} />
    </div>
  );
};

export default App;
