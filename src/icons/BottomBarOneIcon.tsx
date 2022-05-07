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

const BottomBarOneIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path
          fill="null"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M13 20h4s7 7.28 7 14-6 10-6 10h-6s-6-3.28-6-10c0-6.72 7-14 7-14Zm2-16c2.083 0 5 1.52 5 6s-3.333 10-3.333 10h-3.334S10 14.48 10 10s2.917-6 5-6Zm16 16h4s7 7.28 7 14-6 10-6 10h-6s-6-3.28-6-10c0-6.72 7-14 7-14Zm2-16c2.083 0 5 1.52 5 6s-3.333 10-3.333 10h-3.334S28 14.48 28 10s2.917-6 5-6Z"
        />
      </svg>
    </span>
  );
};

BottomBarOneIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default BottomBarOneIcon;
