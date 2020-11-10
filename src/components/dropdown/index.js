import './style.css';
import {Component} from 'react';

export default class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.state ={
      isVisible: false,
    };
  }

  toggle = () => {
    this.setState({isVisible: !this.state.isVisible})
  }

  render() {
    const { list } = this.props;
    const {isVisible} = this.state;
    return (
      <div className="dropdown">
        <button 
          type="button" 
          className="toggle"
          onClick={this.toggle}
        >
          Click me!
        </button>
        <ul className={`dropdownList ${isVisible ? 'visible' : ''}`}>
          {list.map((item, index) => (
            <li 
              key={`${item}-${String(index)}`} 
              className="dropdownListItem"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}