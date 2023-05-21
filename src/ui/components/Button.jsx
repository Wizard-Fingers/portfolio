import PropTypes from "prop-types";

const Button = ({ children, isSmall, ...props }) => {
  const buttonClassName = isSmall
    ? "px-2 py-2 rounded-full text-[1.3rem] accent"
    : "px-6 py-3 accent text rounded-full ring-2 hover:ring-slate-900";

  return (
    <button
      className={`text hover:bg-slate-800 hover:shadow-3xl bg-transparent ring-2 hover:ring-offset-2 ring-gray-500 hover:ring-black transition delay-50 ${buttonClassName}`}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  isSmall: PropTypes.bool,
};

export default Button;
