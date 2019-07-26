import React, {Component} from 'react';
import '../../styles/review_submission.css';
import Slider from '../../commonComponents/Slider';
import OptionBoxes from '../../commonComponents/OptionBoxes';

export default class Ratings extends Component {
    constructor(props) {
        super(props)
        this.state = {
            step_name: ["Review", "Ratings", "Media", "Confirm"],
            quality: 0,
            design: 0,
            experience: 0,
            productStandouts: [
                'Accurate Timekeeping',
                'High Quality',
                'Durable',
                'Elegant',
                'Good Weight',
                'Versatile',
                'Looks Expensive',
                'Attracts Compliments',
                'Unique',
                'Great Gift',
                'Great Value'
            ],
            age_range: [
                "Under 18",
                "18 - 24",
                "25 - 34",
                "35 - 44",
                "45 - 54",
                "55 - 64",
                "65+"
            ],
            bought_for: ["Personal Use", "Gift"],
            country_list: ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"],
            selected_country: "New Zealand"
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

    boxOptionValue = (value) => {
        if (value.type === "product") {
            this.setState({product_value: value.value})
        } else if (value.type === "age") {
            this.setState({age_value: value.value})
        } else if (value.type === "bought") {
            this.setState({bought_value: value.value})
        }
    }

    render() {
        const {productStandouts, age_range, bought_for} = this.state;

        return (
            <div className="main_ratings_container">
                <div className="ratings_container">
                    <div className="all-slider-container">
                        <Slider name="Quality" value={this.assignValue} />
                        <Slider name="Design" value={this.assignValue} />
                        <Slider name="Experience" value={this.assignValue} />
                    </div>
                    <OptionBoxes title="Product Standouts" subtitle="Choose up to 5 that best apply (optional)" options={productStandouts} totalSelections={5} result={this.boxOptionValue} />
                    <h2 className="bold-title">About You</h2>
                    <OptionBoxes title="Age Range" subtitle="Choose one" options={age_range} totalSelections={1} result={this.boxOptionValue} />
                    <OptionBoxes title="Bought For" subtitle="Choose one" options={bought_for} totalSelections={1} result={this.boxOptionValue} />
                    <p className="option-title">Country</p>
                    <select className="select-option" onChange={(e) => this.setState({selected_country: e.target.value})} value={this.state.selected_country}>
                        {
                            this.state.country_list.map((country, index) => {
                                return <option key={index} >{country}</option>
                            })
                        }
                    </select>
                </div>
            </div>
        );
    }
};
