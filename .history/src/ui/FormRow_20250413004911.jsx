function FormRow() {
  return (
    <FormRow>
      <Label htmlFor="name">Cabin name</Label>
      <Input
        type="text"
        id="name"
        {...register("name", {
          required: "This field is required",
        })}
        autoComplete="off"
      />
      {errors?.name?.message && <Error> {errors.name.message}</Error>}
    </FormRow>
  );
}

export default FormRow;
