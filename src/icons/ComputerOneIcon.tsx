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

const ComputerOneIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path
          stroke="#000"
          strokeWidth={4}
          d="M10 6a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v36a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2V6Z"
        />
        <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M17 12h14" />
        <circle cx={17} cy={21} r={2} fill="#000" />
        <circle cx={17} cy={27} r={2} fill="#000" />
        <circle cx={17} cy={33} r={2} fill="#000" />
        <circle cx={24} cy={21} r={2} fill="#000" />
        <circle cx={24} cy={27} r={2} fill="#000" />
        <circle cx={24} cy={33} r={2} fill="#000" />
        <circle cx={31} cy={21} r={2} fill="#000" />
        <circle cx={31} cy={27} r={2} fill="#000" />
        <circle cx={31} cy={33} r={2} fill="#000" />
      </svg>
    </span>
  );
};

ComputerOneIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default ComputerOneIcon;
