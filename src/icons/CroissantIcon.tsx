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

const CroissantIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <g stroke="#000" strokeWidth={4} clipPath="url(#prefix__a)">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 29s-.044 3.748 1.456 8.248c.873 2.616 1.914 4.219 3.223 5.003 1.677 1.006 3.397-.98 4.379-2.67.962-1.656 2.375-3.353 3.49-4.581M33 7.912c2.623.439 5.532 1.005 6.626 1.507 1.426.654 2.86 1.987 3.431 3.412.531 1.324-.847 2.34-2.093 3.034-1.405.783-2.869 2.01-4.065 3.135"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M24.202 29.776 21.7 31.514a2.97 2.97 0 0 0-1.036 1.27v0a2.97 2.97 0 0 1-3.886 1.566l-7.975-3.37a2.96 2.96 0 0 1-1.61-3.792l.45-1.168a11.112 11.112 0 0 1 4.576-5.486v0m18.501 3.974 1.39-1.504.912-.987c.315-.34.699-.611 1.125-.794v0a3.305 3.305 0 0 0 1.812-4.147l-2.852-8.01a2.797 2.797 0 0 0-3.259-1.788l-1.218.278A10.798 10.798 0 0 0 22.114 12v0"
          />
          <path d="M13.41 23.079a3.817 3.817 0 0 1-1.017-5.12 19.03 19.03 0 0 1 6.154-6.136 3.8 3.8 0 0 1 5.036.954l5.932 7.91a4 4 0 0 1-.913 5.681l-.24.167c-.301.21-.572.46-.804.743l-.684.833a4 4 0 0 1-5.416.716l-8.047-5.748Z" />
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

CroissantIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default CroissantIcon;
