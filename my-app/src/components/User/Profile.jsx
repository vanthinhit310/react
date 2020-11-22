import React from "react";
import "./Profile.scss";

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: props.user.firstName,
            lastName: props.user.lastName,
            age: props.user.age,
            gender: props.user.gender,
            company: props.user.company,
            study: props.user.study,
            favorite: props.user.favorite,
        };
    }

    getFullname() {
        return `${this.state.firstName} ${this.state.lastName}`;
    }

    render() {
        return (
            <div className="user-profile">
                <h1 className="username">Hello {this.getFullname()}</h1>

                <ul className="user-info">
                    <li className="info-item">
                        <label>First name : </label>
                        <span>{this.state.firstName}</span>
                    </li>
                    <li className="info-item">
                        <label>Last name : </label>
                        <span>{this.state.lastName}</span>
                    </li>
                    <li className="info-item">
                        <label>Age : </label>
                        <span>{this.state.age}</span>
                    </li>
                    <li className="info-item">
                        <label>Gender : </label>
                        <span>{this.state.gender}</span>
                    </li>
                    <li className="info-item">
                        <label>Company : </label>
                        <span>{this.state.company}</span>
                    </li>

                    <li className="info-item">
                        <label>Study : </label>
                        <span>{this.state.study}</span>
                    </li>

                    <li className="info-item">
                        <label>Favorite : </label>
                        <span>{this.state.favorite}</span>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Profile