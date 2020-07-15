import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';


const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div>
      {/* <div>
        <img src='http://www.v3wall.com/wallpaper/1920_1080/1707/1920_1080_20170718101941343176.jpg'></img>
      </div> */}
      <div className={s.descriptionBlock} >
        <img src={props.profile.photos.large} />
        <ProfileStatus status={'Hello my friends'} />
      </div>
    </div>
  )
}

export default ProfileInfo;