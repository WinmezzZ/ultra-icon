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

const FutureBuildTwoIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M4 44h40" />
        <ellipse cx={24.5} cy={7} stroke="#000" strokeWidth={4} rx={13.5} ry={3} />
        <path
          stroke="#000"
          strokeWidth={4}
          d="M16 9s4.16 8.883 5 15c1.069 7.776-1 20-1 20M32.226 9s-4.16 8.883-5 15C26.157 31.776 28 44 28 44"
        />
      </svg>
    </span>
  );
};

FutureBuildTwoIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default FutureBuildTwoIcon;
