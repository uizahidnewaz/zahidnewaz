import Link from "next/link";
import PopupImg from "@/public/popup.svg"; 
import Image from "next/image";
const Popup = () => {
  return (
    <div className="popup_box fixed bottom-10 left-10 w-[677px] bg-[var(--color-white-solid)] text-black rounded-[12px] z-50 p-6">
        <Image src={PopupImg} alt="Popup Image" className="popup_image" />
      <h2 className="popup_heading mt-5 mb-2">Currently a Work In Progress</h2>
      <p className="popup_paragraph">
        My portfolio is currently a work in progress. Real-world projects will
        be added here soon. In the meantime, you can explore other concept-based
        designs on my
      </p>
      <Link href="/" className="popup_link">
        Behance profile: https://www.behance.net/shahzahidnewaz
      </Link>
      <p className="popup_thankyou">Thank you!</p>
      <button className="popup_button">I Understand</button>
    </div>
  );
};

export default Popup;
