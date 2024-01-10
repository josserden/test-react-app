import styled from '@emotion/styled';

export const TranstactionHistoryTable = styled.table`
    border: 3px solid black;
    width: 360px;
    padding: 10px;
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
    0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
    0 22.3px 17.9px rgba(0, 0, 0, 0.042);
    margin-bottom: 20px;

    th,
    td {
        padding: 10px;
        text-align: center;
        border-bottom: 1px solid black;
        transition: 0.5s ease-in-out;
    }

    th {
        font-weight: bold;
        background-color: lightgray;
    }

    td{
        text-transform: capitalize;
    }

    tr:last-of-type td {
    border-bottom: none;
    }

    td:hover,
    td:hover{
        background-color: lightblue;
    }
`;