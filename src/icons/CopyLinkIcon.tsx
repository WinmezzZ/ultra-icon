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

const CopyLinkIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0V0Z" />
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <path stroke="#000" strokeWidth={4} d="M12 9.927V7a3 3 0 0 1 3-3h26a3 3 0 0 1 3 3v26a3 3 0 0 1-3 3h-2.983" />
        <rect
          width={34}
          height={34}
          x={4}
          y={10}
          fill="null"
          stroke="#000"
          strokeLinejoin="round"
          strokeWidth={4}
          rx={3}
        />
        <g stroke="#333" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4}>
          <path d="m18.44 23.11 5.292-5.51c1.452-1.451 3.837-1.42 5.328.072 1.492 1.49 1.524 3.876.072 5.328l-1.91 2.023m-13.756 3.724c-.51.51-1.565 1.53-1.565 1.53-1.452 1.45-1.492 4.038 0 5.53 1.49 1.49 3.876 1.522 5.328.07l5.164-4.688" />
          <path d="M18.663 28.328a3.863 3.863 0 0 1-1.13-2.473A3.666 3.666 0 0 1 18.591 23m3.731 2.861c1.49 1.491 1.523 3.877.071 5.328" />
        </g>
      </svg>
    </span>
  );
};

CopyLinkIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default CopyLinkIcon;
