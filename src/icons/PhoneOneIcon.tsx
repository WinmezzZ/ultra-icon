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

const PhoneOneIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <rect width={38} height={38} x={5} y={5} stroke="#000" strokeWidth={4} rx={3} />
        <path
          fill="null"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M11 12h8v24h-8zm14 0h12v6H25z"
        />
        <circle cx={25} cy={24} r={2} fill="#000" />
        <circle cx={25} cy={30} r={2} fill="#000" />
        <circle cx={25} cy={36} r={2} fill="#000" />
        <circle cx={31} cy={24} r={2} fill="#000" />
        <circle cx={31} cy={30} r={2} fill="#000" />
        <circle cx={31} cy={36} r={2} fill="#000" />
        <circle cx={37} cy={24} r={2} fill="#000" />
        <circle cx={37} cy={30} r={2} fill="#000" />
        <circle cx={37} cy={36} r={2} fill="#000" />
      </svg>
    </span>
  );
};

PhoneOneIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default PhoneOneIcon;
