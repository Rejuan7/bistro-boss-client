import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <SectionTitle
        heading="Add An Item"
        subHeading="What's New?"
      ></SectionTitle>

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("firstName")} />
          <select {...register('category')} className="select select-bordered w-full max-w-xs">
            <option disabled selected>
              Select your category
            </option>
            <option value="Salad">Salad</option>
            <option value="Pizza">Pizza</option>
            <option value="Soup">Soup</option>
            <option value="Dessert">Dessert</option>
            <option value="Drinks">Drinks</option>
          </select>
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddItems;
