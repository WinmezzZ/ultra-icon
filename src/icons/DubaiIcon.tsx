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

const DubaiIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M14 4v40" />
        <path stroke="#000" strokeWidth={4} d="M14.5 6S28 13 32 22s1 22 1 22" />
        <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M4 44h40" />
        <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M10 15h22m-18 7h8m-8 7h12m-12 7h13" />
      </svg>
    </span>
  );
};

DubaiIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default DubaiIcon;
