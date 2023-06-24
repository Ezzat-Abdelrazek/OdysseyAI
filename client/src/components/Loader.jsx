import { loader } from "../assets";
const Loader = ({ className }) => {
  return (
    <span
      role="status"
      aria-live="polite"
      className={`color-white absolute z-50 h-10 w-10 animate-spin-centered-absolute ${className} left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 `}
    >
      <img src={loader} alt="rotating loader" />
    </span>
  );
};

export default Loader;
