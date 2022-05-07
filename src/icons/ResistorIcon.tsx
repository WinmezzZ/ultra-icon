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

const ResistorIcon = (p: SVGComponentProps) => {
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
          strokeLinejoin="round"
          strokeWidth={4}
          d="M9.858 31.071a2 2 0 0 1 0-2.829l2.95-2.95a2 2 0 0 1 1.414-.585h2.585a2 2 0 0 0 1.415-.586l5.899-5.9a2 2 0 0 0 .586-1.413v-2.586a2 2 0 0 1 .586-1.415l2.95-2.95a2 2 0 0 1 2.828 0l7.07 7.072a2 2 0 0 1 0 2.828l-2.949 2.95a2 2 0 0 1-1.414.586h-2.586a2 2 0 0 0-1.414.586l-5.9 5.9a2 2 0 0 0-.585 1.413v2.586a2 2 0 0 1-.586 1.414l-2.95 2.95a2 2 0 0 1-2.828 0l-7.071-7.071Z"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="m7.03 40.97 6.363-6.364m21.214-21.213 6.364-6.364"
        />
      </svg>
    </span>
  );
};

ResistorIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default ResistorIcon;
