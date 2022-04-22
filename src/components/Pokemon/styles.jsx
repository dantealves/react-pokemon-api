import styled from 'styled-components';

export const Card = styled.div`
    display: flex;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.25);
    border-radius: 3px;

    .pokemon-img-container {
        width: 70px;
        height: 70px;
        margin-right: 10px;
    }

    .pokemon-img-container img{
        width: 70px;
        height: 70px;
    }

   .card-body{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 10px 10px 10px 0px;
        flex: 1;
   }
   .card-top{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
   }
   .card-top h3{
        text-transform:uppercase;
   }
   .card-bot{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
   }
   .pokemon-type{
       display: flex;
   }
   .pokemon-type-text{
        margin-right: 10px;
        text-transform: uppercase;
   }
`;
