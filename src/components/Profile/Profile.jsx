import PropTypes from 'prop-types';
import { Container, Description, Name, ProfileImg, Stat, StatName, StatQty, Stats, Tag, Location } from './Profile.styled';

const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
        <Container>
            <Description>
                <ProfileImg
                    src={avatar}
                    alt={username}
                />
                <Name>{username}</Name>
                <Tag>@{tag}</Tag>
                <Location>{location}</Location>
            </Description>

            <Stats>
                <Stat>
                    <StatName>Followers</StatName>
                    <StatQty>{stats.followers}</StatQty>
                </Stat>
                <Stat>
                    <StatName>Views</StatName>
                    <StatQty>{stats.views}</StatQty>
                </Stat>
                <Stat>
                    <StatName>Likes</StatName>
                    <StatQty>{stats.likes}</StatQty>
                </Stat>
            </Stats>
        </Container>
    )
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
            followers: PropTypes.number.isRequired,
            views: PropTypes.number.isRequired,
            likes: PropTypes.number.isRequired,
        }).isRequired,
};

export default Profile;