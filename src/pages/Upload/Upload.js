import './Upload.scss';
import React from 'react';
import uploadImage from '../../assets/Images/Upload-video-preview.jpg';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Upload({ history }) {

  const submitHandler = (event) => {
    event.preventDefault(); 

    axios.post('https://shielded-earth-31421.herokuapp.com/videos', {
      title: event.target.title.value,
      description: event.target.description.value,
      image: uploadImage
    })
      .then(response => {
        alert('Video uploaded successfully');

        const {id} =response.data;
        history.push(`videos/${id}`);
      })
      .catch(error => {
        console.log(error);
        alert('Unable to complete POST request');
      })
  }

  return (
    <div className="upload" >

      <h1 className="upload__heading">Upload Video</h1>

      <div className="upload__details">

        <div className="upload__video">
          <h3 className="upload__video-heading">VIDEO THUMBNAIL</h3>
          <img className="upload__video-thumbnail" src={uploadImage} alt="Upload vidoe thumbnail" />
        </div>

        <form className="upload__form" onSubmit={submitHandler}>

          <div className="upload__form">
            <h3 for="title" className="upload__form-title">TITLE YOUR VIDEO</h3>
            <textarea className="upload__form-box" rows="1" name="title" placeholder="Add a title to your video"></textarea>
          </div>

          <div className="upload__form">
            <h3 for="description" className="upload__form-title">ADD A VIDEO DESCRIPTION</h3>
            <textarea className="upload__form-box" rows="4" name="description" placeholder="Add a description to your video"></textarea>
          </div>

          <div className="upload__border"></div>

          <div className="upload__button">
            <button className="upload__button-publish form-button" type='submit'>PUBLISH</button>

            <Link to='/' className="upload__button-cancel form-button">
              CANCEL
            </Link>
          </div>
        </form>
      </div>

    </div>
  )
}

export default Upload;