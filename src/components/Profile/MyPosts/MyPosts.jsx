import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form'
import { required, maxLengthCreator } from '../../../utils/validators/validators';
import { Textarea } from '../../common/Preloader/FormsControls/FormsControls';


const maxLength10 = maxLengthCreator(10);

const MyPosts = React.memo((props) => {

let postsElement = props.posts
  .map(p => <Post key={p.id} message={p.message} numlike={p.likesCount} />);

  let newPostElement = React.createRef();

  let onAddPost = (values) => {
    props.addPost(values.newPostText);     
   }


  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <AddNewPostFormRedux onSubmit={onAddPost} /> 
      <div className={s.posts}>
        {postsElement}
      </div>        
    </div>
  )
});

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
          <Field name="newPostText" 
                  component={Textarea} 
                  placeholder="Enter your post" 
                  validate={[required, maxLength10]} />
        </div>
        <div>
          <button>Add post</button>
        </div>
    </form>
  )
}

const AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm)



export default MyPosts;