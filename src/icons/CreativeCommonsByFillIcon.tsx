/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const CreativeCommonsByFillIconComponent = (p: SVGComponentProps) => {
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
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm2 8h-4a1 1 0 0 0-.993.883L9 11v4h1.5v4h3v-4H15v-4a1 1 0 0 0-.883-.993L14 10zm-2-5a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
    </svg>
  );
};

CreativeCommonsByFillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const CreativeCommonsByFillIcon = withWrapper(CreativeCommonsByFillIconComponent);
export default CreativeCommonsByFillIcon;
