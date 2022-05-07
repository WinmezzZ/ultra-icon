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

const PaintedScreenIcon = (p: SVGComponentProps) => {
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
        <rect width={38} height={28} x={5} y={10} fill="#2F88FF" stroke="#000" strokeWidth={4} rx={3} />
        <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M13 24v-7" />
        <rect width={4} height={4} x={15} y={29} fill="#fff" rx={2} transform="rotate(90 15 29)" />
      </svg>
    </span>
  );
};

PaintedScreenIcon.propTypes = {
  size: PropTypes.number,
};
export default PaintedScreenIcon;
