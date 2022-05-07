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

const FinancingOneIcon = (p: SVGComponentProps) => {
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
          fill="null"
          stroke="#000"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M15 14.384C19.125 16 24.008 16 24.008 16S28.88 16 33 14.384c4.502 5.254 7.656 12.18 9.73 18.013C44.829 38.303 40.2 44 33.933 44H14.02c-6.252 0-10.874-5.671-8.786-11.564 2.064-5.822 5.22-12.75 9.766-18.052Z"
        />
        <path
          stroke="#333"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M18 28h12m-12 6h12m-5.992-6v10M30 22l-6 6-6-6"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M24 16c7.18 0 13-2.686 13-6s-5.82-6-13-6-13 2.686-13 6 5.82 6 13 6Z"
          clipRule="evenodd"
        />
      </svg>
    </span>
  );
};

FinancingOneIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default FinancingOneIcon;
