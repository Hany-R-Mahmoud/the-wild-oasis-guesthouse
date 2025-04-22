import { useState } from "react";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";

function AddCabin() {
  return (
    <Modal>
      <Modal.Open opens="cabin-form">
        <Button>Add new cabin</Button>
      </Modal.Open>
      <Modal.Window name='cabin-form'>
        <CreateCabinForm />
      </Modal.Window>
    </Modal>

    <Modal>
      <Modal.Open >
        <Button>Add new cabin</Button>
      </Modal.Open>
      <Modal.Window >
        <CreateCabinForm />
      </Modal.Window>
    </Modal>
  );
}

// function AddCabin() {
//   const [isOpenModal, setIsOpenModal] = useState(false);

//   return (
//     <div>
//       <Button onClick={() => setIsOpenModal((isOpenModal) => !isOpenModal)}>
//         Add new cabin
//       </Button>
//       {isOpenModal && (
//         <Modal onCloseModal={() => setIsOpenModal(!isOpenModal)}>
//           {" "}
//           <CreateCabinForm
//             onCloseModal={() => setIsOpenModal(!isOpenModal)}
//           />{" "}
//         </Modal>
//       )}
//     </div>
//   );
// }

export default AddCabin;
