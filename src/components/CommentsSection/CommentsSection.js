import './CommentsSection.scss';


function CommentSection ({name, timestamp, comment}){

return (

<div className="comments-section__item">
    <div className="comments-section__item-image"></div>
<div className="comments-section__item-details">
        <h2 className="comments-section__name">{name}</h2>
        <h3 className="comments-section__date">{timestamp}</h3>
        <p className="comments-section__comment paragraph">{comment}</p>
    </div>
</div>

  )}


export default CommentSection;