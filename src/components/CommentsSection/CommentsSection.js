import './CommentsSection.scss';


function CommentSection({ name, timestamp, comment }) {

  const date = new Date(timestamp)
  const formattedDate = date.toLocaleDateString('en-US')

  return (

    <div className="comments-section__item">
      <div className="comments-section__item-image"></div>
      <div className="comments-section__item-details">
        <h2 className="comments-section__name">{name}</h2>
        <h3 className="comments-section__date">{formattedDate}</h3>
        <p className="comments-section__comment paragraph">{comment}</p>
      </div>
    </div>

  )
}


export default CommentSection;