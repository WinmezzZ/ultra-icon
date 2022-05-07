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

const RattleIcon = (p: SVGComponentProps) => {
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
        <g stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} clipPath="url(#prefix__a)">
          <circle cx={30.075} cy={15.562} r={11} fill="null" transform="rotate(40 30.075 15.562)" />
          <path d="M21.648 8.492c-4.61.048-6.326-3.35-8.576-.67-2.033 2.423.493 5.636-1.435 7.934m13.665 10.161-5.785 6.895c-1.607 1.915-1.682 5.115-3.61 7.413-1.928 2.299-4.746 2.545-7.044.617-2.298-1.929-2.545-4.746-.617-7.044 1.929-2.299 5.068-2.928 6.675-4.843 1.607-1.915 5.163-5.894 5.785-6.895" />
          <circle cx={11.24} cy={19.34} r={3} fill="null" transform="rotate(40 11.24 19.34)" />
          <circle cx={28.463} cy={37.707} r={3} fill="null" transform="rotate(40 28.463 37.707)" />
          <path d="M37.216 24.165c.63 3.14 2.852 8.268.862 9.862-1.99 1.594-6.524-1.559-7.687 1.382" />
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

RattleIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default RattleIcon;
