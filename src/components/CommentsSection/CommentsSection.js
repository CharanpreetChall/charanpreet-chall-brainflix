import './CommentsSection.scss';


function CommentSection ({name, timestamp, comment}){

const newDate = new Date(timestamp);

const options = { month: '2-digit', day: '2-digit', year: 'numeric' };
const formattedDate = new Intl.DateTimeFormat("en-US", options).format(newDate);
  
return (

<div className="comments-section__item">
    <div className="comments-section__item-image"></div>
<div className="comments-section__item-details">
        <h2 className="comments-section__name">{name}</h2>
        <h3 className="comments-section__date">{formattedDate}</h3>
        <p className="comments-section__comment paragraph">{comment}</p>
    </div>
</div>

  )}


export default CommentSection;