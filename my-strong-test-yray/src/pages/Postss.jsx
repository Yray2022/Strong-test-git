import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react';
import PostsServes from '../API/PostsServis';
import '../App.css';
import Navbar from '../Components/Navbar';
import PostForm from '../Components/PostForm';
import PostList from '../Components/PostList';
import { usePostNexPage } from '../hook/useGetPagesArray';
import MyButton from '../UI/MyButton/MyButton';
import MyInput from '../UI/MyInput/MyInput';
import MyModal from '../UI/MyModal/MyModal';
import { getPagesArray, getPagesCount } from '../Utils/pages';

function Postss() {



  const [posts, setPosts] = useState([])
  const [title, setTitle] = useState('')
  const [body, setbody] = useState('')
  const [serchQuery, setSerchQuery] = useState('')
  const [getQueru, setGetQueru] = useState('')
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)

  let pagesArray = usePostNexPage(totalPages)




  const sortedQuery = useMemo(() => {
    if (serchQuery) {
      return [...posts].sort((a,b) => a[serchQuery].localeCompare(b[serchQuery]))
    }
    return posts
  }, [serchQuery, posts])

  const getSortedPostsQuery = useMemo(() => {
    return sortedQuery.filter(post => post.title.toLowerCase().includes(getQueru.toLowerCase()))
  }, [getQueru, sortedQuery])


  useEffect(() => {
    fetchPosts()
  },[page])

  async function fetchPosts() {
    const response = await PostsServes.getAll(limit, page)
    setPosts(response.data)
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPagesCount(totalCount, limit))
  }

  const changePage = (page) =>{
    setPage(page)
  }


  const addPost = (e) => {
    e.preventDefault()
    const newPost = { 
      id: Date.now(),
      title: title,
      body: body
    }
    setPosts([...posts, newPost])
    setTitle('')
    setbody('')
  }


  const removeButton = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm  getQueru={getQueru} setGetQueru={setGetQueru} title={title} body={body} setTitle={setTitle} setbody={setbody} addPost={addPost}/>
      <h1 className='pageValue'>Страниса {page}</h1>
        {getSortedPostsQuery.map((post, index) => 
        <PostList key={post.id} post={post} number={index + 1} removeButton={removeButton}/>
        )}
      <br/>
      <div className='page__wrapper'>
        {pagesArray.map(p => 
          <button  
          onClick={() => changePage(p)}
          key={p} 
          className={page === p ? 'page__current' : 'page'}
          >
            {p}
            </button>
        )}
      </div>
      
    </div>
  );
}

export default Postss;
