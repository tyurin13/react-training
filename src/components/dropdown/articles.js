import {Component} from 'react';

export default class Article extends Component {
  constructor(props) {
    super(props)
    
    this.state ={
      isOpen: false,
    }
  }

  render(){
    const {article, color, size} = this.props;
    const text = this.state.isOpen && <section>{article.description}</section>
    return (
      <div className="articleOne">
        <h3 className="articleTitle" style={{color: `${color}`, fontSize: `${size}px`}}>
          {article.title} 
          <button onClick={this.handleClick} className="button">Read More</button>
        </h3>
        
        <span>{text}</span>
      </div>
    )
  }

  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
}

