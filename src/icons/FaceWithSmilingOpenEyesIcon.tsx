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
const FaceWithSmilingOpenEyesIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        fill="null"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Z"
      />
      <path stroke="#333" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M31 31s-2 4-7 4-7-4-7-4" />
      <circle
        cx={17}
        cy={20}
        r={4}
        fill="null"
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
      />
      <circle
        cx={31}
        cy={20}
        r={4}
        fill="null"
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
      />
    </svg>
  );
};

FaceWithSmilingOpenEyesIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const FaceWithSmilingOpenEyesIcon = withWrapper(FaceWithSmilingOpenEyesIconComponent);
export default FaceWithSmilingOpenEyesIcon;
