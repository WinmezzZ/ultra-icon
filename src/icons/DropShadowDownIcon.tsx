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

const DropShadowDownIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path
          fill="null"
          fillRule="evenodd"
          stroke="#000"
          strokeLinecap="round"
          strokeWidth={4}
          d="M24 37a15.95 15.95 0 0 0 11.314-4.686A15.95 15.95 0 0 0 40 21a15.95 15.95 0 0 0-4.686-11.314A15.95 15.95 0 0 0 24 5a15.95 15.95 0 0 0-11.314 4.686A15.95 15.95 0 0 0 8 21a15.95 15.95 0 0 0 4.686 11.314A15.95 15.95 0 0 0 24 37Z"
          clipRule="evenodd"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeWidth={4}
          d="M39.556 36.556A21.932 21.932 0 0 1 24 43a21.932 21.932 0 0 1-15.556-6.444"
        />
      </svg>
    </span>
  );
};

DropShadowDownIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default DropShadowDownIcon;
