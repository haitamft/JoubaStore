import React from "react"
import { Pages } from "./components/pages/Pages"
import "./style/main.scss"
import { Provider } from "react-redux"
import { legacy_createStore } from "redux"
import reducers from "./controller/main"
const store =legacy_createStore(reducers)
export const App = () => {
  return (
    <>
      <Provider store={store}>
        <Pages />
      </Provider>
    </>
  )
}
