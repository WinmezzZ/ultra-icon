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
const GeometricFlowersIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 49 50" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h49v49.056H0z" />
      <ellipse
        cx={17.678}
        cy={17.678}
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        rx={9}
        ry={16}
        transform="rotate(-45 17.678 17.678)"
      />
      <ellipse
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        rx={9}
        ry={16}
        transform="scale(1 -1) rotate(-45 -29.038 -37.028)"
      />
      <ellipse
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        rx={9}
        ry={16}
        transform="scale(-1 1) rotate(-45 5.678 46.648)"
      />
      <ellipse
        cx={31.322}
        cy={31.378}
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        rx={9}
        ry={16}
        transform="rotate(135 31.322 31.378)"
      />
    </svg>
  );
};

GeometricFlowersIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const GeometricFlowersIcon = withWrapper(GeometricFlowersIconComponent);
export default GeometricFlowersIcon;
