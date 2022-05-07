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

const EggplantIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path
          stroke="#000"
          strokeWidth={4}
          d="m35 18-3.88 12.612c-.08.259-.155.514-.248.768-.548 1.498-2.99 7.04-9.871 9.62C13 44 4.999 40 5 32.077 5 24.154 13 25 17 22s8-9 8-9"
        />
        <path
          fill="null"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M39.255 24.488S40.371 19.175 40 16c-.505-4.328-2.5-7.5-5-9-2.502-1.5-7.748-2.5-12 0-4.253 2.5-6.033 5.845-6.033 5.845l8.206-.768a1 1 0 0 1 1.055.721l1.497 5.24a1 1 0 0 0 1.236.687l5.282-1.509a1 1 0 0 1 1.145.467l3.865 6.805Z"
        />
        <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="m36 8 6-2" />
      </svg>
    </span>
  );
};

EggplantIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default EggplantIcon;
