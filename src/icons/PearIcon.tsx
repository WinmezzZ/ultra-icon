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

const PearIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path
          fill="null"
          stroke="#000"
          strokeWidth={4}
          d="M16.64 12.746a8.081 8.081 0 0 1 14.722 0l3.06 6.754 3.685 6.322a9.88 9.88 0 0 1-1.652 12.063l-1.19 1.156a8.013 8.013 0 0 1-10.634.472 1.002 1.002 0 0 0-1.262 0 8.013 8.013 0 0 1-10.634-.472l-1.19-1.156a9.88 9.88 0 0 1-1.652-12.063L13.58 19.5l3.06-6.754Z"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeWidth={4}
          d="M21.5 4c.667.5 2.1 1.9 2.5 3.5.4 1.6.167 3.333 0 4"
        />
        <circle cx={16} cy={28} r={2} fill="#fff" />
        <circle cx={18} cy={34} r={2} fill="#fff" />
        <circle cx={23} cy={30} r={2} fill="#fff" />
      </svg>
    </span>
  );
};

PearIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default PearIcon;
