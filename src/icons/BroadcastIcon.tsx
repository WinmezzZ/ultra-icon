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
const BroadcastIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        fill="null"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M24 28.63a4.538 4.538 0 0 0 4.546-4.532A4.538 4.538 0 0 0 24 19.567a4.538 4.538 0 0 0-4.545 4.53 4.538 4.538 0 0 0 4.546 4.532Z"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M16 15c-5.333 4.97-5.333 13.03 0 18m16 0c5.333-4.97 5.333-13.03 0-18m-22-5c-8 7.732-8 20.268 0 28m28.143.196c7.81-7.786 7.81-20.41 0-28.196"
      />
    </svg>
  );
};

BroadcastIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const BroadcastIcon = withWrapper(BroadcastIconComponent);
export default BroadcastIcon;
