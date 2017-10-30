import React, {Component} from 'react';
import axios from 'axios';


class Footer extends Component {
	submitQuiz = () => {

		let url = 'http://10.47.0.120:80/v1/send/email/flipkart-promo';
		let headers = {
			"content-type":"application/json",
			"x-api-key": "BjcxiAK8wjAYToqnTWCaE5G8Qw2WdEdq4Zid4g3pD6mkAS48"
		};

		var emailBody = "Employee Id : " + this.props.employeeId + ", Mail Id : " + this.props.mailId

		let data = {
								  "sla": "H",
								  "contextId": null,
								  "channelDataModel": {
								    "subject": "IDP Quiz Submission",
								    "html": emailBody
									},
								  "stencilId": "STN9D2HGZ",
								  "channelInfo": {
								    "type": "EMAIL",
								    "to": [
								      {
								        "name": "Soumith",
								        "address": "soumith.rk@flipkart.com"
								      }
								    ],
								    "cc": [],
								    "from": {
								      "name": "Flipkart-IDP-Quiz",
								      "address": "noreply@flipkart.com"
								    }
								  }
								};

		axios.post(url, data, {headers: headers})
		.then((response) => {
			console.log("Successful")
			window.location.replace("http://localhost:3000/thanks.html")
		})
		.catch(error => {
			console.log("Failed: ", error)
		});

	}

  render() {
    return (
      <div className={"footer"}>
      	<button onClick={this.submitQuiz} disabled={!this.props.enableSubmit}>Submit</button>
      </div>
    );
  }
}
export default Footer;
