import React from 'react';
import './styles/ContactUs.css'
import emailjs from 'emailjs-com';

class ContactForm extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            name: '',
            phone: '',
            email: '',
            address: '',
            message: '',

        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
        
      }
    
      handleNameChange(event) {
        this.setState({name: event.target.value});
      }
    
      handlePhoneChange(event) {
        this.setState({phone: event.target.value});
      }

      handleEmailChange(event) {
        this.setState({email: event.target.value});
      }

      handleAddressChange(event) {
        this.setState({address: event.target.value});
      }

      handleMessageChange(event) {
        this.setState({message: event.target.value});
      }

      handleSubmit(event) {
        alert('A form was submitted: ' + this.state.name + ',' + this.state.phone + ',' + this.state.email + ',' + this.state.address + ',' + this.state.message);
        event.preventDefault();
      }

      sendMessage(event) {
        event.preventDefault();

        // if (!this.validateMail()) {
        //     return;
        //     }

        const templateParams = {
            name: this.state.name + " (" + this.state.email + ")",
            to_name: "brandon@greenviewsolutions.net",
            address: this.state.address,
            message: this.state.message,
            phone: this.state.phone
            };

        emailjs
            .send("service_p6clffh", "template_jidzwzw", templateParams, "user_wPYeoaoebNsoGt3GhzLVu")
            .then(
                function(response) {
                console.log("SUCCESS!", response.status, response.text);
                },
                function(err) {
                }
            );

            alert('Thank you for your request, we\'ll be in touch soon!')
        }


    render() {
        return(
            <div className="formBackground">

                <form onSubmit={this.sendMessage}>
                    <div className="formContactInfo">
                        <div className="row1">
                            <label className='inputBox'>
                                <input className='inputField' placeholder="Name" type="text" value={this.state.value} onChange={this.handleNameChange} />
                            </label>
                            <label className='inputBox'>
                                <input className='inputField' placeholder="Phone" type="tel" value={this.state.value} onChange={this.handlePhoneChange} />
                            </label>
                        </div>
                        <div className="row2">
                            <label className='inputBox'>
                                <input className='inputField' placeholder="Email" type="email" value={this.state.value} onChange={this.handleEmailChange} />
                            </label>
                            <label className='inputBox'>
                                <input className='inputField' placeholder="Location" type="text" value={this.state.value} onChange={this.handleAddressChange} />
                            </label>
                        </div>
                    </div>
                    <div className="messageBox">
                        <textarea className="messageArea inputField" type="text" placeholder='Description of Project' value={this.state.value} onChange={this.handleMessageChange} >
                        </textarea>
                    </div>
                    <div className="submitButtonBox">
                        <input className="submitButton" type="submit" value="Submit"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default ContactForm;