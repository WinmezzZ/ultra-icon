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

const SwimmingRingIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeWidth={4}
          d="M28 33.168A10.036 10.036 0 0 0 33.168 28m-18.336 0A10.037 10.037 0 0 0 20 33.168m0-18.336A10.037 10.037 0 0 0 14.832 20M28 14.832A10.036 10.036 0 0 1 33.168 20M30 40.976A18.05 18.05 0 0 0 40.976 30M7.024 30A18.05 18.05 0 0 0 18 40.976m0-33.952A18.05 18.05 0 0 0 7.024 18M30 7.024A18.05 18.05 0 0 1 40.976 18"
        />
        <path
          fill="null"
          stroke="#000"
          strokeLinejoin="round"
          strokeMiterlimit={2}
          strokeWidth={4}
          d="M27 17h-6L18 7l2-3h8l2 3-3 10Zm-10 4v6L7 30l-3-2v-8l3-2 10 3Zm4 10h6l3 10-2 3h-8l-2-3 3-10Zm10-4v-6l10-3c1.08.8 1.92 1.2 3 2v8c-1.08.8-1.92 1.2-3 2l-10-3Z"
        />
      </svg>
    </span>
  );
};

SwimmingRingIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default SwimmingRingIcon;
