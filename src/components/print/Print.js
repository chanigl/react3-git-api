//import axios from 'axios'
import React from 'react'

const Print = ({avatar , login , create, repo}) => {
    //console.log(user);
    //console.log(user.avatar_url, user.created_at, user.login, user.public_repos)
    /*async function fathAvatar(){
        const avatarUrl =await axios.get ({avatar})
        console.log(avatarUrl);
    }*/

  return (
      <>
    <div><img src={avatar} alt='pic'/></div>
    <div>{login }</div>
    <div>created:{create}</div>
    <div>repositorios:{repo}</div>
    </>
  )
}

export default Print