/**
 * These code auto generated by UltraIcon
 */

/** @jsx jsx */
import { jsx } from '@emotion/react';
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import iconStyle from '../styles';
import merge from '../utils/merge';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const defaultProps = {
  size: 24,
};

const FormulaIcon = (p: SVGComponentProps) => {
  const { size, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle} className="ultra-icon">
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
          d="m40 9-3-3H8l18 18L8 42h29l3-3"
        />
      </svg>
    </span>
  );
};

FormulaIcon.propTypes = {
  size: PropTypes.number,
};
export default FormulaIcon;
