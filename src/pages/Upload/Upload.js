import './Upload.scss';
import React from 'react';
import uploadVideo from '../../assets/Images/Upload-video-preview.jpg';

function Upload() {
  return (
    <div className="upload" >
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





    </div>
  )
}

export default Upload;