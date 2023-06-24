import PropTypes from "prop-types";

const FormField = ({
  labelName = "",
  name,
  type = "text",
  placeholder = "",
  onChange,
  value,
  surpriseMe,
  handleSurpriseMe,
}) => {
  return (
    <div className="flex flex-col gap-3 text-sm ">
      <div className="flex gap-2">
        <label htmlFor={name}>{labelName}</label>
        {surpriseMe && (
          <button
            type="button"
            className="button-hover rounded-[4px] bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 px-6 py-1 text-xs"
            onClick={handleSurpriseMe}
          >
            Surprise Me
          </button>
        )}
      </div>
      <div className="relative">
        <input
          className="w-full max-w-lg rounded-lg border-[1px] border-[#282828] bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-3 opacity-[0.90] drop-shadow-md placeholder:text-sm placeholder:text-[#ffcce6]  focus:border-[1px] focus:border-solid focus:border-white focus:outline-none"
          type={type}
          id={name}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
        <div className="absolute inset-0 -z-10 max-w-lg rounded-lg bg-doodle "></div>
      </div>
    </div>
  );
};

FormField.prototype = {
  labelName: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  surpriseMe: PropTypes.bool,
  handleSurpriseMe: PropTypes.func,
};

export default FormField;
