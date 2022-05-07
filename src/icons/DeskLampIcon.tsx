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

const DeskLampIcon = (p: SVGComponentProps) => {
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
          d="M8 24.596C8 25.37 8.629 26 9.404 26h29.192C39.37 26 40 25.371 40 24.596V20c0-8.837-7.163-16-16-16S8 11.163 8 20v4.596Z"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M24 42V26m-9 6v-6m18 16H15"
        />
      </svg>
    </span>
  );
};

DeskLampIcon.propTypes = {
  size: PropTypes.number,
};
export default DeskLampIcon;