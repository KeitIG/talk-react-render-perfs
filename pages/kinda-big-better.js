import React from 'react';
import uniqid from 'uniqid';
import PropTypes from 'prop-types';

import BetterList from '../components/BetterList.react';
import Menu from '../components/Menu.react';

import '../styles/main.scss';

const LIST_LENGTH = 100000;


class SelectableList extends React.Component {
  static propTypes = {
    list: PropTypes.array,
  }

  static async getInitialProps() {
    const list = [];
    for (let i = 0; i < LIST_LENGTH; i++) {
      list.push({
        _id: uniqid(),
        index: i,
      });
    }

    return {
      list,
    };
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="page page-list">
        <Menu />
        <BetterList items={this.props.list} />
      </div>
    );
  }
}

export default SelectableList;
