import React from 'react';
import { connect } from 'react-redux';
import { requestStudents, requestContents, requestPayments } from '../../actions/editor';

class CreateLesson extends React.Component {
	render() {
		return (
      <div>
           <h2> CreateLesson </h2>
      </div>
		);
	}
    componentWillMount() {
        console.log("componentDidMount")
    }
}

const mapStateToProps = (state) => ({
  lesson: state.editor.create,
});
const mapDispatchToProps = (dispatch) => {
    return {
      createLesson: (data) => dispatch(createLesson(data))
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(CreateLesson);
