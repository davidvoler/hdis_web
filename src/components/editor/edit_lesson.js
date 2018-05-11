import React from 'react';
import { connect } from 'react-redux';
import { updateLesson, requestLessonById } from '../../actions/editor';
import ReactPlayer from 'react-player';

class EditLesson extends React.Component {
  render() {
    return (
      <div>
        <h1>Edit Lesson</h1>
        <ReactPlayer url={this.props.edit.lesson.videoURL} />
      </div>
    );
  }
  componentWillMount() {
    console.log(this.props.match.params.id);
    this.props.requestLessonById(this.props.match.params.id);
  }
}

const mapStateToProps = (state) => ({
  edit: state.editor.edit
});
const mapDispatchToProps = (dispatch) => {
  return {
    updateLesson: (data) => dispatch(updateLesson(data)),
    requestLessonById: (id) => dispatch(requestLessonById(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(EditLesson);
