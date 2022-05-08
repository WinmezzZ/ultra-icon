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
const MonitorOneIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M5 8a2 2 0 0 1 2-2h34a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8Z"
      />
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M5 26a2 2 0 0 1 2-2h34a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-6Z"
      />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="m22 12-4 5m10-3-3 4" />
      <circle cx={24} cy={29} r={2} fill="#fff" />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="m17 34-3 8h20l-3-8" />
    </svg>
  );
};

MonitorOneIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const MonitorOneIcon = withWrapper(MonitorOneIconComponent);
export default MonitorOneIcon;
