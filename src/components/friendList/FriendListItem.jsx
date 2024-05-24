import styles from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => (
  <div className={styles.item}>
    <img className={styles.avatar} src={avatar} alt={`Avatar of ${name}`} />
    <p className={styles.name}>{name}</p>
    <span className={isOnline ? styles.online : styles.offline}>
      {isOnline ? "Online" : "Offline"}
    </span>
  </div>
);

export default FriendListItem;
