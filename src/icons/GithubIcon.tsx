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

const GithubIcon = (p: SVGComponentProps) => {
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
        <path
          fill="#000"
          fillRule="evenodd"
          d="M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20S35.046 4 24 4ZM0 24C0 10.745 10.745 0 24 0s24 10.745 24 24-10.745 24-24 24S0 37.255 0 24Z"
          clipRule="evenodd"
        />
        <path
          fill="#000"
          fillRule="evenodd"
          d="M19.183 45.471c-.193-.25-.193-2.474 0-6.673-2.072.072-3.38-.072-3.927-.431-.82-.54-1.64-2.2-2.367-3.371-.728-1.171-2.343-1.356-2.995-1.618-.652-.262-.816-1.328 1.797-.522 2.613.807 2.74 3.005 3.565 3.518.824.514 2.795.29 3.689-.122.893-.412.827-1.944.986-2.551.202-.567-.508-.693-.524-.697-.872 0-5.453-.997-6.712-5.433-1.258-4.437.363-7.337 1.228-8.584.576-.83.525-2.602-.153-5.313 2.463-.315 4.364.46 5.703 2.326.002.01 1.755-1.043 4.527-1.043 2.772 0 3.755.858 4.514 1.043.759.185 1.366-3.266 6.053-2.326-.979 1.923-1.798 4.326-1.173 5.313.626.988 3.08 4.128 1.572 8.584-1.005 2.97-2.98 4.781-5.928 5.433-.338.107-.507.281-.507.521 0 .36.457.4 1.115 2.087.439 1.124.47 4.336.095 9.635-.95.242-1.69.404-2.22.488-.937.147-1.954.23-2.954.261-1 .032-1.348.029-2.73-.1a19.798 19.798 0 0 1-2.654-.425Z"
          clipRule="evenodd"
        />
      </svg>
    </span>
  );
};

GithubIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default GithubIcon;
