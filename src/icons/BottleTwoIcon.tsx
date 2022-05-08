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
const BottleTwoIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M15 21.56a9.82 9.82 0 0 1 4.767-8.42.479.479 0 0 0 .233-.411V4h8v8.729c0 .168.088.324.233.41A9.82 9.82 0 0 1 33 21.56V42a2 2 0 0 1-2 2H17a2 2 0 0 1-2-2V21.56Z"
      />
      <path stroke="#333" strokeLinecap="round" strokeWidth={4} d="M20 10h8" />
      <path stroke="#333" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M33 23h-9v15h9" />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M33 40V21m-13-9V8m8 4V8" />
    </svg>
  );
};

BottleTwoIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const BottleTwoIcon = withWrapper(BottleTwoIconComponent);
export default BottleTwoIcon;
