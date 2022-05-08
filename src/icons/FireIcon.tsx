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
const FireIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        fill="null"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M24 44c8.235 0 15-6.526 15-14.902 0-2.056-.105-4.26-1.245-7.686-1.14-3.426-1.369-3.868-2.574-5.984-.515 4.317-3.27 6.117-3.97 6.655 0-.56-1.666-6.747-4.193-10.45C24.537 8 21.163 5.617 19.185 4c0 3.07-.863 7.634-2.1 9.96-1.236 2.325-1.468 2.41-3.013 4.14-1.544 1.73-2.253 2.265-3.545 4.365C9.236 24.565 9 27.362 9 29.418 9 37.794 15.765 44 24 44Z"
      />
    </svg>
  );
};

FireIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const FireIcon = withWrapper(FireIconComponent);
export default FireIcon;
