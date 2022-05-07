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

const IntermediateModeIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path
          fill="null"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          strokeWidth={4}
          d="m24.003 4 5.27 5.27h9.457v9.456l5.27 5.27-5.27 5.278v9.456h-9.456L24.004 44l-5.278-5.27H9.27v-9.456L4 23.997l5.27-5.27V9.27h9.456L24.003 4Z"
        />
        <path
          stroke="#333"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          strokeWidth={4}
          d="M24 16c3.993.5 7 4 7 8s-3 7.5-7 7.955"
        />
      </svg>
    </span>
  );
};

IntermediateModeIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default IntermediateModeIcon;
