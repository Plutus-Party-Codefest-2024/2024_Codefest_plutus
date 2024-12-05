function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
          <button
            className="absolute top-3 right-3 text-gray-500 hover:text-black"
            onClick={onClose}
          >
            &times;
          </button>
          <div>{children}</div>
        </div>
      </div>
    );
  }
  
  export default Modal;
  