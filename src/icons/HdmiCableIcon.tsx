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

const HdmiCableIcon = (p: SVGComponentProps) => {
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
          fill="null"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M4 16a2 2 0 0 1 2-2h36a2 2 0 0 1 2 2v8.646c0 .818-.502 1.556-1.18 2.014-1.219.825-3.026 2.49-3.622 5.352C38.973 33.093 38.105 34 37 34H11c-1.105 0-1.973-.907-2.198-1.988-.596-2.863-2.403-4.527-3.623-5.352C4.502 26.202 4 25.464 4 24.646V16Z"
        />
        <path
          stroke="#333"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M14 28h20m-20 0v-3m7 3v-3m6 3v-3m7 3v-3m-23-5h2m6 0h2m6 0h2m6 0h2"
        />
      </svg>
    </span>
  );
};

HdmiCableIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default HdmiCableIcon;
