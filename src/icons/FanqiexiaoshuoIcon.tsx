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

const FanqiexiaoshuoIcon = (p: SVGComponentProps) => {
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
          fill="#000"
          d="M35.429 4.884c4.217 0 7.653 3.436 7.653 7.653V35.43c0 4.217-3.436 7.653-7.653 7.653H12.537c-4.217 0-7.653-3.436-7.653-7.653V12.537c0-4.217 3.436-7.653 7.653-7.653H35.43Zm0-.884H12.537A8.521 8.521 0 0 0 4 12.537V35.43a8.521 8.521 0 0 0 8.537 8.537H35.43a8.521 8.521 0 0 0 8.537-8.537V12.537C44 7.81 40.156 4 35.429 4Z"
        />
        <path
          fill="#000"
          d="M29.102 4v8.401l3.23-1.836 3.232 1.836V4h-6.462Zm-5.068 14.286c-8.197 0-15.476 3.571-20.034 9.081v8.061a8.521 8.521 0 0 0 8.537 8.538H35.43a8.521 8.521 0 0 0 8.537-8.538v-8.163c-4.558-5.476-11.769-8.98-19.932-8.98Zm-9.422 19.387c-1.496 0-2.21-.544-2.21-1.258s.68-1.293 2.176-1.293c1.497 0 3.3 1.259 3.3 1.259s-1.77 1.292-3.266 1.292Zm1.225-6.462c-1.089-1.055-1.19-1.939-.68-2.45.51-.51 1.394-.441 2.483.647 1.088 1.054 1.428 3.197 1.428 3.197s-2.177-.34-3.231-1.394Zm8.197-.748s-1.293-1.735-1.326-3.266c0-1.496.544-2.21 1.258-2.21s1.293.68 1.293 2.176c.034 1.53-1.225 3.3-1.225 3.3Zm6.326-1.089c1.089-1.054 1.973-1.122 2.483-.646.51.51.409 1.394-.68 2.449-1.088 1.054-3.231 1.36-3.231 1.36s.34-2.108 1.428-3.163Zm2.994 8.3c-1.497 0-3.266-1.327-3.266-1.327s1.77-1.259 3.3-1.259c1.496 0 2.21.613 2.177 1.293 0 .748-.715 1.292-2.211 1.292Z"
        />
      </svg>
    </span>
  );
};

FanqiexiaoshuoIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default FanqiexiaoshuoIcon;
