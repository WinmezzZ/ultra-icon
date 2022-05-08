/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */

/** @jsx jsx */
import { jsx } from '@emotion/react';
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}
const FireworksIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <g fill="none" fillRule="evenodd">
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <g transform="translate(6 2)">
          <path
            fill="null"
            fillRule="nonzero"
            stroke="#000"
            strokeLinejoin="round"
            strokeWidth={4}
            d="m0 40 8.674-24.736L25 32.038z"
          />
          <path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={4}
            d="m17 17 5-5c2.667-2.667 3-5 1-7m0 18 5-5c3.333-3.333 6.667-3.333 10 0"
          />
          <circle cx={14} cy={3} r={2} fill="#000" />
          <circle cx={36} cy={2} r={2} fill="#000" />
          <circle cx={36} cy={25} r={2} fill="#000" />
          <circle cx={33} cy={34} r={2} fill="#000" />
        </g>
      </g>
    </svg>
  );
};

FireworksIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const FireworksIcon = withWrapper(FireworksIconComponent);
export default FireworksIcon;
