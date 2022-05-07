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

const WholeSiteAcceleratorIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <circle cx={22} cy={40} r={4} fill="null" stroke="#000" strokeWidth={4} />
        <circle cx={26} cy={8} r={4} fill="null" stroke="#000" strokeWidth={4} />
        <circle cx={36} cy={24} r={4} fill="null" stroke="#000" strokeWidth={4} />
        <circle cx={12} cy={24} r={4} fill="null" stroke="#000" strokeWidth={4} />
        <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M32 24H16m7-13-8 10" />
        <path stroke="#000" strokeWidth={4} d="m33 27-8.001 10" />
      </svg>
    </span>
  );
};

WholeSiteAcceleratorIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default WholeSiteAcceleratorIcon;
