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

const InnerShadowTopLeftIcon = (p: SVGComponentProps) => {
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
          strokeWidth={4}
          d="M24 44a19.938 19.938 0 0 0 14.142-5.858A19.938 19.938 0 0 0 44 24a19.938 19.938 0 0 0-5.858-14.142A19.937 19.937 0 0 0 24 4 19.938 19.938 0 0 0 9.858 9.858 19.938 19.938 0 0 0 4 24a19.937 19.937 0 0 0 5.858 14.142A19.938 19.938 0 0 0 24 44Z"
          clipRule="evenodd"
        />
        <path
          stroke="#fff"
          strokeLinecap="round"
          strokeWidth={4}
          d="M24 10a13.956 13.956 0 0 0-9.9 4.1A13.956 13.956 0 0 0 10 24"
        />
      </svg>
    </span>
  );
};

InnerShadowTopLeftIcon.propTypes = {
  size: PropTypes.number,
};
export default InnerShadowTopLeftIcon;
