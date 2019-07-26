import React, {Component} from 'react';
import '../styles/review_submission.css';
import Ratings from './steps/Ratings';

export default class ReviewSubmission extends Component {
    constructor(props) {
        super(props)
        this.state = {
            step_name: ["Review", "Ratings", "Media", "Confirm"],
            review: {show: false, complete: true},
            ratings: {show: true, complete: false},
            media: {show: false, complete: false},
            confirm: {show: false, complete: false}
        };
    };

    getStepItemStyle(step) {
        const {review, ratings, media, confirm} = this.state;
        var stepStyles = [];
        if (step === "review") {
            if (review.show) { stepStyles.push("current-step-text step-item-current")};
            if (review.complete) { stepStyles.push("step-item-complete")};
        } else if (step === "ratings") {
            if (ratings.show) { stepStyles.push("current-step-text step-item-current")};
            if (ratings.complete) { stepStyles.push("step-item-complete")};
        } else if (step === "media") {
            if (media.show) { stepStyles.push("current-step-text step-item-current")};
            if (media.complete) { stepStyles.push("step-item-complete")};
        } else if (step === "confirm") {
            if (confirm.show) { stepStyles.push("current-step-text step-item-current")};
            if (confirm.complete) { stepStyles.push("step-item-complete")};
        }
        return stepStyles.join(" ")
    }

    render() {
        const {step_name} = this.state;

        return (
            <div className="review-submission-container">
                <div className="header">
                    <div className="review-submission-header">
                        <div className="header-content-contain">
                            <h1 className="product-title-name">Product Name</h1>
                            <h2 className="step-title">{step_name[1]}</h2>
                        </div>
                    </div>
                    <div className="header-step_items">
                        <div>
                            <p className={`step-item ${this.getStepItemStyle("review")}`}>Review</p>
                        </div>
                        <div>
                            <p className={`step-item ${this.getStepItemStyle("ratings")}`}>Ratings</p>
                        </div>
                        <div>
                            <p className={`step-item ${this.getStepItemStyle("media")}`}>Media</p>
                        </div>
                        <div>
                            <p className={`step-item ${this.getStepItemStyle("confirm")}`}>Confirm</p>
                        </div>
                    </div>
                </div>
                <Ratings />
                <footer className="footer">
                    <div className="btn-container">
                        <button className="button">NEXT</button>
                    </div>
                </footer>
            </div>
        );
    }
};
