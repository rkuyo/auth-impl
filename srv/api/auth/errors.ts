const field = {
  messsage: "Missing a required field.",
}

const exists = {
  message: "Username is taken.",
}

const credentials = {
  message: "Invalid username or password.",
}

const noHeader = {
  message: "No Authorization header was found.",
}

const unauthorized = {
  message: "Unauthorized.",
}

export const err = { field, exists, credentials, noHeader, unauthorized }
