/**
 * These code auto generated by UltraIcon
 */

/** @jsx jsx */
import { jsx } from '@emotion/react';
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import iconStyle from '../styles';
import merge from '../utils/merge';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const defaultProps = {
  size: 24,
};

const WindmillIcon = (p: SVGComponentProps) => {
  const { size, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle} className="ultra-icon">
      <svg
        fill="currentColor"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        {...props}
      >
        <path
          fill="#2F88FF"
          fillRule="evenodd"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="m24 23.992-.03-9.996L23.943 4 12 14v10l12-.008Zm.008.008 9.996-.03L44 23.943 34 12H24l.008 12Zm-.008.008.03 9.996.028 9.996L36 34V24l-12 .008ZM23.992 24l-9.996.03L4 24.057 14 36h10l-.008-12Z"
          clipRule="evenodd"
        />
      </svg>
    </span>
  );
};

WindmillIcon.propTypes = {
  size: PropTypes.number,
};
export default WindmillIcon;
