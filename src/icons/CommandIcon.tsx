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
const CommandIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        fill="null"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M9.455 14.91h5.454V9.454a5.455 5.455 0 1 0-5.454 5.454Zm0 18.18h5.454v5.455a5.454 5.454 0 1 1-5.454-5.454Z"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M14.909 14.909h18.182v18.182H14.909z"
      />
      <path
        fill="null"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M38.545 14.91h-5.454V9.454a5.455 5.455 0 1 1 5.454 5.454Zm0 18.18a5.455 5.455 0 1 1-5.454 5.455v-5.454h5.454Z"
      />
    </svg>
  );
};

CommandIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const CommandIcon = withWrapper(CommandIconComponent);
export default CommandIcon;
