// Common
import { useEffect } from 'react';
// Icons
import { IoClose } from 'react-icons/io5'

const Modal = ({ show, toggle, size = 'sm', children, opacity }) => {
    useEffect(() => {
        if (show) handleBodyBehavior();
        return () => {
            document.getElementsByTagName('body')[0].style.overflow = 'unset';
        }
    }, [show]);

    const handleVisibilityChange = () => {
        handleBodyBehavior();
        toggle();
    };

    const handleBodyBehavior = () => {
        const docScrollBehavior = document.getElementsByTagName('body')[0].style.overflow;
        document.getElementsByTagName('body')[0].style.overflow = docScrollBehavior === 'hidden' ? 'unset' : 'hidden';
    };

    return (
        <section
            onClick={() => handleVisibilityChange()}
            className={`${show ? 'visible opacity-100' : 'invisible opacity-0'} ${opacity && 'bg-black bg-opacity-50 backdrop-blur-sm'} transition-all ease-in-out duration-200 flex flex-col justify-center items-center fixed w-screen h-screen z-[1000] top-0 left-0 right-0 bottom-0 p-4`}
        >
            <div className={`${show ? 'visible opacity-100 scale-100' : 'invisible opacity-0  scale-90'} ${size === 'sm' ? 'max-w-[420px]' : size === 'md' ? 'max-w-3xl' : 'max-w-5xl'} transition-all ease-in-out duration-200 w-full min-h-[10%] max-h-[90%] relative z-10 rounded-3xl bg-gradient-to-t from-[#160138] via-[#1D014A] to-[#1D014A] overflow-scroll scrollbar-hidden`} onClick={(e) => e.stopPropagation()}>
            <span onClick={() => handleVisibilityChange()}
            className='absolute right-4 top-4 cursor-pointer flex justify-center items-center text-xl text-white/70 hover:text-white p-2'>
                <IoClose />
            </span>
                {/* <span className='flex justify-center items-center pointer ' onClick={() => handleVisibilityChange()}>
                    <IoClose />
                </span> */}
                {children}
            </div>
        </section>
    );
};

export default Modal;