const { RESTDataSource } = require("apollo-datasource-rest")
const siteList = require("./siteList")

class RandomUser extends RESTDataSource {
  constructor() {
    super()
    // Asset Spread Sheet
    this.baseURL =
      "https://script.google.com/macros/s/AKfycbzTAcZ85Rb6uF6TlEOoibpIDtV1RIvKO1xpIQde_Ua321Z5QmE/exec"
  }

  async getUser(gender = "all") {
    const user = await this.get(`/?gender=${gender}`)
    return user.results[0]
  }

  async getUsers(people = 10, gender = "all") {
    const user = await this.get(`/?results=${people}&gender=${gender}`)
    return user.results
  }

  // ToDo:
  // Google is returning garbo, fix later. For now procceed.
  async getAllAssetSites() {
    const sites = await this.get(`/`)
    console.log("asset rest point result")
    console.log(sites)
    return siteList
  }
}

module.exports = RandomUser
