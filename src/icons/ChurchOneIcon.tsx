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

const ChurchOneIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M24 4v12m-4-8h8" />
        <path
          stroke="#000"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M15 28H9a2 2 0 0 0-2 2v14m26-16h6a2 2 0 0 1 2 2v14"
        />
        <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M4 44h40" />
        <path
          fill="null"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="m15 23 9-8 9 8v21H15V23Z"
        />
        <path stroke="#333" strokeLinecap="round" strokeWidth={4} d="M24 34v10" />
        <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M20 44h8" />
      </svg>
    </span>
  );
};

ChurchOneIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default ChurchOneIcon;
