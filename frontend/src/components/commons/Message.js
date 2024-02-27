import styled from 'styled-components';

const Message = styled.div`
    width: 100%
    text-align: center;
    color: ${({ fcolor }) => fcolor || '#6D6D6D'};
    font-size: 11px;
    margin: 5px 0;
`;

export default Message;
