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
const PreviewCloseOneIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M9.858 18C6.238 21 4 24 4 24s8.954 12 20 12c1.37 0 2.708-.185 4-.508M20.032 12.5c1.282-.318 2.61-.5 3.968-.5 11.046 0 20 12 20 12s-2.239 3-5.858 6m-17.828-9.379a5 5 0 0 0 7.186 6.95M42 42 6 6"
      />
    </svg>
  );
};

PreviewCloseOneIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const PreviewCloseOneIcon = withWrapper(PreviewCloseOneIconComponent);
export default PreviewCloseOneIcon;
