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
const MoonIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        fill="null"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M28.053 4.41c-5.47 1.427-9.508 6.4-9.508 12.317 0 7.03 5.699 12.727 12.728 12.727 5.916 0 10.89-4.037 12.316-9.507A20.05 20.05 0 0 1 44 24c0 11.046-8.954 20-20 20S4 35.046 4 24 12.954 4 24 4c1.389 0 2.744.141 4.053.41Z"
      />
    </svg>
  );
};

MoonIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const MoonIcon = withWrapper(MoonIconComponent);
export default MoonIcon;
