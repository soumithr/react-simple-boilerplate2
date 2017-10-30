import React, {Component} from 'react';
import Question from './Question.jsx';

class Questions extends Component {

	state = {
		count: 0
	}

	updateCount = (change) => {
		if(this.state.count === this.props.questions.length || this.state.count + change === this.props.questions.length)
			this.props.updateSend();
		this.setState({
			count: this.state.count + change
		})
	}

	renderQuestions = () => {
		let list = [];
		list = this.props.questions.map((question, id) => {
			return (
				<Question key={id} index={id} question={question.question} options={question.options} callBack={this.updateCount} />
			)
		})
		return list;
	}

  render() {
    return (
      <div className={"flex-column questions"}>
      	{this.renderQuestions()}
      </div>
    );
  }
}
export default Questions;
