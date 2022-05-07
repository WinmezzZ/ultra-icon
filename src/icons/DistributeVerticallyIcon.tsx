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

const DistributeVerticallyIcon = (p: SVGComponentProps) => {
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
        <mask id="prefix__a" width={48} height={48} x={0} y={0} mask-type="alpha" maskUnits="userSpaceOnUse">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </mask>
        <g stroke="#000" strokeLinejoin="round" strokeWidth={4} mask="url(#prefix__a)">
          <path fill="#2F88FF" d="M38 30H10V18h28z" />
          <path strokeLinecap="round" d="M42 40H6M42 8H6" />
        </g>
      </svg>
    </span>
  );
};

DistributeVerticallyIcon.propTypes = {
  size: PropTypes.number,
};
export default DistributeVerticallyIcon;
