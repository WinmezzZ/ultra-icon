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

const RadiationIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        fill="currentColor"
        {...props}
      >
        <g fill="none" fillRule="evenodd">
          <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
          <g transform="translate(4 6)">
            <circle cx={20.004} cy={18} r={3} fill="#000" />
            <path
              fill="null"
              fillRule="nonzero"
              stroke="#000"
              strokeLinejoin="round"
              strokeWidth={4}
              d="M15.04 25.476A8.94 8.94 0 0 0 20 26.969a8.94 8.94 0 0 0 4.96-1.493l6.061 9.207A19.867 19.867 0 0 1 20 38c-4.073 0-7.861-1.22-11.021-3.317l6.062-9.207Zm-4.024-6.992-10.98.661A20.062 20.062 0 0 1 11.053 0l4.92 9.869a9.028 9.028 0 0 0-4.958 8.615Zm13.01-8.615L28.946 0a20.062 20.062 0 0 1 11.019 19.145l-10.98-.661a9.028 9.028 0 0 0-4.958-8.615Z"
            />
          </g>
        </g>
      </svg>
    </span>
  );
};

RadiationIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default RadiationIcon;
