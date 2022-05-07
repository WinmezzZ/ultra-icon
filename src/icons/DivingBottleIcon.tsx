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

const DivingBottleIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={2}
          strokeWidth={4}
          d="m4 40 2.5 1.351c1.6.865 3.4.865 5 0 1.6-.864 3.4-.864 5 0 1.6.865 3.4.865 5 0 1.6-.864 3.4-.864 5 0 1.6.865 3.4.865 5 0 1.6-.864 3.4-.864 5 0 1.6.865 3.4.865 5 0L44 40M14 11V4m17 7V4M21 8V4m17 4V4"
        />
        <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M12 6h8m9 0h8" />
        <rect
          width={8}
          height={24}
          x={10}
          y={11}
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          rx={4}
        />
        <rect
          width={8}
          height={24}
          x={27}
          y={11}
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          rx={4}
        />
        <path
          fill="null"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M27 15a4 4 0 0 1 8 0v4h-8v-4Zm-17 0a4 4 0 0 1 8 0v4h-8v-4Z"
        />
      </svg>
    </span>
  );
};

DivingBottleIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default DivingBottleIcon;
