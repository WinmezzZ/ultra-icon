/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const InvisionFillIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="currentColor"
      {...props}
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm2.988 11.065a3.77 3.77 0 0 0-.09.79c0 .927.482 1.542 1.508 1.542.851 0 1.541-.526 2.038-1.375l-.303 1.267h1.69l.966-4.031c.241-1.02.71-1.55 1.419-1.55.558 0 .905.36.905.957 0 .173-.015.361-.075.565l-.498 1.853a2.89 2.89 0 0 0-.106.785c0 .88.498 1.523 1.54 1.523.89 0 1.6-.596 1.992-2.025l-.664-.267c-.332.958-.62 1.13-.846 1.13-.226 0-.347-.156-.347-.47 0-.141.03-.298.076-.487l.483-1.805c.12-.424.166-.8.166-1.145 0-1.35-.785-2.055-1.736-2.055-.89 0-1.796.835-2.248 1.715l.331-1.579h-2.58l-.363 1.39h1.208l-.744 3.098c-.583 1.35-1.656 1.372-1.79 1.34-.222-.051-.363-.139-.363-.438 0-.172.03-.42.106-.718l1.132-4.672H6.927l-.362 1.39h1.192l-.77 3.272zm1.637-5.44a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25z" />
    </svg>
  );
};

InvisionFillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const InvisionFillIcon = withWrapper(InvisionFillIconComponent);
export default InvisionFillIcon;
