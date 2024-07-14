// Define the Modal component inside the component... Need to refactor
const Modal = ({ data, content, closeModal,title }) => {
  console.log(data)
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg relative">
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          ❌
        </button>
        <h1 className="font-bold text-2xl">{title}</h1>
         { content.includes("http")  ? <img
          src={content} width="312px"
          height="200px"
          alt='snippet image'
          className='object-contain max-h-[200px] border border-black rounded-md mt-3' />:
        <div style={{overflowWrap:"anywhere"}} className='text-sm  w-80 h-auto'>{content}</div>}
      </div>
    </div>
  );
};

export default Modal