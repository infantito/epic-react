// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [error, setError] = React.useState(null)

  const [username, setUsername] = React.useState('')

  function handleSubmit(event) {
    event.preventDefault()

    onSubmitUsername(username)
  }

  function handleChange(event) {
    const {value} = event.target

    const isLowerCase = value === value.toLowerCase()

    setError(isLowerCase ? null : 'Username must be lower case')

    setUsername(value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleChange}
        />
      </div>
      <div style={{color: 'red'}}>{error}</div>
      <button type="submit" disabled={Boolean(error)}>
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)

  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
