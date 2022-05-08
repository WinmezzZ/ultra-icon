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
const DragIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        fill="#000"
        fillRule="evenodd"
        d="M19 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm-4 18a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 14a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm22-32a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm-4 18a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 14a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

DragIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const DragIcon = withWrapper(DragIconComponent);
export default DragIcon;
