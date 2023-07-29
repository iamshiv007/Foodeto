import { Select } from "@chakra-ui/react";
import React from "react";

const Cities = () => {
  return (
    <>
      <Select
        background={"white"}
        margin={"auto"}
        width={{base:"90%",
         md:"400px"}}
        placeholder="Select Your City"
      >
        <option value="Jaipur">Jaipur</option>
        <option value="Jaipur">Mumbai</option>
        <option value="Jaipur">Delhi</option>
        <option disabled value="Jaipur">
          Bangalore
        </option>
        <option disabled value="Jaipur">
          Kolkata
        </option>
        <option disabled value="Jaipur">
          Chennai
        </option>
        <option disabled value="Jaipur">
          Ahemdabad
        </option>
        <option disabled value="Jaipur">
          Hyderabad
        </option>
        <option disabled value="Jaipur">
          Pune
        </option>
      </Select>
    </>
  );
};

export default Cities;
