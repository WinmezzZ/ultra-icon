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
const TowerOfBabelIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M20 14.5V4h8v9.5M14 25v-9.538L34 13v10M11 35v-9l26-3v9"
      />
      <path fill="null" stroke="#000" strokeLinejoin="round" strokeWidth={4} d="M40 44H8v-8l32-4v12Z" />
    </svg>
  );
};

TowerOfBabelIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const TowerOfBabelIcon = withWrapper(TowerOfBabelIconComponent);
export default TowerOfBabelIcon;
