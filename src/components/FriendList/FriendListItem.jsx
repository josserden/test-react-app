import { Avatar, Friend, Name, Status } from "./FriendList.styled";

const FriendListItem = ({ isOnline, avatar, name }) => (
  <Friend>
    <Status statusType={isOnline}></Status>
    <Avatar src={avatar} alt={name} width="48" />
    <Name>{name}</Name>
  </Friend>
);

export default FriendListItem;
