import React from 'react';
import { connect } from 'react-redux';

class Home extends React.Component {
	render() {
		return (
      <div>
          <h2> Home </h2>
      </div>
		);
	}
    componentWillMount() {
        console.log("componentDidMount")
    }
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => {
    return { };
};
export default connect(mapStateToProps,mapDispatchToProps)(Home);
