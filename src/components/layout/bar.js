import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';

function handleClick() {
  alert('onClick triggered on the title component');
}

const styles = {
  title: {
    cursor: 'pointer',
  },
};

/**
 * This example uses an [IconButton](/#/components/icon-button) on the left, has a clickable `title`
 * through the `onClick` property, and a [FlatButton](/#/components/flat-button) on the right.
 */
const IconButtonBar = () => (
  <AppBar
    title={<span style={styles.title}>HDIS Hakathon</span>}
    onTitleClick={handleClick}
    iconElementLeft={<FlatButton label="Home" />}
    iconElementRight={<FlatButton label="Dashboard" />}
  />
);

export default IconButtonBar;