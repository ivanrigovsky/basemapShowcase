import React from 'react';
import './Sidebar.styl';
import NavBar from './navBar/NavBar.jsx';
import FilterPane from './analysisPane/FilterPane.jsx';
import VisualizationPane from './analysisPane/VisualizationPane.jsx';
import HomePane from './homePane/HomePane.jsx';
import RandomPane1 from './randomPane1/RandomPane1.jsx';

class Sidebar extends React.Component {
  constructor(props){
    super();
    this.state = {
      activePane: 'home',
      counts: {
        filter: undefined
      }
    }
    this.handleNavBarClick = this.handleNavBarClick.bind(this);
    this.handleCountUpdate = this.handleCountUpdate.bind(this);
  }

  handleNavBarClick(paneId){
    this.setState({
      activePane: paneId
    });
  }

  handleCountUpdate(componentName, count){
    var newCounts = Object.assign({}, this.state.counts);
    newCounts[componentName] = count;
    this.setState({
      counts: newCounts 
    });
  }

  render() {
    return (
      <div className="sidebar">
        <NavBar handleClick={this.handleNavBarClick} counts={this.state.counts} />
        {this.renderActivePane()}
      </div>
    );
  }

  renderActivePane(){
    const transitionDuration = 250
    switch(this.state.activePane){
      case'home':
        return <HomePane />;
      case 'filter':
        return <FilterPane propsMd={this.props.propsMd} transitionDuration={transitionDuration} handleCountUpdate={this.handleCountUpdate} />;
      case 'visualize':
        return <VisualizationPane propsMd={this.props.propsMd} transitionDuration={transitionDuration}/>;
      case 'settings':
        return <RandomPane1 />;
      default:
        return <HomePane />;
    }
  }
}
 export default Sidebar;