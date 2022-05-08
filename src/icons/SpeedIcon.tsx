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
const SpeedIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 58" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v58H0z" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M34.023 6.69A19.908 19.908 0 0 0 24 4C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20c0-3.627-.966-7.03-2.654-9.962"
      />
      <path
        fill="null"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M31.95 16.05S28.562 25.095 27 26.657A4 4 0 0 1 21.343 21c1.562-1.562 10.607-4.95 10.607-4.95Z"
      />
    </svg>
  );
};

SpeedIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const SpeedIcon = withWrapper(SpeedIconComponent);
export default SpeedIcon;
