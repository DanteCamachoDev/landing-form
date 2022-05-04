import Button from "./Button";

export default function Form({ visible }) {
  return visible ? (
    <div class='w-[778px] h-[936px]'>
      <form class='px-[50px] bg-gradient-to-r  from-[#FFFFFF4F] to-[#FFFFFFB3] opacity-100 rounded-[45px] pt-6 pb-8 mb-4'>
        <div>
          <p>Pre-Registration</p>
          <p>Fill in your data to have your place and be part of history</p>
        </div>
        <div class='flex justify-between'>
          <div class='mb-4'>
            <label class='block text-gray-700 text-sm font-bold mb-2'>
              Name Sponsor
            </label>
            <input
              class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='username'
              type='text'
              placeholder='Name of your sponsor'
            />
          </div>
          <div class='mb-6'>
            <label
              class='block text-gray-700 text-sm font-bold mb-2'
              for='password'
            >
              Last Name Sponsor
            </label>
            <input
              class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Last Name sponsor'
            />
          </div>
        </div>

        <div class='flex justify-between'>
          <div class='mb-4'>
            <label class='block text-gray-700 text-sm font-bold mb-2'>
              Name Sponsor
            </label>
            <input
              class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='username'
              type='text'
              placeholder='Name of your sponsor'
            />
          </div>
          <div class='mb-6'>
            <label
              class='block text-gray-700 text-sm font-bold mb-2'
              for='password'
            >
              Last Name Sponsor
            </label>
            <input
              class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Last Name sponsor'
            />
          </div>
        </div>

        <div class='flex justify-between'>
          <div class='mb-4'>
            <label class='block text-gray-700 text-sm font-bold mb-2'>
              Email
            </label>
            <input
              class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='username'
              type='text'
              placeholder='Email'
            />
          </div>
        </div>

        <div class='flex justify-between'>
          <div class='mb-4'>
            <label class='block text-gray-700 text-sm font-bold mb-2'>
              Code
            </label>
            <input
              class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='username'
              type='text'
              placeholder='+55'
            />
          </div>
          <div class='mb-6'>
            <label class='block text-gray-700 text-sm font-bold mb-2'>
              Phone
            </label>
            <input
              class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Cell Phone'
            />
          </div>
        </div>

        <div class='flex justify-between'>
          <div class='mb-4'>
            <label class='block text-gray-700 text-sm font-bold mb-2'>
              Country
            </label>
            <input
              class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              type='text'
              placeholder='Country'
            />
          </div>
        </div>
        <Button title='Send' />
      </form>
    </div>
  ) : (
    <></>
  );
}
