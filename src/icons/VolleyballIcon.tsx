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

const VolleyballIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path
          stroke="#000"
          strokeLinejoin="round"
          strokeMiterlimit={2}
          strokeWidth={4}
          d="M31.81 42.405c10.168-4.319 14.907-16.056 10.598-26.213C38.098 6.035 26.351 1.276 16.193 5.595 6.035 9.914 1.275 21.65 5.595 31.808 9.914 41.965 21.652 46.724 31.81 42.405Z"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={2}
          strokeWidth={4}
          d="M16 6c-1.494 7.01 1.937 14.197 8 18M12 40c6.97-2.26 11.74-8.68 12-16m20 1c-5.45-4.672-14.5-4.597-20-1"
        />
        <path
          stroke="#000"
          strokeLinejoin="round"
          strokeMiterlimit={2}
          strokeWidth={4}
          d="M17 16s11.56-8.49 24-2M20 33S7.59 28.02 7 14m27 8s1.56 14.5-10.28 22.03"
        />
      </svg>
    </span>
  );
};

VolleyballIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default VolleyballIcon;
