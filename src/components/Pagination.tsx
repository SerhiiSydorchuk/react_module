import React, {FC, useEffect} from 'react';
import {useSearchParams} from "react-router-dom";
type PaginationProps = {
    flag:boolean
}
const Pagination:FC<PaginationProps> = ({flag}) => {
    const [query , setQuery] =  useSearchParams({page: '1'})



    const onclickEventPage = ()=> {
        let page = query.get('page');
        if(page && +page>1){
            let currentPage = +page;
            currentPage--;
            setQuery({page: currentPage.toString()});
        }
    }
    const onclickNextPage = ()=> {
        let page = query.get('page');
        if(page){
            let currentPage = +page;
            currentPage++;
            setQuery({page: currentPage.toString()});
        }
    }

    return (
        <div>
            <button onClick={onclickEventPage}>event</button>
            <button onClick={onclickNextPage} disabled={flag }>next</button>

        </div>
    );
};

export default Pagination;