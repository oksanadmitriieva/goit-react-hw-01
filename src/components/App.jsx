import Profile from "./profile/Profile";
import FriendList from "./friendList/FriendList";
import userData from "../userData.json";
import friendsData from "../friends.json";
import TransactionHistory from "./transactionhistory/TransactionHistory";
import transactions from "../transactions.json";
const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
