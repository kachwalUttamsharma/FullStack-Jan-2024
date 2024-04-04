// import Family from "./Components/Family";
import "./App.css";
import FamilyProvider from "./Context/FamilyContext";
import Family from "./ContextComponents /Family";
import Reference from "./Reference/Reference";
import ReferenceOne from "./Reference/ReferenceOne";

function App() {
  // const familyInfo = {
  //   familyName: "The Griffins",
  //   onlyForParents: () => {
  //     return "Info for Parents";
  //   },
  //   onlyForChildren: () => {
  //     return "Info for Children";
  //   },
  //   onlyForGrandchildren: () => {
  //     return "Info for Grandchildren";
  //   },
  // };
  return (
    <div className="App">
      {/* <Family info={familyInfo} /> */}
      {/* <FamilyProvider>
        <Family />
      </FamilyProvider> */}

      <Reference />
      <ReferenceOne />
    </div>
  );
}

export default App;
