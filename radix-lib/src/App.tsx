import { ComboBox } from "./components/comboBox/ComboBox"
import { ComboBoxItem } from "./components/comboBox/ComboBoxItem"
import { useState } from "react"

import classes from './app.module.scss'

function App() {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(undefined)

  return (<>
    {/* <PopOver label={"Show info"} content={"info !"} />
    <MyAccordion title={'click'} ><div>This is a div that should explain evrything !</div></MyAccordion> */}
    <ComboBox className={classes.combo} placeholder="A dummy combo" value={selectedValue} onValueChange={setSelectedValue}>
      <ComboBoxItem value="1">One</ComboBoxItem>
      <ComboBoxItem value="2">Two</ComboBoxItem>
      <ComboBoxItem value="3">Three !!!!!!!!!</ComboBoxItem>
    </ComboBox>
  </>
  )
}

export default App
