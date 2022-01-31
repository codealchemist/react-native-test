const baseUrl = 'https://api.github.com'

class GithubApi {
  async getUser(username) {
    if (!username) throw new Error('Missing param: username')

    const response = await fetch(`${baseUrl}/users/${username}`)
    return response.json()
  }

  async getMultipleUsers(usernames) {
    if (!usernames?.length || !Array.isArray(usernames))
      throw new Error('Invalid or missing param: usernames')

    const users = []
    for (const username of usernames) {
      const user = await this.getUser(username)
      users.push(user)
    }
    return users
  }

  log() {
    console.log('[ GithubApi ]', ...arguments)
  }
}

const githubApi = new GithubApi()
export default githubApi
