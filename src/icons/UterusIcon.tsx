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

const UterusIcon = (p: SVGComponentProps) => {
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
          fill="null"
          stroke="#000"
          strokeWidth={4}
          d="M32 18c-.924 6-3 11.5-7.5 11.5s-6-5-7.5-11.5 0-12 7.5-12 8.422 6 7.5 12Z"
        />
        <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M20 27v16m9-16v16" />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeWidth={4}
          d="M16.5 12c-1.77-1.544-3.86-1.67-6.413-1.495C6.257 10.767 4 13.692 4 18m0 0c0 4.308 2.897 8.182 5.888 7.296 2.992-.887 2.574-4.387 1.175-6.028C9.663 17.628 5.821 17.002 4 18Zm28.5-5.5c1.75-1.632 3.533-2.17 6.34-1.996 4.212.262 5.16 3.144 5.16 7.452m0 0c0 4.309-1.651 8.227-4.941 7.34-3.29-.886-2.83-4.386-1.291-6.027 1.538-1.641 4.23-2.31 6.232-1.313Z"
        />
      </svg>
    </span>
  );
};

UterusIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default UterusIcon;
