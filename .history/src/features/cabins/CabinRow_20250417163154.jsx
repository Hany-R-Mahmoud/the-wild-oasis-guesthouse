import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";

import CreateCabinForm from "./CreateCabinForm";
import { useDeleteCabin } from "./useDeleteCabin";
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import { useCreateCabin } from "./useCreateCabin";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

function CabinRow({ cabin }) {
  const { isDeleteing, deleteCabin } = useDeleteCabin();
  const { isCreating, createCabin } = useCreateCabin();

  const {
    id: cabinId,
    name,
    maxCapacity,
    regularPrice,
    discount,
    description,
    image,
  } = cabin;

  function handleDuplicate() {
    createCabin(
      {
        name: `Copy of ${name}`,
        maxCapacity,
        regularPrice,
        discount,
        description,
        image,
      }
      // {
      //   onSuccess: () => {
      //     toast.success("New Cabin successfuly created");
      //   },
      // }
    );
  }

  return (
    <Table.Row>
      <Img src={image} />
      <Cabin>{name}</Cabin>
      <div>Fit up to {maxCapacity} guests</div>
      <Price>{formatCurrency(regularPrice)}</Price>
      {discount ? (
        <Discount>{formatCurrency(discount)}</Discount>
      ) : (
        <span>&mdash;</span>
      )}
      <div>
        <button disabled={isCreating} onClick={handleDuplicate}>
          <HiSquare2Stack />
        </button>

        {/* <button onClick={() => setShowForm((showForm) => !showForm)}>
            <HiPencil />
          </button> */}
        <Modal>
          <Modal.Open opens="edit-form">
            <button>
              <HiPencil />
            </button>
          </Modal.Open>
          <Modal.Window name="edit-form">
            <CreateCabinForm cabinToEdit={cabin} />
          </Modal.Window>
        </Modal>
        <Modal>
          <Modal.Open opens="delete-cabin">
            <button>
              <HiTrash />
            </button>
          </Modal.Open>
          <Modal.Window name="delete-cabin">
            <ConfirmDelete
              name={name}
              onConfirm={() => deleteCabin(cabinId)}
              disabled={isDeleteing}
            />
          </Modal.Window>
        </Modal>

        {/* <button onClick={() => deleteCabin(cabinId)} disabled={isDeleteing}>
          <HiTrash />
        </button> */}

        <Menus.Menu>
          <Menu.Toggle id={cabinId} />
          <Menu.List id={cabinId}>
            <Menu.Button>Duplicate</Menu.Button>
            <Menu.Button>Edit</Menu.Button>
            <Menu.Button>Delete</Menu.Button>
          </Menu.List>
        </Menus.Menu>
      </div>
    </Table.Row>
    /* {showForm && <CreateCabinForm cabinToEdit={cabin} />} */
  );
}

export default CabinRow;
