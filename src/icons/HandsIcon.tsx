/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */

/** @jsx jsx */
import { jsx } from '@emotion/react';
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import iconStyle from '../styles';
import merge from '../utils/merge';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}
const defaultProps = {
  size: 24,
};

const HandsIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <circle cx={24} cy={13} r={9} fill="null" stroke="#000" strokeLinejoin="round" strokeWidth={4} />
        <path
          stroke="#000"
          strokeWidth={4}
          d="M4.5 44c0-6 7-16 19.5-16 0 0 2.759 0 5.782 1.09C32.744 30.16 36.5 31.149 36.5 28V7.75a3.75 3.75 0 1 1 7.5 0V44"
        />
        <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M2 44h44" />
      </svg>
    </span>
  );
};

HandsIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default HandsIcon;
