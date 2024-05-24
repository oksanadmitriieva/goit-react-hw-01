import FriendListItem from "./FriendListItem";
import styles from "./FriendListItem.module.css";
const FriendList = ({ friends }) => (
  <ul className={styles.list}>
    {friends.map((friend) => (
      <li key={friend.id}>
        <FriendListItem avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} />
      </li>
    ))}
  </ul>
);

export default FriendList;
