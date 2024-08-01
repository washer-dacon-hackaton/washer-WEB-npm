import { palette } from "../../shared/styles";

export const SmallArrow = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 36L30 24L18 12"
        stroke={`${palette.Gray.gray70}`}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
