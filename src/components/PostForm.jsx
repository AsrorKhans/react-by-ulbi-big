import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const  PostForm = ({create, setVisible}) => {
    const [post, setPost] = useState({title: '', body: ''})
    const addNewPost = (e) => {
        e.preventDefault();

        const newPost = {
            ...post,
            id: Date.now(),
        }

            create(newPost);
        setPost({title: '', body: ''})
    }
    return (
        <form style={{margin: '15px 0'}}>
            <MyInput
                type="text"
                placeholder="Название поста"
                value={post.title}
                onChange={(e) => setPost({...post, title: e.target.value})}
            />
            <MyInput
                type="text"
                placeholder="Описание поста"
                value={post.body}
                onChange={(e) => setPost({...post, body: e.target.value})}
            />
            <div style={{display: "flex",  justifyContent: "space-between"}}>
                <MyButton onClick={addNewPost}>Отправить пост</MyButton>
                {/*<MyButton onClick={() => setVisible(false)}>*/}
                {/*    Закрыть*/}
                {/*</MyButton>*/}
            </div>
        </form>

    );
};

export default PostForm;