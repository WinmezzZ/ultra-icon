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
const TimelineIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <g clipPath="url(#prefix__a)">
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <path fill="#fff" fillOpacity={0.01} d="M48 0H0v48h48V0Z" />
        <path
          fill="null"
          stroke="#000"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M13 12a4 4 0 1 0 8 0 4 4 0 0 0-8 0Zm18 12a4 4 0 1 0 8 0 4 4 0 0 0-8 0ZM13 36a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z"
        />
        <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M4 36h9m8 0h23M4 12h9m8 0h23" />
        <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M4 4v40" />
        <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M4 24h27m8 0h5" />
      </g>
      <defs>
        <clipPath id="prefix__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

TimelineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const TimelineIcon = withWrapper(TimelineIconComponent);
export default TimelineIcon;
