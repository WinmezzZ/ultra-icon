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
const RecyclingPoolIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="m20 16 4 4 4-4m4 13 4 4 4-4M8 29l4 4 4-4m8-9V4"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M36 32.867v-13.23a4 4 0 0 1 4-4h4m-32 17.23v-13.23a4 4 0 0 0-4-4H4M4 36v4a4 4 0 0 0 4 4h32a4 4 0 0 0 4-4v-4"
      />
    </svg>
  );
};

RecyclingPoolIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const RecyclingPoolIcon = withWrapper(RecyclingPoolIconComponent);
export default RecyclingPoolIcon;
