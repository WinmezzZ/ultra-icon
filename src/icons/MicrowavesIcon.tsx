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
const MicrowavesIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <rect width={24} height={38} x={5} y={34} stroke="#000" strokeWidth={4} rx={2} transform="rotate(-90 5 34)" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M20 19h4m-11 6h22m-23 9v4m8-4v4m8-4v4m8-4v4"
      />
      <path fill="#000" d="M15 19a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
    </svg>
  );
};

MicrowavesIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const MicrowavesIcon = withWrapper(MicrowavesIconComponent);
export default MicrowavesIcon;
