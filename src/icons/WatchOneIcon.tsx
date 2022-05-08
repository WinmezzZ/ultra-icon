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
const WatchOneIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeWidth={4}
        d="M19 14V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v8m0 20v8a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-8"
      />
      <circle cx={24} cy={24} r={11} fill="null" stroke="#000" strokeWidth={4} />
      <path stroke="#333" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M21 25h4m0-4v4" />
    </svg>
  );
};

WatchOneIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const WatchOneIcon = withWrapper(WatchOneIconComponent);
export default WatchOneIcon;
