import React from 'react';
import PropTypes from 'prop-types';

import Item from './BetterListItem.react';


class List extends React.Component {
  static propTypes = {
    items: PropTypes.array,
  }

  constructor(props) {
    super(props);

    this.state = {
      selected: [],
    };

    this.select = this.select.bind(this);
  }

  componentWillUpdate() {
    console.time('<List> render time');
  }

  componentDidUpdate() {
    console.timeEnd('<List> render time');
  }

  select(_id) {
    const selected = [...this.state.selected];

    if (!this.state.selected.includes(_id)) {
      selected.push(_id);
    } else {
      selected.splice(selected.indexOf(_id), 1);
    }

    this.setState({
      selected,
    });
  }

  render() {
    return (
      <div className='list-container'>
        <div className='list'>
          {this.props.items.map((item) => (
            <Item
              key={item._id}
              item={item}
              selected={this.state.selected.includes(item._id)}
              onMouseDown={this.select}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default List;
