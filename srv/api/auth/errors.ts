const field = {
  success: false,
  message: "Missing a required field.",
}

const exists = {
  success: false,
  message: "Username is taken.",
}

const credentials = {
  success: false,
  message: "Invalid username or password.",
}

const noHeader = {
  success: false,
  message: "No Authorization header was found.",
}

const unauthorized = {
  success: false,
  message: "Unauthorized.",
}

export const err = { field, exists, credentials, noHeader, unauthorized }
