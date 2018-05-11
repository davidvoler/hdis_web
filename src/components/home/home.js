import React from 'react';
import { connect } from 'react-redux';
import { requestLessonList } from '../../actions/editor';

import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import ReactPlayer from 'react-player';
import RaisedButton from 'material-ui/RaisedButton';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h2> Home </h2>

        <List>
          {this.props.list.lessons.map(lesson => <ListItem key={lesson.id}>
            <ReactPlayer url={lesson.videoURL} />
            <RaisedButton > Purchase</RaisedButton>
          </ListItem>)}
        </List>
      </div>
    );
  }
  componentWillMount() {
    this.props.fetchLessons();
  }
}

const mapStateToProps = (state) => ({
  list: state.editor.list
});
const mapDispatchToProps = (dispatch) => {
  return {
    fetchLessons: () => dispatch(requestLessonList({}))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
