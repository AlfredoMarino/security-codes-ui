import { Component } from "react";

export class Loading extends Component {

    UNSAFE_componentWillMount() {
        console.log("componentWillMount")
    }

    componentWillUnmount() {
        console.log("componentWillUnmount")
    }

    componentDidMount() {
        console.log("componentDidMount")
    }

    render() {
        return <p>cargando...</p>
    }
}