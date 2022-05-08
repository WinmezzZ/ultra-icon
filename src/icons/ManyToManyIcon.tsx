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
const ManyToManyIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        fill="null"
        stroke="#000"
        strokeWidth={4}
        d="M42 7H6a2 2 0 0 0-2 2v30a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M30 30V18l8 12V18M10 30V18l8 12V18"
      />
      <path stroke="#333" strokeLinecap="round" strokeWidth={4} d="M24 20v1m0 6v1" />
    </svg>
  );
};

ManyToManyIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const ManyToManyIcon = withWrapper(ManyToManyIconComponent);
export default ManyToManyIcon;
