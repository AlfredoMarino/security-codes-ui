import { Component } from "react";
import { Loading } from "./Loading";

class ClassState extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: false,
            loading: false
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate")
        if (this.state.loading) {
            setTimeout(() => {
                console.log("empezando la validacion")

                this.setState({ loading: false })

                console.log("terminando validacion")
            }, 2000)
        }
    }

    render() {
        return (
            <div>
                <h2>Eliminar {this.props.name}</h2>
                <p>Por favor, escribe el código de seguridad</p>
                {this.state.error && (
                    <p>Error: el codigo es incorrecto</p>
                )}
                {this.state.loading && (
                    <Loading />
                )}
                <input placeholder={"Código de seguridad"}/>
                <button
                    onClick={() => this.setState({ loading: true })}
                >Comprobar</button>
            </div>
        );
    }
}

export { ClassState }