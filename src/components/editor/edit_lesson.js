import React from 'react';
import { connect } from 'react-redux';
import { updateLesson } from '../../actions/editor';
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
        console.log("componentDidMount");
    }
}

const mapStateToProps = (state) => ({
  lesson: state.editor.edit
});
const mapDispatchToProps = (dispatch) => {
    return {
      updateLesson: (data) => dispatch(updateLesson(data))
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(EditLesson);
