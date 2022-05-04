export default function Timebox({ value, label }) {
  return (
    <>
      <div>
        <div
          // className="TimeBox"
          class="flex rounded-[32px] justify-center content-center rounded-[32px] h-[186px] w-[186px] border opacity-100 backdrop-blur-[32px] border-solid border-[#FFFFFF1A] bg-gradient-to-b from-[#FFFFFF9C] to-[#FFFFFF4F] "
        >
          <div class="text-[100px] self-center text-white">{value}</div>
        </div>
        <div class="w-100 text-white mt-[25px] flex justify-center">
          {label}
        </div>
      </div>
    </>
  );
}
