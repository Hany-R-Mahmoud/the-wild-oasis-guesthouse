import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

// Email regex: /\S+@\S+\.\S+/

function SignupForm() {
  const { register, formState } = useForm();
  const { error } = formState;

  return (
    <Form>
      <FormRow label="Full name" error={""}>
        <Input
          type="text"
          id="fullName"
          {...register("fullName", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Email address" error={""}>
        <Input
          type="email"
          id="email"
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: " PLease Provide a valid email",
            },
          })}
        />
      </FormRow>

      <FormRow label="Password (min 8 characters)" error={""}>
        <Input
          type="password"
          id="password"
          {...register("password", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Repeat password" error={""}>
        <Input
          type="password"
          id="passwordConfirm"
          {...register("passwordConfirm", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button>Create new user</Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;
