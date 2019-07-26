import React, {Component} from 'react';
import '../styles/review_submission.css';

export default class OptionBoxes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            totalSelections: this.props.totalSelections,
            selectedOptions: {},
            selected_option: ""
        };
    };

    assignValue = (value) => {
        if (value.name === "Quality") {
            this.setState({quality: value.value})
        } else if (value.name === "Design") {
            this.setState({design: value.value})
        } else if (value.name === "Experience") {
            this.setState({experience: value.value})
        }
    }

    selectedOption(option) {

        let selectedOptions = this.state.selectedOptions;

        if (option in this.state.selectedOptions) {
            delete selectedOptions[option];
            this.setState({
                selectedOptions: selectedOptions
            });
        } else {
            if (Object.keys(selectedOptions).length <= 4) {
                selectedOptions[option] = 1;
                this.setState({selectedOptions: selectedOptions});
            }
        }

        this.props.result({value:selectedOptions, type: "product"})
    }

    selectSingleOption(option) {
        this.setState({selected_option: option})
        if (this.props.title === "Age Range") {
            this.props.result({value:option, type: "age"});
        } else {
            this.props.result({value:option, type: "bought"});
        }
    }

    render() {
        const {selected_option, selectedOptions} = this.state;

        return (
            <div>
                <p className="option-title">{this.props.title}</p>
                {this.props.totalSelections === 1 ? <p className="option-subtitle">Choose <b>one</b></p>:<p className="option-subtitle">{this.props.subtitle}</p>}
                { this.props.totalSelections === 1 ?
                    <div>
                    { 
                        this.props.options.map((option, index) => {
                            return (
                                <div key={index} className={`option-selection ${option === selected_option ? "option-selected": ""}`} onClick={(() => this.selectSingleOption(option))}>
                                    {option}
                                </div>
                            );
                        }) 
                    }
                    </div>
                    :
                    <div>
                    { 
                        this.props.options.map((option, index) => {

                            return (
                                <div key={index} className={`option-selection ${option in selectedOptions ? "option-selected": Object.keys(selectedOptions).length === 5 ? "disabled-option": ""}`} onClick={(() => this.selectedOption(option))}>
                                    {option}
                                </div>
                            );
                        }) 
                    }
                    </div>
                }
            </div>
        );
    }
};
