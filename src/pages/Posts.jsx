import React from 'react';
import '../styles/App.css'
import {useEffect, useState} from "react";
import PostService from "../API/PostService";
import {useFetching} from "../hooks/useFetching";
import {usePosts} from "../hooks/usePosts";
import {getPageCount} from "../utils/pages";
import MyButton from "../components/UI/button/MyButton";
import MyModal from "../components/UI/MyModal/MyModal";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import PostList from "../components/PostList";
import Loader from "../components/UI/Loader/Loader";
import Pagination from "../components/UI/pagination/Pagination";

function Posts() {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [fetchPosts, isPostLoading, postError] = useFetching(async (limit, page) => {
        const response = await PostService.getAll(limit, page);
        setPosts(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit));
    })
    useEffect(() => {
        fetchPosts(limit, page)
    }, [])

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const changePage = (page)=>{
        setPage(page)
        fetchPosts(limit, page);
    }

    return (
        <div className="App">
            <MyButton onClick={() => setModal(true)}>
                Добавить пользователья
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm setVisible={setModal} create={createPost}/>
            </MyModal>
            <hr style={{margin: "15px 0"}}/>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            {
                postError &&
                <h2 style={{textAlign: 'center', margin: '15px'}}>Произошла ошибка {postError}</h2>
            }
            {
                isPostLoading
                    ? <div style={{display: 'flex', justifyContent: 'center'}}><Loader/></div>
                    : <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список постов"/>
            }
            <Pagination
                totalPages={totalPages}
                page={page}
                changePage={changePage}
            />

        </div>
    );
}

export default Posts;
