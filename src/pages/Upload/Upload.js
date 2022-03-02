import './Upload.scss';
import React from 'react';
import uploadVideo from '../../assets/Images/Upload-video-preview.jpg';

function Upload() {
  return (
    <div className="upload" >
<<<<<<< HEAD
      <h1>Upload Video</h1>
      <h3>VIDEO THUMBNAIL</h3>
      <img src={uploadVideo} alt="Upload vidoe thumbnail" />

      <form>
        <div>
          <h3>TITLE YOUR VIDEO</h3>
          <textarea className="" id=""
            name="" placeholder="Add a title to your video">
          </textarea>
        </div>
        <div>
          <h3>ADD A VIDEO DESCRIPTION</h3>
          <textarea className="" row="5" id=""
            name="" placeholder="Add a description to your video">
          </textarea>
        </div>

        <button className="form-button">
          <img class="" src="" alt="" />
          PUBLISH
          </button>
          <button className="">
          CANCEL
          </button>
      </form>




=======

      <h1 className="upload__heading">Upload Video</h1>

      <div className="upload__details">

        <div className="upload__details-video">
          <h3 className="upload__details-video-heading">VIDEO THUMBNAIL</h3>
          <img className="upload__details-video-thumbnail" src={uploadVideo} alt="Upload vidoe thumbnail" />
        </div>

        <form className="upload__details-form">
          <div className="upload__details-form">
            <h3 className="upload__details-form-title">TITLE YOUR VIDEO</h3>
            <textarea className="upload__details-form-box" id="" name="" placeholder="Add a title to your video"></textarea>
          </div>
          <div className="upload__details-form">
            <h3 className="upload__details-form-title">ADD A VIDEO DESCRIPTION</h3>
            <textarea className="upload__details-form-box" id="" name="" placeholder="Add a description to your video"></textarea>
          </div>
        </form>

      </div>

      <div className="upload__button">
      <button className="upload__button-publish form-button">
        <img className="" src="" alt="" />
        PUBLISH
      </button>
      <button className="upload__button-cancel form-button">
        CANCEL
      </button>
      </div>
>>>>>>> components

    </div>
  )
}

export default Upload;