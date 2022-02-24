import './CommentsSection.scss';

function CommentSection() {
  return (
  <section className="comment-section">
          <div className="comments-section__item">
              <img className="comments-section__image" src="" />
              <div className="comments-section__date">08/09/2021</div>
              <div className="comments-section__details">
                  <h4 className="comments-section__name">Micheal Lyons</h4>
                  <p className="comments-section__comment paragraph">They BLEW the ROOF off at their last event, once everyone started
                      figuring out they were going. This is still simply the greatest opening of an event I have EVER witnessed.
                  </p>
              </div>
          </div>
          <div className="comments-section__item">
              <img className="comments-section__image" src="" />
              <div className="comments-section__date">07/15/2021</div>
              <div className="comments-section__details">
                  <h4  className="comments-section__name">Gary Wong</h4>
                  <p className="comments-section__comment paragraph">Every time I see him shred I feel so motivated to get off my couch and
                      hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!
                  </p>
              </div>
          </div>
          <div className="comments-section__item">
              <img className="comments-section__image" src="" />
              <div className="comments-section__date">07/11/2021</div>
              <div className="comments-section__details">
                  <h4 className="comments-section__name">Theodore Duncan</h4>
                  <p className="comments-section__comment paragraph">How can someone be so good!!! You can tell he lives for this and loves to
                      do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!</p>
              </div>
          </div>
      </section>

  )
}

export default CommentSection;