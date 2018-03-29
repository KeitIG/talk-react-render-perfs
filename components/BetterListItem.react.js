import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classname';


class List extends React.PureComponent {
  static propTypes = {
    item: PropTypes.any,
    onMouseDown: PropTypes.func,
    selected: PropTypes.bool,
  }

  constructor(props) {
    super(props);
    this.onMouseDown = this.onMouseDown.bind(this);
  }

  onMouseDown() {
    this.props.onMouseDown(this.props.item._id);
  }

  render() {
    const { selected, item } = this.props;

    const classes = classname('item', {
      selected,
    });

    return (
      <div className={classes} onMouseDown={this.onMouseDown}>
        {item._id}
      </div>
    );
  }
}

export default List;
