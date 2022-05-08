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
const AnchorIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M14 8h20M14 8h20M14 40h20" />
      <rect width={8} height={8} x={36} y={4} fill="null" stroke="#000" strokeLinejoin="round" strokeWidth={4} rx={2} />
      <rect width={8} height={8} x={4} y={4} fill="null" stroke="#000" strokeLinejoin="round" strokeWidth={4} rx={2} />
      <rect
        width={8}
        height={8}
        x={36}
        y={36}
        fill="null"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        rx={2}
      />
      <rect width={8} height={8} x={4} y={36} fill="null" stroke="#000" strokeLinejoin="round" strokeWidth={4} rx={2} />
      <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M40 14v20M8 14v20" />
    </svg>
  );
};

AnchorIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const AnchorIcon = withWrapper(AnchorIconComponent);
export default AnchorIcon;
