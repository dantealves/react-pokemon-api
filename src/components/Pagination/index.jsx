import React from 'react';

import { PaginationContainer } from './styles';

const Pagination = (props) =>{
    const { page, totalPages, onLeftClick, onRightClick } = props;
    return(
        <PaginationContainer className='pagination-container'>  {/* <Container> */}
            <button onClick={onLeftClick}><div>⏪</div></button>
            <div>{page} de {totalPages}</div>
            <button onClick={onRightClick}><div>⏩</div></button>
        </PaginationContainer>
    )
}

export default Pagination;
