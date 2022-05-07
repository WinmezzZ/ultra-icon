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

const CloseWifiIcon = (p: SVGComponentProps) => {
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
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M44 18.965c-6.775-6.42-15.881-8.96-24.5-7.617M38 25.799a19.705 19.705 0 0 0-9.5-5.284M10 25.799a19.814 19.814 0 0 1 4.36-3.299M16 32.314a11.261 11.261 0 0 1 5-2.911"
        />
        <path fill="#000" fillRule="evenodd" d="M24 40a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" clipRule="evenodd" />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M40 40 8 8M4 18.965a29.317 29.317 0 0 1 3.5-2.84"
        />
      </svg>
    </span>
  );
};

CloseWifiIcon.propTypes = {
  size: PropTypes.number,
};
export default CloseWifiIcon;
