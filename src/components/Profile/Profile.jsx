import css from './Profile.module.css';

const Profile = ({ name, image, tag, location, stats }) => {
  return (
    <div className={css.profileBox}>
      <div className={css.profileInfo}>
        <img className={css.profileImage} src={image} alt="User avatar" />
        <p className={css.profileName}>{name}</p>
        <p className={css.profileTag}>@{tag}</p>
        <p className={css.profileLocation}>{location}</p>
      </div>

      <ul className={css.profileStats}>
        <li className={css.profileActive}>
          <span className={css.profileActiveName}>Followers</span>
          <span className={css.profileActiveValue}>{stats.followers}</span>
        </li>
        <li className={css.profileActive}>
          <span className={css.profileActiveName}>Views</span>
          <span className={css.profileActiveValue}>{stats.views}</span>
        </li>
        <li className={css.profileActive}>
          <span className={css.profileActiveName}>Likes</span>
          <span className={css.profileActiveValue}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
