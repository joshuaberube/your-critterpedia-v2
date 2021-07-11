import { useState } from 'react'

const Entry = () => {
    const [isLoggingIn, setIsLoggingIn] = useState(true)

    const inputs = [
        {label: "Username", type: "text", name: "username"}
    ]

    return (
        <div>
            <fieldset>
                <legend>{isLoggingIn ? "Login" : "Register"}</legend>
                <form>
                    
                </form>
            </fieldset>
        </div>
    )
}

export default Entry