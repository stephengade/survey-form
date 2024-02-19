import { Input } from "./Input";

export const Form = () => {
  return (
    <>
      <div className="bg-white p-4 space-y-2 rounded-[5px] border-b border-solid">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-5">
          <Input label="First name:" required={true} />
          <Input label="Last name:" required={true} />
        </div>

        <Input label="Other name(s)" required={true} />
      </div>


      <div className="bg-white p-4 space-y-2 rounded-[5px]">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-5">
          <Input label="Age:" required={true} />
          <Input label="Gender:" required={true} />
          <Input label="Favourite food:"  />
          <Input label="Brand color:" />
        </div>

        <div className="flex justify-center pt-5">
        <button className="flex max-w-[250px] justify-end  bg-[#000] hover:bg-opacity-75 text-[14px] opacity-85 text-white px-3 py-2">Submit form</button>
        </div>
      
        
      </div>

    
    </>
  );
};
