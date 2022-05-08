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
const ZipIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        fill="null"
        fillRule="evenodd"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M4.629 12.749 24 5l19.371 7.749a1 1 0 0 1 .629.928V42a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V13.677a1 1 0 0 1 .629-.928Z"
        clipRule="evenodd"
      />
      <path stroke="#333" strokeLinecap="round" strokeWidth={4} d="M24 22v10" />
      <path
        stroke="#333"
        strokeWidth={4}
        d="M33 27c1.657 0 3-1.12 3-2.5S34.657 22 33 22h-2.7a.3.3 0 0 0-.3.3v2.2c0 1.38 1.343 2.5 3 2.5Z"
        clipRule="evenodd"
      />
      <path stroke="#333" strokeLinecap="round" strokeWidth={4} d="M30 22v10" />
      <path stroke="#333" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M12 22h6.005L12 32h6.005" />
    </svg>
  );
};

ZipIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const ZipIcon = withWrapper(ZipIconComponent);
export default ZipIcon;
