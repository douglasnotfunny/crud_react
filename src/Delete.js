import React from "react";
import './App.css';
import Update from './Update';
import { Route, BrowserRouter } from "react-router-dom";

class Delete extends React.Component {

    // Constructor
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            DataisLoaded: false
        };
    }

    componentDidMount() {
        fetch(`https://fakestoreapi.com/carts/${this.props.match.params.id}`,{
            method:"DELETE"
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
    }
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div> ;

        return (
        <div>{
                items.map((item) => (
                    <ol key = { item.id } >
                        User_Name: { item.username },
                        Full_Name: { item.name },
                        User_Email: { item.email },
                        ID: {item.id}
                        <a href={`update/${item.id}`}>oi</a>
                        <a href={`delete/${item.id}`}>oi</a>
                        <BrowserRouter>
                            <Route element = { <Update/> } exact path="update/:item.id" />
                            <Route element = { <Delete/> } exact path="delete/:item.id" />
                        </BrowserRouter>
                    </ol>
                ))
            }
        </div>
    );
}
}

export default Delete;
