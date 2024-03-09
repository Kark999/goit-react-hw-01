import css from './FriendListItem.module.css';
import clsx from 'clsx';

const FriendListItem = ({ image, name, isOnline }) => (
  <div className={css.friendCard}>
    <img className={css.friendCardImage} src={image} alt="Avatar" width="48" />
    <p className={css.friendCardName}>{name}</p>
    <p
      className={clsx(css.friendCardStatus, {
        [css.Online]: isOnline,
        [css.Offline]: !isOnline,
      })}
    >
      {isOnline ? 'Online' : 'Offline'}
    </p>
  </div>
);

export default FriendListItem;
