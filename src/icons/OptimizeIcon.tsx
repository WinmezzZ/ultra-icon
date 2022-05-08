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
const OptimizeIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="m19 8 9 8 10.032-5.89L33 21l9 8-12-1-4.5 10L23 27l-12-1 10.508-6.35L19 8Z"
      />
      <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M8 42.02 23 27" />
    </svg>
  );
};

OptimizeIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const OptimizeIcon = withWrapper(OptimizeIconComponent);
export default OptimizeIcon;
