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

const PeriodIcon = (p: SVGComponentProps) => {
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
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <path
          stroke="#000"
          strokeLinecap="square"
          strokeWidth={4}
          d="M8 4c4.002 3.337 6.003 6.671 6.003 10.005 0 5-4.003 7.239-6.003 9.995-2 2.756-2.995 5.931-2.995 10.003 0 2.715.998 6.047 2.995 9.997M40.003 4C36.001 7.337 34 10.671 34 14.005c0 5 4.004 7.239 6.004 9.995 2 2.756 2.995 5.931 2.995 10.003 0 2.715-.998 6.047-2.995 9.997m-26-14.817c2.522-.242 4.615.118 6.281 1.08 2.5 1.445 3.707 3.097 3.715 4.694.006 1.065.006 4.08 0 9.043m10.004-14.817c-2.522-.242-4.615.118-6.281 1.08-2.5 1.445-3.707 3.097-3.715 4.694"
        />
      </svg>
    </span>
  );
};

PeriodIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default PeriodIcon;
