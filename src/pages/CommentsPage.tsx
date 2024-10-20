import React, {useEffect, useState} from 'react';
import Pagination from "../components/Pagination";
import {useSearchParams} from "react-router-dom";
import {apiService} from "../services/api.services";
import Comments from "../components/Comments";
import {IComment} from "../model/IComment";


const CommentsPage = () => {
    const [query, setQuery] = useSearchParams({page: '1'});
    const [comments, setComments] = useState<IComment[]>([]);
    const [flag, setFlag] = useState<boolean>(false)
    useEffect(() => {
        const page = query.get('page');
        if (page ){
            apiService.comments
                .getAll(+page)
                .then(value => {
                    setComments(value.data.comments);
                    setFlag(value.flag)
                })
        }


    }, [query]);




    return (
        <div>
            <Comments comments={comments}/>
            <Pagination flag={flag}/>
        </div>
    );
};

export default CommentsPage;