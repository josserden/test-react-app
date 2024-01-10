import styled from '@emotion/styled';

export const List = styled.ul`
    padding-top: 1em;
    padding-left: 0;
    padding-bottom: 1em;
    border-radius: 0.8em;
    background-color: #e2b82d;
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
    0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
    0 22.3px 17.9px rgba(0, 0, 0, 0.042);
    position: relative;
    display: flex;
    gap: 15px;
    flex-direction: column;
    align-items: center;
    width: 280px;
`;

export const Friend = styled.li`
    border-radius: 0.8em;
    background-color: #fefefe;
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
    0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
    0 22.3px 17.9px rgba(0, 0, 0, 0.042);
    display: flex;
    align-items: center;
    width: 230px;
    height: 80px;
`;

export const Status = styled.span`
    width: 15px;
    height: 15px;
    margin-left: 15px;
    border-radius: 50%;
    background-color: ${props => (props.statusType ? 'green' : 'red')};
`;

export const Avatar = styled.img`
    margin-left: 15px;
`;

export const Name = styled.p`
    margin-left: 15px;
    font-size: 25px;
    font-weight: 500;
`;