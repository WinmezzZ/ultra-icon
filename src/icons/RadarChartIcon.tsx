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

const RadarChartIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <g clipPath="url(#prefix__a)">
          <path fill="#fff" fillOpacity={0.01} d="M48 0H0v48h48V0Z" />
          <path
            fill="null"
            stroke="#000"
            strokeLinejoin="round"
            strokeWidth={4}
            d="m24 3 21.874 15.893L38 45H10L2.125 18.893 24 3Z"
          />
          <path
            stroke="#333"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={4}
            d="m38 45-7-8m-21 8 7-8M2 19l10 3m34-3-10 3M24 3v10"
          />
          <path
            fill="null"
            stroke="#333"
            strokeLinejoin="round"
            strokeWidth={4}
            d="m24 13 6.007 4.57L36 22l-5 15H17l-5-15 5.993-4.43L24 13Z"
          />
          <path
            stroke="#000"
            strokeLinejoin="round"
            strokeWidth={4}
            d="m7.594 14.92-5.469 3.973 1.97 6.526m3.936 13.054L10 45h7m14 0h7l1.968-6.527m.437-23.553 5.469 3.973-1.969 6.526M29.468 6.973 24 3l-5.47 3.973"
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

RadarChartIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default RadarChartIcon;
