export default function Button({ title, openModal }) {
  return (
    <>
      <button
        onClick={() => openModal(true)}
        class='h-[44px] w-[276px] rounded-lg text-white bg-gradient-to-r from-[#189195] to-[#32B187]'
      >
        {title}
      </button>
    </>
  );
}
