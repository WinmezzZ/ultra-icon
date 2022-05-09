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
const InputCursorMoveIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M8 21v-2h3V5H8V3h8v2h-3v14h3v2H8zM18.05 7.05 23 12l-4.95 4.95-1.414-1.414L20.172 12l-3.536-3.536L18.05 7.05zm-12.1 0 1.414 1.414L3.828 12l3.536 3.536L5.95 16.95 1 12l4.95-4.95z" />
    </svg>
  );
};

InputCursorMoveIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const InputCursorMoveIcon = withWrapper(InputCursorMoveIconComponent);
export default InputCursorMoveIcon;
