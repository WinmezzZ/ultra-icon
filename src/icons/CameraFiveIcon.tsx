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

const CameraFiveIcon = (p: SVGComponentProps) => {
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
        <circle cx={24} cy={21} r={16} fill="#2F88FF" stroke="#000" strokeWidth={4} />
        <circle cx={24} cy={21} r={7} fill="#43CCF8" stroke="#fff" strokeWidth={4} />
        <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M16 43h16m-8-6v6" />
      </svg>
    </span>
  );
};

CameraFiveIcon.propTypes = {
  size: PropTypes.number,
};
export default CameraFiveIcon;
