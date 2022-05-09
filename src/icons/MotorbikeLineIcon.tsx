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
const MotorbikeLineIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M4 13.256V12H2v-2h6.365L11.2 8h3.491L13.6 5H11V3h4l1.092 3H20v3h-2.816l1.456 4.002a4.5 4.5 0 1 1-1.985.392L15.419 10h-.947l-1.582 5.87-.002-.001.002.006-2.925 1.064A4.5 4.5 0 1 1 4 13.256zm2-.229a4.5 4.5 0 0 1 3.281 2.033l1.957-.713L12.403 10h-.547L9 12H6v1.027zM5.5 20a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm13 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
    </svg>
  );
};

MotorbikeLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const MotorbikeLineIcon = withWrapper(MotorbikeLineIconComponent);
export default MotorbikeLineIcon;
