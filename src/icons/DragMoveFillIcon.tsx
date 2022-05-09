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
const DragMoveFillIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="m12 22-4-4h8l-4 4zm0-20 4 4H8l4-4zm0 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM2 12l4-4v8l-4-4zm20 0-4 4V8l4 4z" />
    </svg>
  );
};

DragMoveFillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const DragMoveFillIcon = withWrapper(DragMoveFillIconComponent);
export default DragMoveFillIcon;
