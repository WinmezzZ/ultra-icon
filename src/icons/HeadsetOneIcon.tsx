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
const HeadsetOneIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path fill="null" d="M36 32a8 8 0 1 0 0-16" />
      <path stroke="#000" strokeLinejoin="round" strokeWidth={4} d="M36 32a8 8 0 1 0 0-16" />
      <path fill="null" d="M12 16a8 8 0 1 0 0 16" />
      <path stroke="#000" strokeLinejoin="round" strokeWidth={4} d="M12 16a8 8 0 1 0 0 16" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M12 32V16c0-6.627 5.373-12 12-12s12 5.373 12 12v16c0 6.627-5.373 12-12 12"
      />
    </svg>
  );
};

HeadsetOneIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const HeadsetOneIcon = withWrapper(HeadsetOneIconComponent);
export default HeadsetOneIcon;
