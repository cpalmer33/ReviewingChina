import React, { useContext, useEffect, useState } from 'react'
import '../static/styles/landing.scss';
import Navbar from '../components/Navbar'
import { Store } from '../components/Firebase'
import PostListItem from '../components/landing/PostListItem'

export default () => {
  const { getPosts } = useContext(Store)
      , [posts, updatePosts] = useState([])

  useEffect(() => {
    const retrievePosts = async () => {
      updatePosts(await getPosts())
    }

    retrievePosts()
  }, [])

  const renderPostList = posts.map( post => <PostListItem key={post.slug} {...post}/> )

  return (
    <main className="landingpage">
      <div className="frame">
        <div className="frame__title-wrap">
          <h1 className="frame__title">#Worth Your Time</h1>
          <p className="frame__info">A critique on Chinese content </p>
        </div>
       <Navbar/>
      </div>
      <nav className="menu">
       { renderPostList }
      </nav>
      <div className="frame">
        <p>Send all inquiries to <a href="#">____</a></p>
      </div>
    </main>



  )
}