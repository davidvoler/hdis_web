import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import { Link } from 'react-router-dom'
const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;

/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */
class BottomNavigationExampleSimple extends Component {
  state = {
    selectedIndex: 0,
  };

  select = (index) => this.setState({selectedIndex: index});

  render() {
    return (
      <Paper zDepth={1}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
          <Link to="/" >
          <BottomNavigationItem
            label="Home"
            icon={recentsIcon}
            onClick={() => this.select(0)}
          />
          </Link>
          <Link to="/dashboard" >
          <BottomNavigationItem
            label="Dashboard"
            icon={favoritesIcon}
            onClick={() => this.select(1)}
          />
          </Link>

          <Link to="/editor" >
          <BottomNavigationItem
            label="Editor"
            icon={favoritesIcon}
            onClick={() => this.select(1)}
          />
          </Link>
          
          <Link to="/create_lesson" >
          <BottomNavigationItem
            label="Create"
            icon={favoritesIcon}
            onClick={() => this.select(1)}
          />
          </Link>

        </BottomNavigation>
      </Paper>
    );
  }
}

export default BottomNavigationExampleSimple;