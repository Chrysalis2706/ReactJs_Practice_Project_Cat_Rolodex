import { Component } from "react";
import Card from '../card/card.component';
import './card-list.style.css';

class CardList extends Component {
    // include render method with some return
    render() {
        const { monsters } = this.props; 
        return(
            <div className="card-list">
                {monsters.map((element) => {
                    return <Card key={element.id} element={element}></Card>
                })}
            </div>
        )
    }
}

export default CardList; // allows other class to import this component