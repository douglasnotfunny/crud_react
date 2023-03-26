import React from "react";
import './App.css';
import Update from './Update';
import Delete from './Delete';
import { Route, BrowserRouter } from "react-router-dom";

class Get extends React.Component {

    // Constructor
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            DataisLoaded: false
        };
    }

    componentDidMount() {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
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
                        <a href={`update/${item.id}`}>Editar</a>,
                        <a href={`delete/${item.id}`}>Deletar</a>
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

export default Get;
