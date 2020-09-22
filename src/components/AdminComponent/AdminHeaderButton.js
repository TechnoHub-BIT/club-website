import React from "react";
import { useStateValue } from "../../StateProvider";

function AdminHeader() {

  const [{ user }, dispatch] = useStateValue();

  return (
    <span>

      {(user && true) ? (<p>Admin</p>): (<p></p>)}
      
    </span>
  );
}

export default AdminHeader;
