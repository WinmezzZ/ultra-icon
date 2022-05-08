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
const TrapezoidIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeWidth={4}
        d="M31.794 8H16.206a3 3 0 0 0-2.864 2.105l-8.125 26A3 3 0 0 0 8.081 40h31.838a3 3 0 0 0 2.864-3.895l-8.125-26A3 3 0 0 0 31.794 8Z"
      />
    </svg>
  );
};

TrapezoidIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const TrapezoidIcon = withWrapper(TrapezoidIconComponent);
export default TrapezoidIcon;
