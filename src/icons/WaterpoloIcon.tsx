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

const WaterpoloIcon = (p: SVGComponentProps) => {
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
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={2}
          strokeWidth={4}
          d="m4 34 2.5 1.351c1.6.865 3.4.865 5 0 1.6-.864 3.4-.864 5 0 1.6.865 3.4.865 5 0 1.6-.864 3.4-.864 5 0 1.6.865 3.4.865 5 0 1.6-.864 3.4-.864 5 0 1.6.865 3.4.865 5 0L44 34M4 40l2.5 1.351c1.6.865 3.4.865 5 0 1.6-.864 3.4-.864 5 0 1.6.865 3.4.865 5 0 1.6-.864 3.4-.864 5 0 1.6.865 3.4.865 5 0 1.6-.864 3.4-.864 5 0 1.6.865 3.4.865 5 0L44 40m-.412-12c.79-3.829.46-7.938-1.19-11.807C38.09 6.026 26.343 1.277 16.186 5.596 7.29 9.375 2.55 18.832 4.39 27.94"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={2}
          strokeWidth={4}
          d="M16 6c-1.53 7.17 1.79 14.11 8 18m-.61 4c.35-1.29.56-2.63.61-4m20 2c-5.45-4.91-13.53-5.44-20-2"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={2}
          strokeWidth={4}
          d="M18 16s10.56-8.49 23-2M13 28c-2.99-3.27-5.74-7.71-6-14m27.31 8.09s.22 2.5-.38 5.95"
        />
      </svg>
    </span>
  );
};

WaterpoloIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default WaterpoloIcon;
