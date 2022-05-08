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
const MonitorTwoIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M42.5 16.387a20.018 20.018 0 0 0-4-6.162A19.943 19.943 0 0 0 24 4C12.954 4 4 12.954 4 24h10l5 8 9-18 7 10h9c0 11.046-8.954 20-20 20-5.45 0-10.393-2.18-14-5.717A20.04 20.04 0 0 1 5.664 32"
      />
    </svg>
  );
};

MonitorTwoIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const MonitorTwoIcon = withWrapper(MonitorTwoIconComponent);
export default MonitorTwoIcon;
