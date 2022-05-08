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
const ToiletIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M19.999 10h8v12h-8V10Z"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="m17 35-5 9h-.001 24L31 35m2.999-13V5a1 1 0 0 0-1-1h-18a1 1 0 0 0-1 1v17"
      />
      <path
        stroke="#000"
        strokeWidth={4}
        d="M6.08 22.364A.3.3 0 0 1 6.372 22h35.254a.3.3 0 0 1 .292.364c-1.224 5.508-4.635 10.452-10 12.2C29.436 35.374 26.656 36 24 36c-2.655 0-5.436-.627-7.92-1.436-5.365-1.749-8.776-6.692-10-12.2Z"
      />
    </svg>
  );
};

ToiletIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const ToiletIcon = withWrapper(ToiletIconComponent);
export default ToiletIcon;
