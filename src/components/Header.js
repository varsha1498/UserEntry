import "./style.css";
import { Button } from "@chakra-ui/react";
import React, { useState, useRef } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  useDisclosure,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Radio,
  RadioGroup,
  Stack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";

export default function Header(props) {
  const [searchValue, setSearchValue] = useState("");
  const [Lname, setLnName] = useState("");
  const [fullName, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { setSearch } = props;

  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef();
  const finalRef = React.useRef();

  const changeSearchValue = (text) => {
    setSearchValue(text);
    setSearch(text);
  };
  const submit = (e) => {
    e.preventDefault();
    const inputs = {
      LoginName: Lname,
      fullName: fullName,
      Email: email,
    };
    console.log(inputs);
  };

  const confirmMatch = (value) => {
    if (value !== password) {
      setError("Passwords dont match");
    } else setError("");
  };
  return (
    <div className="header">
      <div className="heading">All Users</div>
      <div className="header-right">
        <input
          className="search-box"
          type="text"
          value={searchValue}
          onChange={(e) => changeSearchValue(e.target.value)}
        />
        {/* <button className="add-btn">Button</button> */}
        <button className="add-btn" onClick={onOpen}>
          New User
        </button>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>New User</ModalHeader>
            <ModalCloseButton />
            <Tabs>
              <TabList>
                <Tab>info</Tab>
                <Tab>Custom Attributes</Tab>
                <Tab>Regional Settings</Tab>
              </TabList>
              <TabPanels p="2rem">
                <TabPanel>
                  <form>
                    <ModalBody pb={6}>
                      <FormControl>
                        <FormLabel>Login name</FormLabel>
                        <Input
                          value={Lname}
                          onChange={(e) => setLnName(e.target.value)}
                          placeholder="Login name"
                          required
                        />
                      </FormControl>
                      <FormControl mt={4}>
                        <FormLabel>Full name</FormLabel>
                        <Input
                          value={fullName}
                          onChange={(e) => setFname(e.target.value)}
                          placeholder="Full name"
                          required
                        />
                      </FormControl>
                      <FormControl mt={4}>
                        <FormLabel>Email</FormLabel>
                        <Input
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Email"
                          required
                        />
                      </FormControl>
                      <FormControl mt={4}>
                        <FormLabel>Password</FormLabel>
                        <Input
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          type="password"
                          required
                          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                          title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                        />
                      </FormControl>
                      <FormControl mt={4}>
                        <FormLabel>Confirm Password</FormLabel>
                        <Input
                          placeholder="Confirm password"
                          type="password"
                          onChange={(e) => confirmMatch(e.target.value)}
                          required
                        />
                      </FormControl>
                      <div style={{ color: "red" }}>{error}</div>
                      <FormControl mt={4}>
                        <p style={{ marginBottom: "5px" }}>
                          Require Password Change:{" "}
                        </p>
                        <RadioGroup>
                          <Stack direction="row">
                            <Radio value="Yes">Yes</Radio>
                            <Radio value="No">No</Radio>
                          </Stack>
                        </RadioGroup>
                      </FormControl>
                    </ModalBody>

                    <ModalFooter>
                      <FormControl>
                        <button className="save-btn" onClick={submit}>
                          Save
                        </button>
                      </FormControl>
                    </ModalFooter>
                  </form>
                </TabPanel>
                <TabPanel>Are 1, 2, 3</TabPanel>
                <TabPanel>Red, yellow and blue.</TabPanel>
              </TabPanels>
            </Tabs>
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
}
