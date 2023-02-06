import Header from "./components/Header";
import UserInputSection from "./components/UserInputSection";
import Tab from "./components/Tab";
import TabSelectors from "./components/TabSelectors";
import LastBlock from "./components/LastBlock";
import { useEffect } from "react";
import { updateAppTheme } from "./features/themeSlice";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./components/Modal";

function App() {

  const dispatch = useDispatch()
  const { appTheme } = useSelector(store => store.theme)

  useEffect(() => {
    localStorage.setItem('theme',appTheme)
  },[appTheme])

  return (
    <div className="App" data-theme={appTheme}>
      <Header />
      <main>
        <UserInputSection />
        <ul className="todo-list">
          <Tab />
          <LastBlock />
        </ul>
        <TabSelectors />
      </main>
      <Modal />
    </div>
  )
}

export default App
