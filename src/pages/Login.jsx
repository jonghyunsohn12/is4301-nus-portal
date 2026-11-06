import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth'
import { getAuthErrorMessage } from '../authErrors.js'
import { auth, googleProvider } from '../firebase.js'

function Login() {
  const location = useLocation()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const destination = location.state?.from?.pathname || '/'
  const routeMessage = location.state?.message

  async function runAuthentication(authenticationRequest) {
    setError('')
    setSubmitting(true)

    try {
      await authenticationRequest()
      navigate(destination, { replace: true })
    } catch (authenticationError) {
      setError(getAuthErrorMessage(authenticationError))
    } finally {
      setSubmitting(false)
    }
  }

  function handleLogin(event) {
    event.preventDefault()
    runAuthentication(() => signInWithEmailAndPassword(auth, email, password))
  }

  function handleSignUp() {
    runAuthentication(() =>
      createUserWithEmailAndPassword(auth, email, password),
    )
  }

  function handleGoogleSignIn() {
    runAuthentication(() => signInWithPopup(auth, googleProvider))
  }

  return (
    <section className="login-page" aria-labelledby="login-heading">
      <div className="login-introduction">
        <p className="eyebrow">NUS Student Portal</p>
        <h1 id="login-heading">Welcome back</h1>
        <p>
          Log in or create an account to access Academics and Admission.
        </p>
      </div>

      <div className="login-card">
        {routeMessage && <p className="auth-message info">{routeMessage}</p>}
        {error && (
          <p className="auth-message error" role="alert" aria-live="assertive">
            {error}
          </p>
        )}

        <form className="login-form" onSubmit={handleLogin}>
          <label htmlFor="email">Email address</label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            autoComplete="email"
            required
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            autoComplete="current-password"
            minLength="6"
            required
          />

          <button className="primary-button" type="submit" disabled={submitting}>
            {submitting ? 'Please wait...' : 'Log in'}
          </button>

          <button
            className="secondary-button"
            type="button"
            onClick={handleSignUp}
            disabled={submitting}
          >
            Sign up with email
          </button>
        </form>

        <div className="login-divider" aria-hidden="true">
          <span>or</span>
        </div>

        <button
          className="google-button"
          type="button"
          onClick={handleGoogleSignIn}
          disabled={submitting}
        >
          Continue with Google
        </button>
      </div>
    </section>
  )
}

export default Login
