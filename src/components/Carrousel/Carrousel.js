import React from "react";
import './Carrousel.css'

class Carrousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { current: null };
    this.previousPicHandler = this.previousPicHandler.bind(this)
    this.nextPicHandler = this.nextPicHandler.bind(this)

  }

  componentDidMount() {
    this.setState({ current: this.props.current || 0 });

  }

  previousPicHandler(e) {
      e.stopPropagation()
    const currentImage = this.state.current;
    const lastImage = this.props.images.length -1;

    if (currentImage <= 0) {
      this.setState({ current: lastImage });
    } else {
      this.setState({ current: currentImage - 1 });
    }
  }

  nextPicHandler(e) {
    e.stopPropagation()
    const currentImage = this.state.current;
    const lastImage = this.props.images.length -1;

    console.log('CURRENT ', currentImage, 'LAST ', lastImage);

    if (currentImage >= lastImage) {
      this.setState({ current: 0 });
    } else {
      this.setState({ current: currentImage + 1 });
    }
  }

  render() {
    return (
      this.state.current >= 0 && (
        
        <section className="carrousel-container">
          
          {this.props.images[this.state.current] && (
            <article className="Carrousel">
              <div className="moving-icn moving-prev" onClick={this.previousPicHandler}>
                <i>{"<"}</i>
              </div>
              
              <img
                src={this.props.images[this.state.current]}
                alt={`${this.props.name}`}
                className="carrousel-image"
              />
              
              <div className="moving-icn moving-next" onClick={this.nextPicHandler}>
              <i>{">"}</i>
              </div>
            
            </article>
          )}

          
          {!this.props.images[this.state.current] && (
            <article className="Carrousel no-image">
              <p>No image available</p>
            </article>
          )}
        </section>
      )
    );
  }
}

export default Carrousel;
