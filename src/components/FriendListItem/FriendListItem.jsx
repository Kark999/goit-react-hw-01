const FriendListItem = ({ image, name, isOnline }) => (
  <div>
    <img src={image} alt="Avatar" width="48" />
    <p>{name}</p>
    <p>{isOnline ? 'Online' : 'Offline'}</p>
  </div>
);

export default FriendListItem;
