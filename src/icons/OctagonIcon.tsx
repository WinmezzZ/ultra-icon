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
const OctagonIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeWidth={4}
        d="M15.41 42.389 5.56 32.18A2 2 0 0 1 5 30.792V17.208a2 2 0 0 1 .56-1.39l9.85-10.207A2 2 0 0 1 16.85 5h14.3a2 2 0 0 1 1.44.611l9.85 10.208a2 2 0 0 1 .56 1.389v13.584a2 2 0 0 1-.56 1.39l-9.85 10.207a2 2 0 0 1-1.44.611h-14.3a2 2 0 0 1-1.44-.611Z"
      />
    </svg>
  );
};

OctagonIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const OctagonIcon = withWrapper(OctagonIconComponent);
export default OctagonIcon;
