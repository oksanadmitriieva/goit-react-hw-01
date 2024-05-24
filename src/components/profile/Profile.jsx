import styles from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={styles.profile}>
      <div>
        <img src={image} alt="User avatar" className={styles.avatar} />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>
      <ul className={styles.stats}>
        <li>
          <span>Followers</span>
          <span className={styles.number}>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span className={styles.number}>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span className={styles.number}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
