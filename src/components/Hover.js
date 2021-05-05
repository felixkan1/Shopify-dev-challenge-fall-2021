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
    const {children, resultList} = this.props;
    const {hovering} = this.state;
    const mql = window.matchMedia('(min-width: 768px)');
    return (
      <div style={{width: resultList&&mql.matches ? '60%' : '100%'}} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}
      >
        {children(hovering)}
      </div>
    )
  }

} 