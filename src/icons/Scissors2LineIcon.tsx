/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const Scissors2LineIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="m12 13.414-2.554 2.554a4 4 0 1 1-1.414-1.414L10.586 12 4.565 5.98a2 2 0 0 1 0-2.83L12 10.587l7.435-7.435a2 2 0 0 1 0 2.828L13.415 12l2.553 2.554a4 4 0 1 1-1.414 1.414L12 13.414zM6 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm12 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
    </svg>
  );
};

Scissors2LineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const Scissors2LineIcon = withWrapper(Scissors2LineIconComponent);
export default Scissors2LineIcon;
