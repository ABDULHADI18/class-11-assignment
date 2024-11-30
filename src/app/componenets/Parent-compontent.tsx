import Child_Components from "./Child-component";

const Parent_Component = () => {
  let name = "Abdul Hadi";
  let address = "ABC,Karachi";
  let contact = "03xx-xxxxxxx";
  let exp_in = "Typescript, JavaScript, Reactjs, Nextjs, CSS, and Tailwind CSS";
  return (
    <div className=" text-center">
      <Child_Components
        name={name}
        address={address}
        contact={contact}
        exp_in={exp_in}
      />
    </div>
  );
};

export default Parent_Component;
