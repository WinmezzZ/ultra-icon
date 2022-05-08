/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */

/** @jsx jsx */
import { jsx } from '@emotion/react';
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}
const TargetTwoIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeLinejoin="round"
        strokeMiterlimit={2}
        strokeWidth={4}
        d="M24 41c9.39 0 17-7.61 17-17S33.39 7 24 7 7 14.61 7 24s7.61 17 17 17Z"
      />
      <path
        stroke="#000"
        strokeLinejoin="round"
        strokeMiterlimit={2}
        strokeWidth={4}
        d="M24 32c4.42 0 8-3.58 8-8s-3.58-8-8-8-8 3.58-8 8 3.58 8 8 8Z"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={2}
        strokeWidth={4}
        d="M4 24h40M24 4v40"
      />
    </svg>
  );
};

TargetTwoIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const TargetTwoIcon = withWrapper(TargetTwoIconComponent);
export default TargetTwoIcon;
