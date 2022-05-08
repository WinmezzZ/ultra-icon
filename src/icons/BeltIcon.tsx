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
const BeltIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="m10.565 30.364-6.364 6.364 7.071 7.071 6.364-6.364m4.243-18.385 14.85-14.849 7.07 7.071-14.849 14.85"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M9.859 29.657a2 2 0 0 1 0-2.829l8.485-8.485a2 2 0 0 1 2.828 0l8.485 8.485a2 2 0 0 1 0 2.829l-8.485 8.485a2 2 0 0 1-2.828 0l-8.485-8.485Zm15.556-7.071-7.071 7.07M31.779 9.15l7.07 7.072M26.828 14.1l7.071 7.072m-18.384 0L26.83 32.485"
      />
    </svg>
  );
};

BeltIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const BeltIcon = withWrapper(BeltIconComponent);
export default BeltIcon;
