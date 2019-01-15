import React, { Component } from 'react';
import Todoitems from './Todoitems';


class Footer extends Component {

  render() {

      return this.props.data.map((data) =>(
        <Todoitems key={data} data={data} />
      ));
  }
}
export default Footer;
