// import {
//   Modal,
//   ModalBody,
//   ModalContent,
//   ModalHeader,
//   ModalOverlay,
//   Select,
//   useDisclosure,
// } from "@chakra-ui/react";
// import React from "react";

// const Cities = ({ myAddress, setMyAddress }) => {
//   const { isOpen, onOpen, onClose } = useDisclosure();

//   return (
//     <>
//       <Modal isOpen={myAddress === ""} onClose={onClose}>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>Select Your Address</ModalHeader>
//           <ModalBody>
//             <Select
//               background={"white"}
//               margin={"auto"}
//               width={{ base: "90%", md: "400px" }}
//               placeholder="Select Your Address"
//               onChange={(e) => setMyAddress(e.target.value)}
//             >
//               <option value="Jaipur">
//                 {" "}
//                 112, Gandhi Path, Vaishali Nagar, Jaipur
//               </option>
//               <option value="Mumbai">
//                 456, Hill Road, Bandra West, Mumbai
//               </option>
//               <option value="Delhi">
//                 333, Main Street, Lajpat Nagar, New Delhi
//               </option>
//             </Select>
//           </ModalBody>
//         </ModalContent>
//       </Modal>
//     </>
//   );
// };

// export default Cities;
