import './Upload.scss';
import React from 'react';
import uploadVideo from '../../assets/Images/Upload-video-preview.jpg';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Upload() {
  return (
    <div className="upload" >

      <h1 className="upload__heading">Upload Video</h1>

      <div className="upload__details">

        <div className="upload__video">
          <h3 className="upload__video-heading">VIDEO THUMBNAIL</h3>
          <img className="upload__video-thumbnail" src={uploadVideo} alt="Upload vidoe thumbnail" />
        </div>

        <form className="upload__form">
          <div className="upload__form">
            <h3 className="upload__form-title">TITLE YOUR VIDEO</h3>
            <textarea className="upload__form-box" id="" name="" placeholder="Add a title to your video"></textarea>
          </div>
          <div className="upload__form">
            <h3 className="upload__form-title">ADD A VIDEO DESCRIPTION</h3>
            <textarea className="upload__form-box-description" placeholder="Add a description to your video"></textarea>
          </div>
        </form>

      </div>

      <div className="upload__button">
        <Link to='/' onClick={() => alert('Video successfully uploaded')}
          className="upload__button-publish form-button">
          <img className="" src="" alt="" />
          PUBLISH
        </Link>
        <Link className="upload__button-cancel form-button">
          CANCEL
        </Link>
      </div>

    </div>
  )
}

export default Upload;