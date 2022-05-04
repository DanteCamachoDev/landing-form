import Timebox from "../Components/TimeBox";

export default function Clock() {
  return (
    <div class='flex mb-[46px] space-x-[97px]'>
      <Timebox value={5} label='Days' />
      <Timebox value={17} label='Hours' />
      <Timebox value={20} label='Minuts' />
      <Timebox value={15} label='Seconds' />
    </div>
  );
}
