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

const AfroPickIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <g stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} clipPath="url(#prefix__a)">
          <path d="M21 4.373 4.03 21.343l22.627 22.628L43.627 27m-16.97-16.97L9.687 27m22.627-11.314-16.97 16.97M37.97 21.343 21 38.313" />
          <path
            fill="null"
            d="m16.05 41.85 4.243-4.243-9.9-9.9-4.242 4.243 2.121 2.121 1.414 4.243 4.243 1.414 2.121 2.121Z"
          />
        </g>
        <defs>
          <clipPath id="prefix__a">
            <path fill="#fff" d="M0 0h48v48H0z" />
          </clipPath>
        </defs>
      </svg>
    </span>
  );
};

AfroPickIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default AfroPickIcon;
