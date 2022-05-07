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

const MessagesOneIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path
          fill="null"
          stroke="#000"
          strokeWidth={4}
          d="M39 6H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3Z"
        />
        <path
          fill="null"
          stroke="#333"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M34 23c0 3.862-2.703 7.157-6.5 8.433-1.09.367-2.269.567-3.5.567-4 0-9 2-9 2l1.132-2.446c.563-1.216.204-2.63-.57-3.723C14.572 26.436 14 24.778 14 23c0-4.97 4.477-9 10-9s10 4.03 10 9Z"
        />
      </svg>
    </span>
  );
};

MessagesOneIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default MessagesOneIcon;
