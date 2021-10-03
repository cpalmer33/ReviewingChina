import React, { useEffect, useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Store } from '../components/Firebase'
import Section from '../components/post/Section'
import '../static/styles/post.scss'

const titleOne = 'Whats It All About'
    , titleTwo = 'Opinion'

export default () => {
  const { getPostBySlug } = useContext(Store)
      , [post, updatePost] = useState(null)
      , { id: slug } = useParams()

  useEffect(() => {
    const fetchPost = async () => updatePost(await getPostBySlug(slug))

    fetchPost()
  }, [])

  const renderPostBody = () => post.content.map( (c,i) => <Section judgment={post.judgment} {...c} title={ i === 0 ? titleOne : titleTwo}/>)

  if(!post) return null

  return (  
    <div className="postpage">
      <main>
        <div className="frame frame--screen">
          <h2 className="frame__heading">Authored By: Thursday Connery</h2>
          <div className="frame__counter">
            <span className="frame__counter-number">{post.date}</span>
          </div>
          <nav className="frame__links frame__links--header">
            <a href="/">Home</a>
            <a href="#">Contact</a>
            <a href="#"></a>
          </nav>
        </div>
        <header className="intro">
          <h1 className="intro__title">{ post.title }</h1>
          <p className="intro__hint">{ post.eng_title }</p>
        </header>
        <div className="grid">
          { renderPostBody() }
        </div>
        {/* <img className="bigimg" src={} alt="Some image" />     */}
        <footer className="frame">
          <div className="frame__links">
            <a href="https://tympanus.net/Development/AudioBasedImageDistortion/">Previous Demo</a>
            <a href="https://tympanus.net/codrops/?p=47831">Article</a>
            <a href="https://github.com/codrops/AnimateSVGTextPath/">GitHub</a>
          </div>
        </footer>
      </main>
    </div>
  )
}