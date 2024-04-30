import { Link } from "react-router-dom";

export default function Bottomwarning({ label, buttonText, to }) {
  return (
    <>
      <div className="flex justify-center py-2 text-sm">
        <div>{label}</div>
        <Link className="pointer underline pl-1 cursor-pointer text-[#002d8b]" to={to}>
        {buttonText}
        </Link>
      </div>
    </>
  );
}
