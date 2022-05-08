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
const VerticalTimelineIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M4 5h40M4 43h40M8 36v7" />
      <path
        fill="null"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M12 28H4v8h8v-8Zm16-8h-8v8h8v-8Zm16-8h-8v8h8v-8Z"
      />
      <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M40 20v23M8 12v1m0 7v1m15-9v1m1 15v15" />
    </svg>
  );
};

VerticalTimelineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const VerticalTimelineIcon = withWrapper(VerticalTimelineIconComponent);
export default VerticalTimelineIcon;
