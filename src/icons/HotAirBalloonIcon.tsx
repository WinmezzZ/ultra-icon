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

const HotAirBalloonIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M39 18.352C39 27.855 31 36 24 36S9 27.855 9 18.352C9 10.654 14.893 4 24 4s15 6.654 15 14.352Z"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={2}
          strokeWidth={4}
          d="M25 4c3.7 3.819 7 10.12 7 16 0 5.807-3.38 12.192-7 16M23 4c-4.317 4.087-7 9.706-7 16 0 6.215 2.777 11.924 7 16"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M22 16.018s5.065 1.017 9 0C34.935 15 38 13 38 13M9 20s5 2.5 9 3.5 8 .5 8 .5"
        />
        <path fill="null" d="m18 35 1.4 7.095S22.125 44 24 44c1.875 0 4.6-1.905 4.6-1.905l1.394-7.065L24 36l-6-1Z" />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="m30 35-.006.03m0 0L28.6 42.095S25.875 44 24 44c-1.875 0-4.6-1.905-4.6-1.905L18 35l6 1 5.994-.97Z"
        />
      </svg>
    </span>
  );
};

HotAirBalloonIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default HotAirBalloonIcon;
