import React from 'react';
import { connect } from 'react-redux';
import { requestLessonList } from '../../actions/editor';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
class Editor extends React.Component {
	render() {
		return (
      <div>
           <h2> Editor </h2>
        <Table>
        <TableHeader>
          <TableRow>
            <TableRowColumn>id</TableRowColumn>
            <TableRowColumn>Name</TableRowColumn>
            <TableRowColumn>Video</TableRowColumn>
            <TableRowColumn>Edit</TableRowColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {this.props.list.lessons.map(lesson => 
            <TableRow key={lesson._id}>
            <TableRowColumn>{lesson._id}</TableRowColumn>
            <TableRowColumn>{lesson.Title}</TableRowColumn>
            <TableRowColumn>{lesson.videoURL}</TableRowColumn>
            <TableRowColumn><Link to={"/edit/" + lesson._id } ><RaisedButton >Edit</RaisedButton></Link></TableRowColumn>
            </TableRow>
          )}
          
        </TableBody>
      </Table>
      </div>
		);
	}
    componentWillMount() {
        console.log("componenTableRowColumnidMount");
        this.props.fetchLessons();
    }
}

const mapStateToProps = (state) => ({
  list: state.editor.list,
});
const mapDispatchToProps = (dispatch) => {
    return {
        fetchLessons: () => dispatch(requestLessonList({}))
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(Editor);
