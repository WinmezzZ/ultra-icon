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
const BackgroundColorIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        fill="#000"
        fillRule="evenodd"
        d="M37 37a4 4 0 0 0 4-4c0-1.473-1.333-3.473-4-6-2.667 2.527-4 4.527-4 6a4 4 0 0 0 4 4Z"
        clipRule="evenodd"
      />
      <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="m20.854 5.504 3.535 3.536" />
      <path
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M23.682 8.333 8.125 23.889 19.44 35.203l15.556-15.557L23.682 8.333Z"
      />
      <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="m12 20.073 16.961 5.577M4 43h40" />
    </svg>
  );
};

BackgroundColorIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const BackgroundColorIcon = withWrapper(BackgroundColorIconComponent);
export default BackgroundColorIcon;
