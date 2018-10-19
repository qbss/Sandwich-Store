import React, { Component } from 'react';
import style from './Item.module.css'

class Item extends Component {

  render() {
    return (
      <div className="col-6">
        <div
          className={`${style.name} media m-3 shadow`}
          onClick={this.props.onClick}
        >
          <img
            className={style.image}
            src={this.props.imgSrc}
            alt={this.props.name + " sandwich"}
            />
          <div className="media-body">
            <h1>{this.props.name}</h1>
            <h3>{"$" + this.props.price}</h3>
          </div>
        </div>
      </div>
    );
  }
};

export { Item };