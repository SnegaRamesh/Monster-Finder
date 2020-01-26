import React from 'react';
import Card from '../Card/Card';

import './CardList-Styles.css';

const CardList = (props) => {
    return (
        <div className="card-list">
            { props.monsters.map(monster => <Card key={monster.id} monster={monster}></Card>) }
        </div>
    )
}

export default CardList