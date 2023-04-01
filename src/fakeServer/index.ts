// only install the mocks once

import fetchMock from "fetch-mock"

// this is necessary with react@18 in StrictMode
let fakeServer: () => fetchMock.FetchMockStatic

export default async (
  type: string,
): Promise<() => fetchMock.FetchMockStatic> => {
  if (!fakeServer) {
    switch (type) {
      case "graphql":
        fakeServer = await import("./graphql").then((factory) =>
          factory.default(),
        )
        break
      default:
        fakeServer = await import("./rest").then((factory) => factory.default())
    }
  }
  return fakeServer
}
