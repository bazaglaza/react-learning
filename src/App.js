import React, {useState, useMemo} from 'react';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostsFilter from "./components/PostsFilter";
import MyModal from "./components/UI/modal/MyModal"
import MyButton from "./components/UI/button/MyButton";

//import MySelect from "./components/UI/select/MySelect";
//import MyInput from "./components/UI/input/MyInput";
import './styles/App.css';

function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: "JS Post number 1", body: "Post number ONE about the JavaScript"},
        {id: 2, title: "JS Post number 2", body: "Post number TWO about the JavaScript"},
        {id: 3, title: "JS Post number 3", body: "Post number THREE about the JavaScript"},
        {id: 4, title: "JS Post number 4", body: "Post number FOUR about the JavaScript"}
    ]);

    const [filter, setFilter] = useState({sort: "title", query: ""});

    const [selectedSort, setSelectedSort] = useState("title");
    const [searchQuery, setSearchQuery] = useState("");
    const [modalVisibility, setModalVisibility] = useState(false);

    const sortedPosts = [...posts].sort((a,b) => a[filter.sort].localeCompare(b[filter.sort]));

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLocaleLowerCase().includes(filter.query.toLowerCase()));
    },[filter.query, sortedPosts]);

    function createPost(newPost){
        setPosts([...posts, newPost])
        setModalVisibility(false);
    }

    function removePost(post){
        setPosts(posts.filter(p => p.id !== post.id));
    }

    return (
        <div className="App">

            <MyButton style={{marginTop: "24px"}} onClick={() => setModalVisibility(true)}>
                Create Post
            </MyButton>

            <MyModal visible={modalVisibility} setVisible={setModalVisibility}>
                <PostForm create={createPost} />
            </MyModal>

            <hr style = {{margin: "16px"}}/>

            <PostsFilter
                filter = {filter}
                setFilter = {setFilter}
            />

            <PostList posts={sortedAndSearchedPosts} remove={removePost} title = "Test Posts List"/>

        </div>
    );
}

export default App;
