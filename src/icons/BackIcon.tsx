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

const BackIcon = (p: SVGComponentProps) => {
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
          fill="#2F88FF"
          fillRule="evenodd"
          stroke="#000"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M44 40.836c-4.893-5.973-9.238-9.362-13.036-10.168-3.797-.805-7.412-.927-10.846-.365V41L4 23.545 20.118 7v10.167c6.349.05 11.746 2.328 16.192 6.833 4.445 4.505 7.009 10.117 7.69 16.836Z"
          clipRule="evenodd"
        />
      </svg>
    </span>
  );
};

BackIcon.propTypes = {
  size: PropTypes.number,
};
export default BackIcon;