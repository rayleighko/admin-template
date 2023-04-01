import generateData from "data-generator-retail"
import FakeRest from "fakerest"
import fetchMock from "fetch-mock"

export default (): (() => fetchMock.FetchMockStatic) => {
  const data = generateData({ serializeDate: true })
  const restServer = new FakeRest.FetchServer("http://localhost:4000")
  if (window) {
    window.restServer = restServer // give way to update data in the console
  }
  restServer.init(data)
  restServer.toggleLogging() // logging is off by default, enable it
  fetchMock.mock(
    "begin:http://localhost:4000",
    restServer.getHandler() as
      | fetchMock.MockResponse
      | fetchMock.MockResponseFunction,
  )
  return () => fetchMock.restore()
}
