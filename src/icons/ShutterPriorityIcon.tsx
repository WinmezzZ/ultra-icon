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

const ShutterPriorityIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path stroke="#000" strokeLinejoin="round" strokeWidth={4} d="m15 12 3-6h12l3 6H15Z" />
        <path
          fill="null"
          stroke="#000"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M41 12H7c-1.657 0-3 1.254-3 2.8v24.4C4 40.746 5.343 42 7 42h34c1.657 0 3-1.254 3-2.8V14.8c0-1.546-1.343-2.8-3-2.8Z"
        />
        <path
          stroke="#333"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M28 20c-3 .13-9 1.089-9 3.889 0 3.5 10 2.722 10 6.222 0 2.8-6.667 3.76-10 3.889"
        />
      </svg>
    </span>
  );
};

ShutterPriorityIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default ShutterPriorityIcon;
