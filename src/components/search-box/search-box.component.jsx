import { Component } from "react";
import './search-box.component.css';

class SearchBox extends Component {

    render(){
        return (
            <input 
            className = {`search-box ${this.props.className}`} 
            placeholder= {this.props.placeholder}
            type='search' 
            onChange={this.props.onChangeHandler}>
            </input> 
        )
    }
}

export default SearchBox;