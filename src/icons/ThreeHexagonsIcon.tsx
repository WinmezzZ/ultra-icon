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
const ThreeHexagonsIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path fill="#fff" fillOpacity={0.01} d="M48 0H0v48h48V0Z" />
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="m24 27-10-6-10 6v12l10 6 10-6V27Zm20 0-10-6-10 6v12l10 6 10-6V27Z"
      />
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M34 9 24 3 14 9v12l10 6 10-6V9Z"
      />
    </svg>
  );
};

ThreeHexagonsIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const ThreeHexagonsIcon = withWrapper(ThreeHexagonsIconComponent);
export default ThreeHexagonsIcon;
