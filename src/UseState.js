import { useEffect, useState } from "react";

function UseState({name}) {
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        console.log("empezando el efecto")

        if (loading) {
            setTimeout(() => {
                console.log("empezando la validacion")

                setLoading(false)

                console.log("terminando validacion")
            }, 2000)
        }

        console.log("terminando el efecto")
    }, [loading])

    return (
        <div>
            <h2>Eliminar {name}</h2>
            <p>Por favor, escribe el código de seguridad</p>
            {error && (
                <p>Error: el codigo es incorrecto</p>
            )}
            {loading && (
                <p>cargando...</p>
            )}
            <input placeholder={"Código de seguridad"}/>
            <button
                onClick={() => setLoading(true)}
            >Comprobar</button>
        </div>
    );
}

export { UseState }