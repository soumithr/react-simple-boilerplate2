import React, {Component} from 'react';
import '../styles/question.scss';

class Question extends Component {

	state = {
		checked: -1,
		correct: false
	}
	
	onCheck = (id, correct) => {
		if(this.state.correct !== correct) {
			(correct)?this.props.callBack(1):this.props.callBack(-1);
		}

		this.setState({
			checked: id,
			correct
		})
	}



	renderOptions() {
		let list = [];
		list = this.props.options.map((option) => {
			return (
				<div className="option">
					<div>
						<input type={"radio"} checked={option.id === this.state.checked} onClick={() => this.onCheck(option.id, option.correct)}/>
						{option.text}
					</div>
					<div className={(option.correct)?"correct":"wrong"}>{(option.id === this.state.checked)?option.remark:""}</div>
				</div>
			)
		});
		return list;
	}

  render() {
    return (
      <div className={"flex card"}>
      	<div className={"title"}>{this.props.question}</div>
      	<div className={"options"}>{this.renderOptions()}</div>
      </div>
    );
  }
}
export default Question;
