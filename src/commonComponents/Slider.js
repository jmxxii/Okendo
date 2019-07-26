import React, {Component} from 'react';
import '../styles/review_submission.css';

export default class Slider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 0
        };
    };

    selectedValue(value) {
        this.setState({value});
        this.props.value({value, name: this.props.name});
    }

    render() {

        const { value } = this.state;

        return (
            <div>
                <label>{this.props.name}</label>
                <div className="slider-container" >
                    <div className={`number_label ${value >= 1 ? 'number_selected number_label_selected': ''}`} onClick={() => this.selectedValue(1)}>1</div>
                        <div className={`number-spacer ${value > 1 ? 'number-spacer-selected' : ''}`}></div>
                    <div className={`number_label ${value >= 2 ? 'number_selected number_label_selected': ''}`} onClick={() => this.selectedValue(2)}>2</div>
                        <div className={`number-spacer ${value > 2 ? 'number-spacer-selected' : ''}`}></div>
                    <div className={`number_label ${value >= 3 ? 'number_selected number_label_selected': ''}`} onClick={() => this.selectedValue(3)}>3</div>
                        <div className={`number-spacer ${value > 3 ? 'number-spacer-selected' : ''}`}></div>
                    <div className={`number_label ${value >= 4 ? 'number_selected number_label_selected': ''}`} onClick={() => this.selectedValue(4)}>4</div>
                        <div className={`number-spacer ${value > 4 ? 'number-spacer-selected' : ''}`}></div>
                    <div className={`number_label ${value >= 5 ? 'number_selected number_label_selected': ''}`} onClick={() => this.selectedValue(5)}>5</div>
                </div>
                <div className="value-range">
                    <p>Poor</p>
                    <p>Excellent</p>
                </div>
            </div>
        );
    }
};
