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
const TargetIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M21.417 18.583a6 6 0 1 0 8 8"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M28.28 11.72C26.94 11.255 25.5 11 24 11c-7.18 0-13 5.82-13 13s5.82 13 13 13 13-5.82 13-13c0-1.5-.254-2.94-.72-4.28"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M33.568 6.433A19.911 19.911 0 0 0 24 4C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20c0-3.466-.882-6.726-2.432-9.568M44 4 24 24"
      />
    </svg>
  );
};

TargetIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const TargetIcon = withWrapper(TargetIconComponent);
export default TargetIcon;
