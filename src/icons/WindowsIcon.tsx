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
const WindowsIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        fill="null"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={3.833}
        d="m6.75 11.063 12.938-1.726v12.076H6.75v-10.35Zm18.113-2.218L41.25 6.75v14.663H24.863V8.845Zm0 18.605 16.387.383V41.25l-16.387-2.683V27.45ZM6.75 26.587l12.938.312V37.8L6.75 35.62v-9.032Z"
      />
    </svg>
  );
};

WindowsIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const WindowsIcon = withWrapper(WindowsIconComponent);
export default WindowsIcon;
