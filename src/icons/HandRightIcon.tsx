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

const HandRightIcon = (p: SVGComponentProps) => {
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
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <path fill="null" stroke="#000" strokeLinejoin="round" strokeWidth={4} d="M10.027 40.974v-22h-6v22h6Z" />
        <path
          stroke="#000"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M10.027 18.974c7.123-6.52 11.25-10.26 12.383-11.222 1.7-1.444 3.62-.838 3.62 2.775 0 3.612-5.285 5.695-5.285 8.447-.003.016 6.756.017 20.278.003a3 3 0 0 1 3.004 2.998v.003a3.004 3.004 0 0 1-3.005 3.004h-8.009c-1.209 7.973-1.876 12.307-2 13.004-.188 1.044-1.185 2.988-4.054 2.988H10.027v-22Z"
          clipRule="evenodd"
        />
      </svg>
    </span>
  );
};

HandRightIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default HandRightIcon;
