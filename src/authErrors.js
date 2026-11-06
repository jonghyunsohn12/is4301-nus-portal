const authErrorMessages = {
  'auth/email-already-in-use': 'An account already exists for this email.',
  'auth/invalid-email': 'Please enter a valid email address.',
  'auth/missing-email': 'Please enter your email address.',
  'auth/missing-password': 'Please enter your password.',
  'auth/weak-password': 'Password must contain at least 6 characters.',
  'auth/user-not-found': 'No account exists for this email. Please sign up first.',
  'auth/wrong-password': 'The password is incorrect. Please try again.',
  'auth/invalid-credential': 'The email or password is incorrect. Please try again.',
  'auth/popup-closed-by-user': 'Google sign-in was cancelled before completion.',
  'auth/popup-blocked': 'Please allow pop-ups to sign in with Google.',
  'auth/cancelled-popup-request': 'Only one Google sign-in window can be open at a time.',
  'auth/too-many-requests': 'Too many attempts. Please wait and try again later.',
  'auth/network-request-failed': 'A network error occurred. Please check your connection.',
  'auth/unauthorized-domain': 'This website is not authorised for Google sign-in.',
}

export function getAuthErrorMessage(error) {
  return (
    authErrorMessages[error?.code] ||
    'Authentication was unsuccessful. Please try again.'
  )
}
