import react, { useState } from "react";
import logo from "./logo.svg";
import Button from "./components/button/button";
import Card from "./components/Card/Card";
import { FakeData } from "./components/Accordion/fake-data";
import Accordion from "./components/Accordion/Accordion";
function App() {
  const [counters, setCounters] = useState(1);
  return (
    <div className="App flex justify-around">
      <h1 className="text-red-500">Hielle</h1>
      {/* <Card
        variant="img"
        url="https://realfood.tesco.com/media/images/1400x919-MargaritaPizza-555a4065-2573-4b41-bcf3-7193cd095d8f-0-1400x919.jpg"
        alt="Image is ..."
        title="Tesco Real Food"
        body="Итальянский алый соус, цыпленок барбекю, говядина барбекю, индейка и дольки пепперони. Сыр моцарелла и сыр гауда."
        btn="true"
        btnText="Button Text"
        width="w-1/5"
        classBtn="rounded text-white bg-sky-500 px-3 py-1 w-full my-4"
        cardClass="w-1/5 border-2 rounded-xl"
        classBody="px-4"
        classTitle="m-2 ml-0"
        classImg="rounded"
      />
      <Card
        variant="img"
        url="https://realfood.tesco.com/media/images/1400x919-MargaritaPizza-555a4065-2573-4b41-bcf3-7193cd095d8f-0-1400x919.jpg"
        alt="Image is ..."
        title="Tesco Real Food"
        body="Итальянский алый соус, цыпленок барбекю, говядина барбекю, индейка и дольки пепперони. Сыр моцарелла и сыр гауда."
        btn={true}
        btnText="Button Text"
        width="w-1/5"
        classBtn="rounded text-white bg-sky-500 px-3 py-1 w-full my-4"
        cardClass="w-1/5 border-2 rounded-xl"
        classBody="px-4"
        classTitle="m-2 ml-0"
        classImg="rounded"
      />
      <Card
        variant="img"
        url="https://realfood.tesco.com/media/images/1400x919-MargaritaPizza-555a4065-2573-4b41-bcf3-7193cd095d8f-0-1400x919.jpg"
        alt="Image is ..."
        title="Tesco Real Food"
        body="Итальянский алый соус, цыпленок барбекю, говядина барбекю, индейка и дольки пепперони. Сыр моцарелла и сыр гауда."
        btn={true}
        btnText="Button Text"
        width="w-1/5"
        classBtn="rounded text-white bg-sky-500 px-3 py-1 w-full my-4"
        cardClass="w-1/5 border-2 rounded-xl"
        classBody="px-4"
        classTitle="m-2 ml-0"
        classImg="rounded"
      /> */}
      <Accordion data={FakeData} />
    </div>
  );
}

export default App;
