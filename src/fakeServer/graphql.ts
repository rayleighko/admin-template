import generateData from "data-generator-retail"
import fetchMock from "fetch-mock"
import JsonGraphqlServer from "json-graphql-server"

export default (): (() => fetchMock.FetchMockStatic) => {
  const data = generateData({ serializeDate: false })
  const restServer = JsonGraphqlServer({ data })
  const handler = restServer.getHandler()
  const handlerWithLogs = (url: string, opts = { body: {} }): any =>
    handler(url, opts).then((res = { body: {} }) => {
      const req = JSON.parse(opts.body as string)
      const parsedRes = JSON.parse(res.body as string)

      console.groupCollapsed(`GraphQL ${req.operationName as string}`)
      console.group("request")
      console.log("operationName", req.operationName)
      console.log(req.query)
      console.log("variables", req.variables)
      console.groupEnd()
      console.group("response")
      console.log("data", parsedRes.data)
      console.log("errors", parsedRes.errors)
      console.groupEnd()
      console.groupEnd()

      return res
    })

  fetchMock.mock("begin:http://localhost:4000", handlerWithLogs)
  return () => fetchMock.restore()
}
