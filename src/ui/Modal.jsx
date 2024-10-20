const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div className="bg-[#17171c] rounded-lg shadow-lg p-4 md-p-8  w-11/12 max-w-80 md:max-w-lg relative shadow-black">
        {children}
      </div>
    </div>
  );
};

export default Modal;
