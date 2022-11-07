import CustomTable from "./components/Tables";

function App() {
  const table__headle__data = [
    {
      id: "iiefe",
      name: "Name",
    },
    {
      id: "ii3efe",
      name: "Name",
    },
    {
      id: "ii4efe",
      name: "Name",
    },
    {
      id: "ii5efe",
      name: "Name",
    }
  ]
  const table__body__data = [
    {
      id: 1,
      children: [ 
        {
          id: "ii5efe3",
          name: "Jane Copper",
        },
        {
          id: "ii5efe4",
          name: "Jane Copper",
        },
        {
          id: "ii5efe5",
          name: "Jane Copper",
        },
        {
          id: "ii5efe6",
          name: "Jane Copper",
        },
      ]
    },
    {
      id: 2,
      children: [ 
        {
          id: "i2i5efe3",
          name: "Jane Copper",
        },
        {
          id: "i3i5efe4",
          name: "Jane Copper",
        },
        {
          id: "i4i5efe5",
          name: "Jane Copper",
        },
        {
          id: "i5i5efe6",
          name: "Jane Copper",
        },
      ]
    },
    {
      id: 3,
      children: [ 
        {
          id: "ii15efe3",
          name: "Jane Copper",
        },
        {
          id: "ii25efe4",
          name: "Jane Copper",
        },
        {
          id: "ii35efe5",
          name: "Jane Copper",
        },
        {
          id: "ii45efe6",
          name: "Jane Copper",
        },
      ]
    },
    {
      id: 4,
      children: [ 
        {
          id: "ii55efe3",
          name: "Jane Copper",
        },
        {
          id: "ii25efe4",
          name: "Jane Copper",
        },
        {
          id: "ii35efe5",
          name: "Jane Copper",
        },
        {
          id: "ii45efe6",
          name: "Jane Copper",
        },
      ]
    },
  ]
  return (
    <div className="App">
      <CustomTable thead__count={table__headle__data} tbody__count={table__body__data} />
    </div>
  );
}

export default App;
