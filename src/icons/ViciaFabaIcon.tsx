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

const ViciaFabaIcon = (p: SVGComponentProps) => {
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
        <g strokeLinejoin="round" strokeWidth={4} clipPath="url(#prefix__a)">
          <path
            fill="null"
            stroke="#000"
            d="M4 31c0-6.5 4-8.963 7-9.981C14 20 16 20 19 17s3-9 9-11 13.091 1 15 8c1.908 7-3.5 16-6 19s-7.501 8-16 9c-8.5 1-17-4.5-17-11Z"
          />
          <path stroke="#333" strokeLinecap="round" d="M12 21.044c7 8.956 17 0 10-9.044" />
          <path stroke="#000" strokeLinecap="round" d="M11 21.019C14 20 16 20 19 17s3-9 9-11" />
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

ViciaFabaIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default ViciaFabaIcon;
