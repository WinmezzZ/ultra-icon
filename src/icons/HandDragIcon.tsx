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

const HandDragIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeWidth={4}
          d="M9.583 27.183C7.867 28.354 7.009 30.293 7.009 33c0 4.06 4.991 11 9.492 11h11.515c4.405 0 7.08-3.85 7.08-6.94V24.6a3.253 3.253 0 0 0-3.243-3.253 3.235 3.235 0 0 0-3.245 3.226v.11"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeWidth={4}
          d="M10.981 29.445V7.663a3.217 3.217 0 0 1 6.435 0v15.985"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M17.416 24v-4.192a2.804 2.804 0 1 1 5.608 0v4.62"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M23 24.658v-2.85a2.804 2.804 0 1 1 5.608 0v3.196"
        />
        <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M11 8h30" />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="m36 12.5 1.667-1.5L41 8l-3.333-3L36 3.5"
        />
      </svg>
    </span>
  );
};

HandDragIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default HandDragIcon;
