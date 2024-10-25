

import { Component } from 'react';
import React from 'react';
import SimpleItem from '../TodoItem';
import './index.css'

const initialTodosList = [
    {
        id: 1,
        title: 'Book the ticket for today evening',
    },
    {
        id: 2,
        title: 'Rent the movie for tomorrow movie night',
    },
    {
        id: 3,
        title: 'Confirm the slot for the yoga session tomorrow morning',
    },
    {
        id: 4,
        title: 'Drop the parcel at Bloomingdale',
    },
    {
        id: 5,
        title: 'Order fruits on Big Basket',
    },
    {
        id: 6,
        title: 'Fix the production issue',
    },
    {
        id: 7,
        title: 'Confirm my slot for Saturday Night',
    },
    {
        id: 8,
        title: 'Get essentials for Sunday car wash',
    },
];




class SimpleTodos extends Component {

    state = {
        simpleList: initialTodosList
    }

    deleteList = (id) => {
        console.log("this is for delete with id:" + id);
        const { simpleList } = this.state;
        const filterList = simpleList.filter((eachitem) => {
            return eachitem.id !== id;
        })
        this.setState({
            simpleList: filterList,
        })
    }


    render() {
        const { simpleList } = this.state;

        return (
            <>
                <div className='Simple-toddos-container'>
                    <div className='card-simple-todo'>
                        <h1 className='simple-todos-heading'>Simple Todos</h1>

                        <ul className='simple-todos-ul-container'>
                            {simpleList.map(eachitem => (
                                <SimpleItem
                                    list={eachitem}
                                    key={eachitem.id}
                                    deleleitem={this.deleteList}
                                />
                            ))}
                        </ul>
                    </div>


                </div>

            </>
        )
    }

}

export default SimpleTodos;

