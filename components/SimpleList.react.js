import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classname';


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
          {this.props.items.map((item) => {
            const selected = this.state.selected.includes(item._id);

            return (
              <div
                key={item._id}
                className={classname('item', { selected })}
                onMouseDown={() => {
                  this.select(item._id);
                }}
              >
                {item._id}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default List;
