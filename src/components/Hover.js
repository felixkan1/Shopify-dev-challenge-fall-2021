import React, {Component} from 'react';

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
    const {children} = this.props;
    const {hovering} = this.state;
    return (
      <div onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}
      >
        {children(hovering)}
      </div>
    )
  }

} 