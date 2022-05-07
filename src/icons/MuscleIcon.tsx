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

const MuscleIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path
          fill="null"
          d="M21.37 36c1.45-5.25 6.52-9 12.36-8.38 5.56.59 9.98 5.28 10.26 10.86.07 1.47-.13 2.88-.56 4.19-.26.8-1.04 1.33-1.89 1.33H11.758c-5.048 0-8.834-4.619-7.844-9.569L10 4h12l4 7-8.57 6.13L15 14"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={2}
          strokeWidth={4}
          d="M21.37 36c1.45-5.25 6.52-9 12.36-8.38 5.56.59 9.98 5.28 10.26 10.86.07 1.47-.13 2.88-.56 4.19-.26.8-1.04 1.33-1.89 1.33H11.758c-5.048 0-8.834-4.619-7.844-9.569L10 4h12l4 7-8.57 6.13L15 14m2.44 3.13L22 34"
        />
      </svg>
    </span>
  );
};

MuscleIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default MuscleIcon;
