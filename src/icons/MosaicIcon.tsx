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
const MosaicIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        fill="#000"
        d="M44 36h-8v8h8v-8Zm-16 0h-8v8h8v-8Zm-16 0H4v8h8v-8Zm32-16h-8v8h8v-8Zm-16 0h-8v8h8v-8Zm-16 0H4v8h8v-8ZM44 4h-8v8h8V4ZM28 4h-8v8h8V4ZM12 4H4v8h8V4Zm8 8h-8v8h8v-8Zm0 16h-8v8h8v-8Zm16-16h-8v8h8v-8Zm0 16h-8v8h8v-8Z"
      />
    </svg>
  );
};

MosaicIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const MosaicIcon = withWrapper(MosaicIconComponent);
export default MosaicIcon;
