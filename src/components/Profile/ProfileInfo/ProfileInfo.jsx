import React from 'react';
import s from './ProfileInfo.module.css'


const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src='http://www.v3wall.com/wallpaper/1920_1080/1707/1920_1080_20170718101941343176.jpg'></img>
      </div>
      <div className={s.descriptionBlock} >
        ava + description
      </div>
    </div>
  )
}

export default ProfileInfo;