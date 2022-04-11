import React from 'react'
import { FiFacebook } from 'react-icons/fi'
import { FiGithub } from 'react-icons/fi'

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.facebook.com/profile.php?id=100018142032676" target='_blank'><FiFacebook/></a>
        <a href="https://github.com/HaiLong9901" target='_blank'><FiGithub /></a>
    </div>
  )
}

export default HeaderSocial