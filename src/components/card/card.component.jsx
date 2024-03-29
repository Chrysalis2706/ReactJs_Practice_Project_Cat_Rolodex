import { Component } from "react";
import './card.style.css';

class Card extends Component{
    render () {
        const {id, name, email} = this.props.element;
        return (
            <div className="card-container" key={id}>
                <img 
                src = {`https://robohash.org/${id}?set=set4&size=180x180`}
                alt = {`monster ${name}`}
                />
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        )
    }
}
export default Card;