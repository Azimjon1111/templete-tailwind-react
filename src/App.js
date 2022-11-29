import Button from "./components/button/button";
import { FakeData } from "./components/Accordion/fake-data";
import Accordion from "./components/Accordion/Accordion";
import CustomTable from "./components/Tables/tableSimple";
import TableAction from "./components/Tables/tableAction";
import BasicModal from "./components/Modal/Modal";
import { useContext } from "react";
import { MyContext } from "./Context/Contexts";
function App() {
  const { handleOpen } = useContext(MyContext);
  return (
    <>
      <CustomTable />
      <TableAction />
      <Button
        disabled={false}
        text="I am button"
        onClick={handleOpen}
        isLoading={true}
      />
      <Accordion data={FakeData} />
      <BasicModal
        title="I am a modal"
        text="This my text. It is cool thet it has worke"
      />
    </>
  );
}

export default App;
