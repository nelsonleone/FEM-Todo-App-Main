import Header from "./components/header";
import InputSection from "./components/Inputsection";
import Tab from "./components/Tab";
import TabSelectors from "./components/TabSelectors";
import FooterBlock from "./components/FooterBlock";
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
        <InputSection />
        <ul className="todo-list">
          <Tab />
          <FooterBlock />
        </ul>
        <TabSelectors />
      </main>
      <Modal />
    </div>
  )
}

export default App
