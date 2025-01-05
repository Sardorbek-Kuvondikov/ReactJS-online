
import Students from "./Students";

const Context = ({children}) => {
  return (
    <div>
      <Students>{children}</Students>
    </div>
  );
};

export default Context;
