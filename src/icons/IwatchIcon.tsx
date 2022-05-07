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

const IwatchIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <path fill="null" stroke="#000" strokeLinejoin="round" strokeWidth={4} d="M36 12H10v24h26V12Z" />
        <path
          fill="null"
          stroke="#333"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M27 24a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeWidth={4}
          d="M15 12c0-.073.008-.146.025-.217l1.607-7A1.026 1.026 0 0 1 17.641 4h10.743c.484 0 .903.326 1.008.783l1.608 7M15 36c0 .073.008.146.025.217l1.607 7c.105.458.524.783 1.009.783h10.743c.484 0 .903-.325 1.008-.783l1.608-7M39 16v4"
        />
      </svg>
    </span>
  );
};

IwatchIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default IwatchIcon;
