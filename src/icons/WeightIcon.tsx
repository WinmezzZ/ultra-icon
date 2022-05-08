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
const WeightIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        fill="null"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M41 4H7a3 3 0 0 0-3 3v34a3 3 0 0 0 3 3h34a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Z"
      />
      <path stroke="#333" strokeLinecap="round" strokeWidth={4} d="M12 19.054c3.325-4 7.325-6 12-6s8.675 2 12 6" />
      <path fill="#fff" d="M24 31a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      <path stroke="#333" strokeLinecap="round" strokeWidth={4} d="m19 21 5.008 7" />
    </svg>
  );
};

WeightIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const WeightIcon = withWrapper(WeightIconComponent);
export default WeightIcon;
