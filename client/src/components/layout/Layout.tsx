import Navbar from "./Navbar";
import { useModal } from "../../hooks/useModal";
import ContactModal from "../ui/ContactModal";
import { useLenisScroll } from "../../hooks/useLenisHook";
import { ToastContainer } from "react-toastify"; // <-- import
import 'react-toastify/dist/ReactToastify.css';

function Layout({ children }: { children: React.ReactNode }) {
  const { isOpen, openModal, closeModal } = useModal();
  useLenisScroll();

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <div
        onClick={openModal}
        className="h-20 w-20 fixed right-3 bottom-3 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 border-2 border-gray-600 rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 backdrop-blur-sm"
      >
        <span className="text-blue-400 font-bold text-sm tracking-wide drop-shadow-sm">
          CONNECT
        </span>
      </div>
      {isOpen && <ContactModal isOpen={isOpen} closeModal={closeModal} />}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default Layout;
