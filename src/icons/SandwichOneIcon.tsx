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

const SandwichOneIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <g strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} clipPath="url(#prefix__a)">
          <path
            stroke="#000"
            d="M17.799 40.142s4.16 4.16 8.652 2.995c4.492-1.165 15.805-12.478 16.97-16.97 1.165-4.493-2.995-8.652-2.995-8.652M7.9 30.243s-4.16-4.16-2.995-8.652c1.164-4.492 12.478-15.806 16.97-16.97 4.492-1.165 8.652 2.994 8.652 2.994"
          />
          <rect
            width={40}
            height={14}
            x={5.071}
            y={33.071}
            fill="null"
            stroke="#000"
            rx={7}
            transform="rotate(-45 5.071 33.071)"
          />
          <path
            stroke="#333"
            d="m15.678 33.778.563-1.688a5.996 5.996 0 0 1 3.326-3.615l.42-.18a4.98 4.98 0 0 0 2.762-3.002v0a4.98 4.98 0 0 1 2.762-3.002l.95-.407a4.712 4.712 0 0 0 2.614-2.841v0a4.712 4.712 0 0 1 2.98-2.98l2.008-.67"
          />
        </g>
        <defs>
          <clipPath id="prefix__a">
            <path fill="#fff" d="M0 0h48v48H0z" />
          </clipPath>
        </defs>
      </svg>
    </span>
  );
};

SandwichOneIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default SandwichOneIcon;
