import React from 'react';
import './App.css';

export default React.createClass({
  getInitialState: function () {
    return{
      count: 0,
      clss: 'button'

    }
  },

  click: function() {
      this.setState({
        count: this.state.count + 1,
        clss: 'clicked'
    })
    setTimeout(function(){
      this.setState({
      clss: 'button'
    })
    }.bind(this),150)

  },

  render: function() {
    return ( 
        <div>
          <button className={this.state.clss} onClick={this.click}>{this.state.count} {this.state.count === 1 ? 'like' : 'likes'}</button>
        </div>
      )
  }
})
