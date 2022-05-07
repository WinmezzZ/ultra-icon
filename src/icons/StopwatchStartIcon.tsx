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

const StopwatchStartIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
        <g fill="none" fillRule="evenodd" strokeLinejoin="round">
          <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
          <g strokeWidth={4} transform="translate(7 3)">
            <circle cx={17} cy={24} r={17} fill="null" fillRule="nonzero" stroke="#000" />
            <path stroke="#000" strokeLinecap="round" d="M11 1h12" />
            <path stroke="#FFF" strokeLinecap="round" d="M17 16v8m8 0h-8" />
            <path stroke="#000" strokeLinecap="round" d="M17 1v4" />
          </g>
        </g>
      </svg>
    </span>
  );
};

StopwatchStartIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default StopwatchStartIcon;
