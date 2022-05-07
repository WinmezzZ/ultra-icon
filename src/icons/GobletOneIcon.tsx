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

const GobletOneIcon = (p: SVGComponentProps) => {
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
        <g stroke="#000" strokeWidth={4} clipPath="url(#prefix__a)">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m5.737 24.121 4.95 4.95c5.076 5.077 13.307 5.077 18.384 0v0c5.077-5.077 5.077-13.308 0-18.385l-4.95-4.95"
          />
          <path strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={2} d="m30 30 6 6" />
          <ellipse cx={14} cy={14} rx={13} ry={7} transform="rotate(-45 14 14)" />
          <ellipse cx={38} cy={38} rx={6} ry={3} transform="rotate(-45 38 38)" />
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

GobletOneIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default GobletOneIcon;
