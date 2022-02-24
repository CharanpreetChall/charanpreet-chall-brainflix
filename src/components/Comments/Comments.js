import './Comments.scss';

function Comments() {
  return (
    <section className="comments">
    <h2 className="comments__number">3 Comments</h2>
    <div className="comments__box">
        <h3 className="comments__box-heading">Join the Conversation</h3>
        <img className="comments__box-image" src="./assets/images/Mohan-muruge.jpg" />
        <form className="comments__form" action="" method="">
            <label className="comments__form-comment" for="comments__form-comment">COMMENT</label>
            <textarea className="comments__form-comment-box" max="10" id="comments__form-comment" name="comments__form-comment" placeholder="Add a new comment"></textarea>
            <button className="comments__form-button">COMMENT</button>
        </form>
    </div> 
</section>
  )
}

export default Comments;