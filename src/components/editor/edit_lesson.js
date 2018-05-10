import React from 'react';
import { connect } from 'react-redux';
import { updateLesson } from '../../actions/editor';

class EditLesson extends React.Component {
	render() {
		return (
      <div>
           <h2> EditLesson </h2>
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
