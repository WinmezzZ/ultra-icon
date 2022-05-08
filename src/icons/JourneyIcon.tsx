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
const JourneyIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <g stroke="#000" strokeLinecap="round" strokeWidth={4} clipPath="url(#prefix__a)">
        <path
          strokeLinejoin="round"
          d="M24 40c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15Z"
        />
        <path d="M20 11c1.805 1.008 3.5 2.5 3.358 4.445-.114 1.555-1.443 1.902-1.721 3.026-.278 1.124 1.33 2.35-1.39 4.165C18.431 23.846 12.97 26.145 9 24" />
        <path
          strokeLinejoin="round"
          d="M9.5 24.5C6.5 26.388 2.068 31.521 4 35c2.5 4.5 12 .69 23-8S42.23 5.606 42.23 5.606L37 7"
        />
        <path d="M26 40s.5-5 4-8 8-3 8-3" />
      </g>
      <defs>
        <clipPath id="prefix__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

JourneyIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const JourneyIcon = withWrapper(JourneyIconComponent);
export default JourneyIcon;
