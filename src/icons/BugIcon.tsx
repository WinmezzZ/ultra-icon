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

const BugIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        fill="currentColor"
        {...props}
      >
        <g fill="none" fillRule="evenodd" strokeLinejoin="round">
          <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
          <g strokeWidth={4}>
            <path
              fill="null"
              fillRule="nonzero"
              stroke="#000"
              d="M24 42c12 0 14-10.468 14-14V14H10v14c0 3.45 2 14 14 14Z"
            />
            <path stroke="#000" strokeLinecap="round" d="m4 8 6 6m34-6-6 6M4 27h6m34 0h-6M7 44l6-6m28 6-6-6" />
            <path stroke="#FFF" strokeLinecap="round" d="M24 42V14" />
            <path
              stroke="#000"
              strokeLinecap="round"
              d="M14.92 39.04C17.002 40.784 19.925 42 24 42h0c4.111 0 7.049-1.229 9.134-2.986"
            />
            <path
              fill="null"
              fillRule="nonzero"
              stroke="#000"
              d="M32 12.333C32 7.731 28.418 4 24 4s-8 3.731-8 8.333V14h16v-1.667Z"
            />
          </g>
        </g>
      </svg>
    </span>
  );
};

BugIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default BugIcon;
