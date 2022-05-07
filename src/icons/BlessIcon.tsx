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

const BlessIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg
        fill="currentColor"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        {...props}
      >
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M21 24.713V5.935a1.935 1.935 0 0 0-3.828-.405l-4.114 19.199a1.97 1.97 0 0 1-.188.516l-7.316 13.82C4.85 40.395 5.814 42 7.322 42h8.084a2 2 0 0 0 1.95-1.554l3.124-13.672.44-1.499a2 2 0 0 0 .08-.562ZM13 25l7 3m7-3.287V5.935a1.935 1.935 0 0 1 3.828-.405l4.114 19.199c.038.18.102.354.188.516l7.316 13.82c.705 1.331-.26 2.935-1.768 2.935h-8.084a2 2 0 0 1-1.95-1.554L27.52 26.774l-.44-1.499a2 2 0 0 1-.08-.562ZM35 25l-7 3"
        />
      </svg>
    </span>
  );
};

BlessIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default BlessIcon;
