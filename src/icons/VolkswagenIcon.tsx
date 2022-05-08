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
const VolkswagenIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        fill="null"
        stroke="#000"
        strokeWidth={4}
        d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="m7 14 9 23 6-11h4l6 11 9-23"
      />
      <path stroke="#333" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="m16 6 6 13h4l6-13" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeWidth={4}
        d="M44 24a19.952 19.952 0 0 0-6.77-15A19.924 19.924 0 0 0 24 4a19.924 19.924 0 0 0-13.23 5A19.952 19.952 0 0 0 4 24"
      />
    </svg>
  );
};

VolkswagenIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const VolkswagenIcon = withWrapper(VolkswagenIconComponent);
export default VolkswagenIcon;
