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

const EggOneIcon = (p: SVGComponentProps) => {
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
          stroke="#000"
          strokeWidth={4}
          d="M29 22.133C29 30.97 23.627 36 17 36S5 30.97 5 22.133C5 11.163 11.373 4 17 4s12 7.163 12 18.133Z"
        />
        <path
          stroke="#000"
          strokeWidth={4}
          d="M29 24.069c8.536.633 14 5.553 14 9.931 0 4.69-6.268 10-15.867 10-6.773 0-10.99-3.435-11.932-8"
        />
      </svg>
    </span>
  );
};

EggOneIcon.propTypes = {
  size: PropTypes.number,
};
export default EggOneIcon;
