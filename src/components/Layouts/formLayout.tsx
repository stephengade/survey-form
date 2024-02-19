import { FormHeader } from "../Form/FormHeader";
import { FormTitle } from "../Form/FormTitle";

const FormLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="w-[95vw] md:w-[550px] my-5 md:my-10">
      <div className="bg-white rounded-[5px]">
        <FormHeader />
        <FormTitle />
      </div>

      <main className="py-3">{children}</main>
    </section>
  );
};

export default FormLayout;
