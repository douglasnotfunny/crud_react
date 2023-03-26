import {React, useState} from "react";
import './App.css';

export const Create = () => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [age, setAge] = useState("")

    interface FormDataType {firstName:string, lastName: string, age: string}
    const responseBody: FormDataType = {firstName: "", lastName: "", age: "0"}

    const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        responseBody.firstName = firstName
        responseBody.lastName = lastName
        responseBody.age = age
        console.log(JSON.stringify(responseBody))

        fetch('https://fakestoreapi.com/products',{
            method:"POST",
            body:JSON.stringify(
                {
                    title: 'test product',
                    price: 13.5,
                    description: 'lorem ipsum set',
                    image: 'https://i.pravatar.cc',
                    category: 'electronic'
                }
            )
        })
            .then(res=>res.json())
            .then(responseBody=>console.log(responseBody))
	//Form submission happens here
    }
    const inputChangeHandler = (setFunction: React.Dispatch<React.SetStateAction<string>>, event: React.ChangeEvent<HTMLInputElement>) => {
        setFunction(event.target.value)
    }

    return(
        <form onSubmit={onSubmitHandler}>
            <div><label htmlFor="first_name">First Name</label></div>
            <div><input id="first_name" onChange={(e)=>inputChangeHandler(setFirstName, e)} type="text"/></div>
            <div><label htmlFor="last_name">Last Name</label></div>
            <div><input id="last_name" onChange={(e)=>inputChangeHandler(setLastName, e)} type="text"/></div>
            <div><label htmlFor="age">Age</label></div>
            <div><input id="age" onChange={(e)=>inputChangeHandler(setAge, e)} type="number"/></div>
            <input type="submit"/>
        </form>
    )

}

export default Create;
