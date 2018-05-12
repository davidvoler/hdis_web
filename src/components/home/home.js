import React from 'react';
import { connect } from 'react-redux';
import { requestLessonList } from '../../actions/editor';
import { purchaseContent } from '../../actions/home';

import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import ReactPlayer from 'react-player';
import RaisedButton from 'material-ui/RaisedButton';
class Home extends React.Component {

  handleClick = () => {
    this.props.purchase("18967551370690674158069970659954339750478725120872368724084379552794947487668");
  };
  render() {
    return (
      <div>
        <h2> Home </h2>

        <List>
          {this.props.list.lessons.map(lesson => <ListItem key={lesson.id}>
            <ReactPlayer url={lesson.videoURL} controls  height={195} width={320} />
            <RaisedButton onClick={this.handleClick} > Purchase</RaisedButton>
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
    fetchLessons: () => dispatch(requestLessonList({})),
    purchase: (contentId) => dispatch(purchaseContent(contentId))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
