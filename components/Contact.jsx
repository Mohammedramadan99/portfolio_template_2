
const Contact = () => {
  return(
    <section className='section' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <div className='flex-1 flex justify-start items-center'>
            <div>
              <h4 className='text-xl uppercase text-sky font-medium mb-2 tracking-wide text-gradient'>
                get in touch
              </h4>
              <h2 className='text-[35px] text-gradient lg:text-[60px] leading-none mb-12'>
                lets work <br/> together!
              </h2>
            </div>
          </div>
          {/* form */}
          <form className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'>
            <input
              type='text'
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-sky transition-all' 
              placeholder='Your name'
            />
            <input
              type='text'
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-sky transition-all' 
              placeholder='Your email'
            />
            <textarea
            className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-sky transition-all' 
            placeholder='Your message'
            ></textarea>
            <button className='btn btn-lg'> send message </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
