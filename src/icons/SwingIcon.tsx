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

const SwingIcon = (p: SVGComponentProps) => {
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
        <g stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} clipPath="url(#prefix__a)">
          <path
            fill="null"
            d="M10 36c-1.999-3.5-2-10-2-19 0-3 4-4 6-1 1.108 1.662 1.816 6.264 1.816 6.264l6.495-11.25a2.52 2.52 0 0 1 4.366 2.521l.388-.671a2.52 2.52 0 1 1 4.365 2.52l-.388.672a2.52 2.52 0 1 1 4.366 2.52l-1.553 2.689a2.523 2.523 0 0 1 4.373 2.518L29.06 39.745c-.097.17-.197.337-.32.489C28.167 40.94 26.144 43 22 43c-4.659 0-9.521-2.66-12-7Z"
          />
          <path d="M37 5c1.379.733 3.505 1.758 5 4 1 1.5 1.5 3.5 1.79 6" />
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

SwingIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default SwingIcon;
