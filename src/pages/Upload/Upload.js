import './Upload.scss';
import React from 'react';
import uploadVideo from '../../assets/Images/Upload-video-preview.jpg';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Upload({ history }) {

  const submitHandler = (event) => {
    event.preventDefault();

    axios.post('/videos', {
      title: event.target.title.value,
      description: event.target.description.value,
    })
      .then(response => {
        alert('Video uploaded successfully');

        history.push('/')
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
          <img className="upload__video-thumbnail" src={uploadVideo} alt="Upload vidoe thumbnail" />
        </div>

        <form className="upload__form" onSubmit={submitHandler}>

          <div className="upload__form">
            <label for="title" className="upload__form-title">TITLE YOUR VIDEO</label>
            <input className="upload__form-box" id="" name="title" placeholder="Add a title to your video"></input>
          </div>

          <div className="upload__form">
            <label for="description" className="upload__form-title">ADD A VIDEO DESCRIPTION</label>
            <input className="upload__form-box-description" name="description" placeholder="Add a description to your video"></input>
          </div>

          <div className="upload__button">
            <button className="upload__button-publish form-button" type='submit'>PUBLISH</button>
          </div>

          <Link to='/' className="upload__button-cancel form-button">
            CANCEL
          </Link>

        </form>
      </div>

    </div>
  )
}

export default Upload;