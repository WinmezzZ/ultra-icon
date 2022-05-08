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
const MultilayerSphereIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path fill="#fff" fillOpacity={0.01} d="M48 0H0v48h48V0Z" />
      <circle cx={24} cy={24} r={20} stroke="#000" strokeLinejoin="round" strokeWidth={4} />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M4.4 20c1.853 9.129 9.924 16 19.6 16 9.676 0 17.747-6.871 19.6-16"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M5.664 16C8.75 23.064 15.8 28 24 28c8.201 0 15.25-4.936 18.336-12"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M7.999 12c3.648 4.858 9.458 8 16.001 8 6.543 0 12.353-3.142 16.015-8M11.998 8A19.91 19.91 0 0 0 24 12a19.91 19.91 0 0 0 12.002-4"
      />
    </svg>
  );
};

MultilayerSphereIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const MultilayerSphereIcon = withWrapper(MultilayerSphereIconComponent);
export default MultilayerSphereIcon;
