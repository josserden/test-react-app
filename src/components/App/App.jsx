import user from "../../data/user.json";
import friends from "../../data/friends.json";
import transaction from "../../data/transactions.json";
import Profile from "../Profile/Profile";
import FriendList from "../FriendList/FriendList";
import { Container } from "./App.styled";
import TransactionHistory from "../TransactionHistory/TransactionHistory";

const App = () => {
  console.error(new Error("Oops, something went wrong"));

  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
        avatar={user.avatar}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transaction} />
    </Container>
  );
};

export default App;
