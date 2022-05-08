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
const GraphicStitchingIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="m24 24 10-10c0-5.523-4.477-10-10-10S14 8.477 14 14l10 10Z"
        clipRule="evenodd"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="m14 34 10-10-10-10C8.477 14 4 18.477 4 24s4.477 10 10 10Zm20 0c5.523 0 10-4.477 10-10s-4.477-10-10-10L24 24l10 10Z"
        clipRule="evenodd"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M24 44c5.523 0 10-4.477 10-10L24 24 14 34c0 5.523 4.477 10 10 10Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

GraphicStitchingIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const GraphicStitchingIcon = withWrapper(GraphicStitchingIconComponent);
export default GraphicStitchingIcon;
