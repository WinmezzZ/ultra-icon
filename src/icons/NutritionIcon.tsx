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

const NutritionIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <path
          fill="null"
          fillRule="evenodd"
          stroke="#000"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M24 42h5.955c.083-2.737.484-4.242 1.204-4.515C38.669 34.635 44 27.434 44 19H4c0 8.251 5.103 15.323 12.357 18.294.758.31 1.325 1.88 1.699 4.706H24Z"
          clipRule="evenodd"
        />
        <path
          stroke="#333"
          strokeLinecap="round"
          strokeWidth={4}
          d="M14.443 26.022c.36 1.188.836 2.169 1.427 2.943a11.253 11.253 0 0 0 2.14 2.104"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeWidth={4}
          d="M32.2 8.017a16.767 16.767 0 0 0-4.047-1.612M22.05 6c-7.123.822-12.906 6.098-14.55 13m33-.004a17.144 17.144 0 0 0-3.883-7.434"
        />
      </svg>
    </span>
  );
};

NutritionIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default NutritionIcon;
