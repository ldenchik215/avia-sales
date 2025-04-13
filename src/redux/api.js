const baseUrl = 'https://aviasales-test-api.kata.academy'

export const fetchSearchId = async () => {
  const response = await fetch(`${baseUrl}/search`)
  const data = await response.json()

  return data.searchId
}

export const fetchTicketsBySearchId = async (searchId) => {
  const response = await fetch(`${baseUrl}/tickets?searchId=${searchId}`)
  return response.json()
}
