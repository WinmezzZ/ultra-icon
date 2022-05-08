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
const SixPointsIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="m24 24-10.5 6.062M24 24l10.5 6.062M24 24V12"
      />
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M14 16a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm0 16a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm14 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm14-8a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm0-16a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM28 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
      />
    </svg>
  );
};

SixPointsIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const SixPointsIcon = withWrapper(SixPointsIconComponent);
export default SixPointsIcon;
