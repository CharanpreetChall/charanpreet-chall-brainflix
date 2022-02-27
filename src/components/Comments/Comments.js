import './Comments.scss';
import CommentsSection from '../CommentsSection/CommentsSection'
import avatar from "../../assets/Images/Mohan-muruge.jpg"

function Comments({comments}) {
  
  let commentCounter= [0]
  
  return ( 
    <section className="comments">

    {comments.forEach(comment => {
      commentCounter++
    })}

    <h2 className="comments__count">{commentCounter} Comments</h2>

    <div className="comments__container">
        <h3 className="comments__container-heading">JOIN THE CONVERSATION</h3>
        <img className="comments__container-image avatar" src={avatar} alt="Mohan" />

        <form className="comments__form" action="" method="">
          <textarea className="comments__form-comment-box" rows="5" id="comments__form-comment" name="comments__form-comment" placeholder="Add a new comment"></textarea>
          <button className="comments__form-button">COMMENT</button>
        </form>
    </div> 

    <div className="comments-section__item">

     {comments.map(comment =>{
       return (
         <CommentsSection 
         key= {comment.name}
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