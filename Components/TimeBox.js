export default function Timebox({ value, label }) {
  return (
    <>
      <div>
        <div class='flex justify-center content-center rounded-[32px] h-[186px] w-[186px]  bg-gradient-to-r from-[#189195] to-[#32B187] '>
          <div class='text-[100px] self-center text-white'>{value}</div>
        </div>
        <div class='w-100 text-white mt-[25px] flex justify-center'>
          {label}
        </div>
      </div>
    </>
  );
}
