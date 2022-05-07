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

const ShakeIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
        <g fill="none" fillRule="evenodd" strokeLinejoin="round">
          <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
          <g strokeWidth={4}>
            <path
              stroke="#000"
              strokeLinecap="round"
              d="m4 10 4 4.667-4 4.666L8 24l-4 4.667 4 4.666L4 38m40-28-4 4.667 4 4.666L40 24l4 4.667-4 4.666L44 38"
            />
            <path fill="null" fillRule="nonzero" stroke="#000" d="M14 6h20v36H14z" />
            <path stroke="#FFF" strokeLinecap="round" d="M22 35h4" />
          </g>
        </g>
      </svg>
    </span>
  );
};

ShakeIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default ShakeIcon;
