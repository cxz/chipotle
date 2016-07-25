import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './DashboardApp.scss';

import Picker from '../components/Picker';
import Dashboard from '../components/Dashboard';
import Widget from '../components/Widget';

import * as DashboardActions from '../actions/dashboard';

class DashboardApp extends Component {
  constructor(props) {
    super(props)
    this.handleSelectClick = this.handleSelectClick.bind(this)
  }
  
  componentWillMount() {
    //empty
  }

  componentDidMount() {
    const { actions, selected } = this.props;
    actions.loadDashboards();
  }
  
  componentWillReceiveProps(nextProps) {
    const { actions } = this.props;
    if (nextProps.selected !== this.props.selected) {
      actions.selectDashboard(nextProps.selected)
    }
  }
  
  componentDidReceiveProps() {
  }
  
  handleSelectClick(dashboardId) {
   const { actions } = this.props;
   actions.selectDashboard(dashboardId);
  }
  
  renderDashboard (widget) {
    return (
      <div>
        {widget.id}
        <Widget widget={widget} key={widget.id}/>
      </div>
    )
  }

  render () {
    const { isFetching, selected, dashboards, widgets } = this.props;
    return (
      <div className="dashboardApp">
        <h1>Chipotle :-)</h1>
        <Picker value={selected}
              onChange={this.handleSelectClick}
              options={dashboards} />
        <Dashboard 
          isFetching={isFetching}
          selected={selected}
          renderItem={this.renderDashboard}
          items={widgets}
          />
      </div>
    );
  }
}

DashboardApp.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  selected: PropTypes.string,
  dashboards: PropTypes.array.isRequired,
  widgets: PropTypes.array.isRequired,
};

function mapStateToProps(state, ownProps) {
  
  const {
    entities: { dashboards, widgets },
    dashboards: d
  } = state
  
  
  const selected = d.selected
  const widgetIds = selected === null ? [] : dashboards[selected].widgets;
  
  return {
    isFetching: d.isFetching,
    selected: selected,
    widgets: widgetIds.map(id => widgets[id]),
    dashboards: Object.values(dashboards).map(i => i.name)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(DashboardActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardApp);

