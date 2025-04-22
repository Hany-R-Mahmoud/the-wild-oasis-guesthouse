function AddCabin() {
  return (
    <div>
      <Button onClick={() => setShowForm((showForm) => !showForm)}>
        Add new cabin
      </Button>
      {showForm && <CreateCabinForm />}
    </div>
  );
}

export default AddCabin;
