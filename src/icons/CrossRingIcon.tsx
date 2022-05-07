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

const CrossRingIcon = (p: SVGComponentProps) => {
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
        <g fill="none" fillRule="evenodd" strokeLinejoin="round">
          <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
          <g stroke="#000" strokeWidth={4} transform="translate(4 4)">
            <circle cx={20} cy={4} r={4} fill="null" fillRule="nonzero" />
            <circle cx={20} cy={36} r={4} fill="null" fillRule="nonzero" />
            <circle cx={4} cy={20} r={4} fill="null" fillRule="nonzero" />
            <circle cx={36} cy={20} r={4} fill="null" fillRule="nonzero" />
            <path
              strokeLinecap="round"
              d="M8 20h24M20 8v24M11.11 6.695a16.078 16.078 0 0 0-4.415 4.415m0 17.78a16.078 16.078 0 0 0 4.415 4.415m17.78 0a16.078 16.078 0 0 0 4.415-4.415m0-17.78a16.078 16.078 0 0 0-4.415-4.415"
            />
          </g>
        </g>
      </svg>
    </span>
  );
};

CrossRingIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default CrossRingIcon;
