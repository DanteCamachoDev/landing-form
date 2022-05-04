import Button from "../Components/Button";
import Timebox from "../Components/TimeBox";

export default function Landing() {
  return (
    <>
      <div class='flex flex-col items-center justify-center  mx-11 h-[100vh] content-center'>
        <div class='text-[36px] mb-[75px]'>
          The most revolutionary technological movement is about to begin
        </div>
        <div class='flex mb-[46px] space-x-[97px]'>
          <Timebox label='Days' />
          <Timebox label='Hours' />
          <Timebox label='Minuts' />
          <Timebox label='Seconds' />
        </div>
        <Button title='Get started' />
      </div>
    </>
  );
}
