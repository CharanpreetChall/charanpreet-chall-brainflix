import './Comments.scss';
import CommentsSection from '../CommentsSection/CommentsSection'
import avatar from "../../assets/Images/Mohan-muruge.jpg";
import commentIcon from '../../assets/Icons/add_comment.svg';



function Comments({comments}) {

  let commentCounter= [0]
  
  // for(let i=0; i < commentSection.length)
  
  return ( 
    
    <section className="comments">

    {/* {comments.forEach(comment => {
      commentCounter++
    })} */}



    {/* <h2 className="comments__count">{commentCounter} Comments</h2> */}
    <h2 className="comments__count">3 Comments</h2> 
    {/* //array.length for the comments */}
    <div className="comments__container">
        <h3 className="comments__container-heading">JOIN THE CONVERSATION</h3>
        <img className="comments__container-image avatar" src={avatar} alt="Mohan" />

        <form className="comments__form" action="" method="">
          <textarea className="comments__form-comment-box" row="5" id="comments__form-comment" name="comments__form-comment" placeholder="Add a new comment"></textarea>
          <button className="comments__form-button form-button">
            <img className="comments__form-button-icon button-icon" src={commentIcon} alt="commentIcon"/>
            COMMENT
          </button>
        </form>
    </div> 

    <div className="comments-section">

     {comments.map(comment =>{
       return (
         <CommentsSection 
         key= {comment.id}
         name= {comment.name} 
         timestamp= {comment.timestamp} 
         comment= {comment.comment}
         />
       )
     })}
     </div>
</section>
  )
}


export default Comments;