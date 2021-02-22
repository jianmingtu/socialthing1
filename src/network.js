
const fakeToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDJiMTQ1ZmUwMDY4MDA1Yzg0MWRhMGIiLCJlbWFpbCI6InBpenphQGtldGNodXAuZnJpZXMiLCJ1c2VybmFtZSI6InBpenphIiwiaWF0IjoxNjEzNTg4OTk5LCJleHAiOjEuMDAwMDAwMDAwMDAwMDE2ZSsyM30.QZOqAIOwjzyCrVVisxi6qxK2dEEw6TeGhyupTEVFvNk"

export async function login({username, password}) {
  return {accessToken: fakeToken}
}

export async function signUp({email, password, username, type, code}) {
  return {accessToken: fakeToken}
}

