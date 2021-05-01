import React, {Component} from 'react';

const styles = {
  hoverResult: {
    width: '50%'
  }
}
export class Hover extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hovering: false
    }

    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }

  handleMouseOver = () => {this.setState({hovering: true})};
  handleMouseOut = () => {this.setState({hovering: false})};

  render() {
    const {children, resultList} = this.props;
    const {hovering} = this.state;
    return (
      <div style={{width: resultList ? '50%' : '100%'}} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}
      >
        {children(hovering)}
      </div>
    )
  }

} 