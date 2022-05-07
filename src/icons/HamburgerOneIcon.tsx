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

const HamburgerOneIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M40 22v-1c0-8.837-7.163-16-16-16S8 12.163 8 21v1m0 12s-2 5 2 7 24 2 28 0 2-7 2-7"
        />
        <rect
          width={38}
          height={14}
          x={5}
          y={21}
          fill="null"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          rx={7}
        />
        <path
          stroke="#333"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="m11 29 1.592-.796A5.996 5.996 0 0 1 17.5 28l.424.17A4.979 4.979 0 0 0 22 28v0a4.979 4.979 0 0 1 4.076-.17l.96.384a4.71 4.71 0 0 0 3.857-.16v0a4.712 4.712 0 0 1 4.214 0L37 29"
        />
        <circle cx={17} cy={15.05} r={2.5} fill="#000" />
        <circle cx={23.75} cy={12.3} r={2.5} fill="#000" />
      </svg>
    </span>
  );
};

HamburgerOneIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default HamburgerOneIcon;
