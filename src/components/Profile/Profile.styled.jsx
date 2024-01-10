import styled from '@emotion/styled';

export const Container = styled.div`
    padding: 1em;
    border-radius: 0.8em;
    background-color: #fefefe;
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
    0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
    0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05),
    0 100px 80px rgba(0, 0, 0, 0.07);
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ProfileImg = styled.img`
    width: 100px;
    border-radius: 50%;
`

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`
export const Stats = styled.ul`
    list-style-type: none;
    padding: 0;
    display: flex;
    justify-content: space-between;
    width: 250px
`

export const Stat = styled.li`
    display: inline-block;
    text-align: center;
    padding: 0.5em;
`
export const StatQty = styled.span`
    color: #9b45e4;
    font-weight: bold;
    font-size: 1.2em;
    display: block;
`
export const StatName = styled.span`
    color: #969798;
    text-transform: uppercase;
    font-size: 0.8em;
    font-weight: bold;
`
export const Name = styled.p`
    font-size: 1.4em;
    color: #6f6f6f;
    margin:0;
`
export const Tag = styled.p`
    color: #999;
    font-size: 0.95em;
    margin: 0;
`

export const Location = styled.p`
    color: #6f6f6f;
    font-size: 0.95em;
    margin: 0;
`