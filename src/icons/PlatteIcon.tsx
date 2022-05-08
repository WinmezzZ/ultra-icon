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
const PlatteIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        fill="null"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M24 44c5.96 0 2.336-8.864 6-13 3.126-3.53 14-1.914 14-7 0-11.046-8.954-20-20-20S4 12.954 4 24s8.954 20 20 20Z"
      />
      <path
        fill="null"
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M28 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-12 4a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm1 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      />
    </svg>
  );
};

PlatteIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const PlatteIcon = withWrapper(PlatteIconComponent);
export default PlatteIcon;
