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

const DropShadowUpIcon = (p: SVGComponentProps) => {
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
          d="M24 43a15.95 15.95 0 0 0 11.314-4.686A15.95 15.95 0 0 0 40 27a15.95 15.95 0 0 0-4.686-11.314A15.95 15.95 0 0 0 24 11a15.95 15.95 0 0 0-11.314 4.686A15.95 15.95 0 0 0 8 27a15.95 15.95 0 0 0 4.686 11.314A15.95 15.95 0 0 0 24 43Z"
          clipRule="evenodd"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeWidth={4}
          d="M39.556 11.444A21.931 21.931 0 0 0 24 5a21.931 21.931 0 0 0-15.556 6.444"
        />
      </svg>
    </span>
  );
};

DropShadowUpIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default DropShadowUpIcon;
