import React, { Component } from 'react';

import MG from 'metrics-graphics';
import './Widget.scss'; 


export default class Widget extends Component {
    //TODO: cxz -- check last Updated to decide     
    //shouldComponentUpdate() {
    //}
    
  componentDidMount() {
    const { widget } = this.props;
    MG.data_graphic({
      title: "Widget " + widget.id,
      description: "This is a simple line chart.",
      data: [
    {
        "year": "1945",
        "sightings": 6
    },
    {
        "year": "1946",
        "sightings": 8
    },
    {
        "year": "1947",
        "sightings": 34
    },
    {
        "year": "1948",
        "sightings": 8
    },
    {
        "year": "1949",
        "sightings": 15
    },
    {
        "year": "1950",
        "sightings": 25
    },
    {
        "year": "1951",
        "sightings": 20
    },
    {
        "year": "1952",
        "sightings": 48
    }],
      width: 500,
      height: 200,
      right: 40,
      target: this.target,
      x_accessor: 'year',
      y_accessor: 'sightings',
      show_tooltips: false
    });
  }

  render() {
    const { widget } = this.props;
    return <div ref={(ref) => this.target = ref} key={widget.id}></div>;
  }
}
