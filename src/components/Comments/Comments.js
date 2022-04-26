import './Comments.scss';
import CommentsSection from '../CommentsSection/CommentsSection'
import avatar from "../../assets/Images/Mohan-muruge.jpg";


function Comments({ comments }) {

  return (

    <section className="comments">

      <h2 className="comments__count">{comments.length} Comments</h2>

      <div className="comments__container">
        <h3 className="comments__heading">JOIN THE CONVERSATION</h3>
        <img className="comments__image avatar" src={avatar} alt="Mohan" />

        <form className="comments__form" action="" method="">
          <textarea className="comments__form-box" row="5" id="comments__form-comment" name="comments__form-comment" placeholder="Add a new comment"></textarea>
          <button className="comments__form-button form-button">
            COMMENT
          </button>
        </form>
      </div>

      <div className="comments-section">

        {comments.map(comment => {
          return (
            <CommentsSection
              key={comment.id}
              name={comment.name}
              timestamp={comment.timestamp}
              comment={comment.comment}
            />
          )
        })}
      </div>
    </section>
  )
}


export default Comments;
