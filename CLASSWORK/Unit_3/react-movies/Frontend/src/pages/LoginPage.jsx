import './LoginPage.css'

export default function LoginPage({user, setUser}) {
    
    const handleUser = () => {
        const inputValue = document.getElementById('username').value
        setUser(inputValue)
    }

    return (
        <main>
            <h2>Login to discover a range of movies and actors!</h2>
            <label>Username: </label>
            <input type="text" id='username' value={user} />
            <br />
            <br />
            <button onClick={handleUser}>Sign In</button>
        </main>
    )
}