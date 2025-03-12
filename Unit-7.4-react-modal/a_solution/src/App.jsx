import { useState } from "react";
import "./App.css";
import Modal from "./Modal";

function App() {
  const [modalState, setModalState] = useState(false);

  const handleClick = () => {
    if (modalState) {
      setModalState(false);
    } else {
      setModalState(true);
    }
  };

  return (
    <main>
      <button type="button" onClick={handleClick}>
        Open Modal{" "}
      </button>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
        explicabo esse facere, iure magni nemo aspernatur dignissimos numquam
        velit. Explicabo illo dolorem sed debitis delectus architecto, aliquid
        consequuntur iusto laborum? Assumenda numquam debitis quis quod,
        suscipit aliquid dolorum? Nesciunt, tenetur alias provident tempora
        saepe sit porro quam culpa dolor impedit amet laboriosam consequuntur
        totam temporibus ut dolorem in voluptatem natus? Quis beatae tempore
        esse numquam doloremque, molestiae assumenda? Dicta laudantium est iure
        fugiat doloribus vero nostrum soluta at quibusdam impedit modi, quasi
        porro sapiente saepe numquam hic. Laudantium, veritatis aperiam? Sit
        aspernatur facere, iure molestias quia tempore! Aperiam est quasi error
        minus consectetur non quia quisquam doloremque quod, dolorem expedita
        impedit corrupti corporis veritatis tenetur molestias voluptate?
        Numquam, dolorum maxime.
      </p>
      <Modal modalState={modalState} handleClick={handleClick} />
    </main>
  );
}

export default App;
