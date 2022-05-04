import Button from "../Components/Button";
import Clock from "../Components/Clock";
import Form from "../Components/Form";
import { VscGlobe } from "react-icons/vsc";
import { useState } from "react";

export default function Landing() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };
  return (
    <>
      <div class='flex w-100  justify-between m-3'>
        <VscGlobe class='w-[35px] h-[35px] text-white' />
        <VscGlobe class='w-[35px] h-[35px] text-white' />
      </div>
      <div class='flex flex-col items-center justify-center  mx-11 h-[100vh] content-center'>
        <div class='flex text-center text-[70px] mb-[75px]'>
          The most revolutionary technological movement is about to begin
        </div>
        <Clock />
        <Button openModal={openModal} title='Get started' />
      </div>
      <Form visible={showModal} />
    </>
  );
}
