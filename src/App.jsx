import React, {Component} from 'react';
import Header from './Header.jsx';
import Questions from './Questions.jsx';
import Footer from './Footer.jsx';
import '../styles/application.scss'


class App extends Component {

    constructor() {
    super();
    this.state = {
        completed: false,
        mailId : "",
        employeeId : ""
    };
    
    this.handleChange = this.handleChange.bind(this);
  }

	getData = () => {
		return {
            title: "IDP Quiz",
            questions: [
                {
                    question: "What does IDP stand for?",
                    options: [ 
                    {
                        id : 1,
                        text: "Internal Development Project",
                        correct: false,
                        remark: "Oops! That’s the wrong answer. Try Again!"
                    },
                    {
                        id : 2,
                        text: "Integrated Developer Pool",
                        correct: false,
                        remark: "Are you sure? Check again!"
                    },
                    {
                        id : 3,
                        text: "Individual Development Plan",
                        correct: true,
                        remark: "Bang on! That's the right answer!"
                    },
                    {
                        id : 4,
                        text: "Integrated Distribution Platform",
                        correct: false,
                        remark: "Too optimistic! Try again!"
                    }
                    ]
                },
                {
                    question: "Why is IDP necessary?",
                    options: [ 
                    {
                        id : 1,
                        text: "Aligns individual career aspirations and Flipkart’s business needs",
                        correct: false,
                        remark: "Absolutely! But it doesn't end there. Go for more."
                    },
                    {
                        id : 2,
                        text: "Ensures effective developmental feedback leads to tangible progress",
                        correct: false,
                        remark: "Definitely yes. But IDP helps with much more. Try again."
                    },
                    {
                        id : 3,
                        text: "Enables development oriented culture at Flipkart",
                        correct: false,
                        remark: "Surely it does. But IDP can enable more than that. Explore again."
                    },
                    {
                        id : 4,
                        text: "All of the above",
                        correct: true,
                        remark: "Woah!! There's so much an IDP can do for you!"
                    },
                    ]
                },
                 {
                    question: "Ownership of drafting the IDP lies with?",
                    options: [ 
                    {
                        id : 1,
                        text: "Manager only",
                        correct: false,
                        remark: "Are you sure? Don’t you want to involve yourself in something that is critical to you? Try again."
                    },
                    {
                        id : 2,
                        text: "Flipster only",
                        correct: false,
                        remark: "Great to do it on your own; but little guidance is not bad at all. Try again."
                    },
                    {
                        id : 3,
                        text: "Flipster takes the initiative to draft IDP with inputs from Manager",
                        correct: true,
                        remark: "Bingo! You and your manager can work out a formidable plan!"
                    },
                    {
                        id : 4,
                        text: "HR",
                        correct: false,
                        remark: "Outsourcing your career? Bad idea..Try again!"
                    }
                    ]
                },
                {
                    question: "Your manager’s role in meeting your IDP targets is",
                    options: [ 
                    {
                        id : 1,
                        text: "To coach, guide and mentor",
                        correct: false,
                        remark: "Definitely yes. There's more you can expect from your manager. Go for it."
                    },
                    {
                        id : 2,
                        text: "To facilitate development experiences",
                        correct: false,
                        remark: "Who else better than your manager? But is that it? Seek more!"
                    },
                    {
                        id : 3,
                        text: "To provide resources and resolve roadblocks ",
                        correct: false,
                        remark: "Absolutely. Leverage your manager to clear roadblocks..But is that it?"
                    },
                    {
                        id : 4,
                        text: "All of the above",
                        correct: true,
                        remark: "Bingo. Your manager is also your career enabler."
                    }
                    ]
                },              
                {
                    question: "IDP status needs to be reviewed",
                    options: [ 
                    {
                        id : 1,
                        text: "In July and December",
                        correct: false,
                        remark: "Twice is good but not enough. Go for more."
                    },
                    {
                        id : 2,
                        text: "In July only",
                        correct: false,
                        remark: "Once is too risky. Isn't it?"
                    },
                    {
                        id : 3,
                        text: "In December only",
                        correct: false,
                        remark: "Year end is for parties! Mixing party and IDP is not an exciting idea!"
                    },
                    {
                        id : 4,
                        text: "At least once every quarter",
                        correct: true,
                        remark: "The more the better! Continuous Feedback is the only way you can stay on-track"
                    }
                    ]
                },
                {
                    question: "Ingredients of a good IDP are",
                    options: [ 
                    {
                        id : 1,
                        text: "Formal Training (80%), Coaching/Mentoring(10%), On the job exposure (10%)",
                        correct: false,
                        remark: "You can do a better job of balancing rich training vs. rich experience."
                    },
                    {
                        id : 2,
                        text: "Formal Training (60%), Coaching/Mentoring(15%), On the job exposure (25%)",
                        correct: false,
                        remark: "Good to upskill but its important to deploy your skill too. Try again."
                    },
                    {
                        id : 3,
                        text: "Formal Training (10-30%), Coaching/Mentoring (20-30%), On the job exposure (50-70%)",
                        correct: true,
                        remark: "Brilliant. It’s the perfect balance! Train, Develop and Deliver"
                    },
                    {
                        id : 4,
                        text: "Any good project will sufficient to meet IDP targets",
                        correct: false,
                        remark: "Disaster Alert! Not the best way to be on top of your game."
                    }
                    ]
                },
                {
                    question: "IDP will include which of the following aspects",
                    options: [ 
                    {
                        id : 1,
                        text: "Development Goals & Actions",
                        correct: false,
                        remark: "Yes, you got the starting point right! But is that it?"
                    },
                    {
                        id : 2,
                        text: "Time Frame",
                        correct: false,
                        remark: "Having a realistic time frame is important to sustain the rigor. But that's not the end of it."
                    },
                    {
                        id : 3,
                        text: "Action item for Flipster & Manager",
                        correct: false,
                        remark: "Absolutely. Being specific will help tremendously. But this is not the only element in of an IDP. "
                    },
                    {
                        id : 4,
                        text: "All of the above",
                        correct: true,
                        remark: "Smart! You are on track to get yourself a SMART IDP!"
                    }
                    ]
                }
            ]
        }
	}

	toggleSend = () => {
		this.setState({
			completed: !this.state.completed
		})
	}

    handleChange({ target }) {
        this.setState({
            [target.name]: target.value
        });
    }

	render() {
		let data = this.getData();
        let mailId = null;
        let employeeId = null;
		return (

		  <div className={"flex-column app"}>
		  	<Header title={data.title}/>
		  	<Questions questions={data.questions} updateSend={this.toggleSend} />
            <input type="text" name = "mailId" placeholder="enter mail id here..." value={ this.state.mailId } onChange={ this.handleChange } />
            <input type="text" name = "employeeId" placeholder="enter employee id here..." value={ this.state.employeeId } onChange={ this.handleChange } />
		  	<Footer enableSubmit={this.state.completed} mailId={this.state.mailId} employeeId={this.state.employeeId} />
		  </div>
		);
	}
}
export default App;
