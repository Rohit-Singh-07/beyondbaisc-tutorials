import { useForm } from "react-hook-form";
import SubForm from "./SubForm";
import { useContext } from "react";
import UserContext from "../context/userContext";

const SampleForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const { user } = useContext(UserContext);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            {...register("name", { required: "Name must be given" })}
          />
          {/* {errors.name && {errors.name.message}} */}
        </div>

        <div>{user}</div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SampleForm;
