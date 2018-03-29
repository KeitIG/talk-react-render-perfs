import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Item from '../components/BetterListItem.react';

import chunkArray from '../utils/chunk-array';


const ROW_HEIGHT = 32; // HACK this would be great to not have this
const CHUNK_LENGTH = 20;
const TILES_TO_DISPLAY = 5;
const TILE_HEIGHT = ROW_HEIGHT * CHUNK_LENGTH;

class SmartList extends Component {
  static propTypes = {
    items: PropTypes.array,
  }

  constructor(props) {
    super(props);

    const chunkedItems = chunkArray(props.items, CHUNK_LENGTH);

    this.state = {
      selected  : [],
      items: chunkedItems,
      scrollTop : 0,
    };

    this.scrollList = this.scrollList.bind(this);
    this.select = this.select.bind(this);
    this.buildTiles = this.buildTiles.bind(this);
  }

  componentWillUpdate() {
    console.time('<List> render time');
  }

  componentDidUpdate() {
    console.timeEnd('<List> render time');
  }

  scrollList(e) {
    this.setState({ scrollTop : e.target.scrollTop });
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

  buildTiles(items) {
    const { selected } = this.state;
    const tilesScrolled = Math.floor(this.state.scrollTop / TILE_HEIGHT);

    return items.splice(tilesScrolled, TILES_TO_DISPLAY).map((chunk, indexChunk) => {
      const list = chunk.map((item) => {
        // const trackRowIndex = (tilesScrolled + indexChunk) * CHUNK_LENGTH + index;

        return(
          <Item
            key={item._id}
            item={item}
            selected={selected.includes(item._id)}
            onMouseDown={this.select}
          />
        );
      });

      const translationDistance = (tilesScrolled * ROW_HEIGHT * CHUNK_LENGTH) + (indexChunk * ROW_HEIGHT * CHUNK_LENGTH);

      const tracksListTileStyles = {
        transform: `translate3d(0, ${translationDistance}px, 0)`,
      };

      return (
        <div className='list-tile' key={`smart-tile-${chunk[0]._id}`} style={tracksListTileStyles}>
          { list }
        </div>
      );
    });
  }

  render() {
    const { items } = this.state;

    return (
      <div className="list-container" onScroll={this.scrollList}>
        <div
          className="list smart"
          style={{ height : items.length * ROW_HEIGHT }}
        >
          {this.buildTiles([...items])}
        </div>
      </div>
    );
  }
}

export default SmartList;
