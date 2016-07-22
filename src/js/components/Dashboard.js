import React, { Component, PropTypes } from 'react'

export default class Dashboard extends Component {

  render() {
    const {
      selected, isFetching, items, renderItem
    } = this.props

    const isEmpty = items.length === 0
    
    if (selected === null) {
      return <p><i>No Dashboard selected</i></p>
    }
    
    if (isEmpty && isFetching) {
      return <p><i>Loading...</i></p>
    }

    if (isEmpty && !isFetching) {
      return (
      <p>
      Selected: {selected}
      <br/>
      <i>There are no widgets in this dashboard.</i>
      </p>
      )
    }

    return (
      <div>
        Showing {items.length} widgets.
        {items.map(renderItem)}
      </div>
    )
  }
}

Dashboard.propTypes = {
  renderItem: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired
}

Dashboard.defaultProps = {
  isFetching: true
}
