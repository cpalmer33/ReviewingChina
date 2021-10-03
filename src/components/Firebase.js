import React from 'react'
import { createContext, useEffect, useState } from 'react'
import * as firebase from 'firebase'
import 'firebase/firestore'

export const Store = createContext()
  
const config = {
  apiKey: "AIzaSyDkfcEDGUHkAiMj5LxwrmtcdMQJsJTq9Y4",
  authDomain: "https://worthyourtimereal.firebaseio.com",
  projectId: "worthyourtimereal",
}

firebase.initializeApp(config)

const db = firebase.firestore()
    , collection = db.collection("en.chinapost")

export default ({ children }) => {
  const [store, updateStore] = useState({ loading: true, db })
    // , updateLoading = (loading) => updateStore({ ...store, loading })

  const getPosts = () => 
    new Promise((res) => 
      collection.onSnapshot(({ docs }) => 
        res(docs.map((d) => d.data()))
      )
    )

  const getPostBySlug = async (slug) => {
    const snap = await collection.where('slug', '==', slug).get()
        , [post] = snap.docs.map( p => p.data())

    return post
  }

  // useEffect(() => {
  //   if (!firebase.apps.length) firebase.initializeApp(config)

  //   const database = firebase.database()

  //   updateStore({ ...store, database })
  // }, [])

  if (!store.db) return null

  return (<Store.Provider
    value={{
      ...store,
      getPosts,
      getPostBySlug
    }}>
    {children}
  </Store.Provider>)
}



