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
const ToolIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M44 16c0 6.627-5.373 12-12 12-2.027 0-3.936-.503-5.61-1.39L9 44l-5-5 17.39-17.39A11.948 11.948 0 0 1 20 16c0-6.627 5.373-12 12-12 2.027 0 3.936.502 5.61 1.39L30 13l5 5 7.61-7.61A11.948 11.948 0 0 1 44 16Z"
      />
    </svg>
  );
};

ToolIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const ToolIcon = withWrapper(ToolIconComponent);
export default ToolIcon;
