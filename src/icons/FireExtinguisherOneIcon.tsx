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
const FireExtinguisherOneIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        fill="null"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M16 18a8 8 0 1 1 16 0v24a2 2 0 0 1-2 2H18a2 2 0 0 1-2-2V18Z"
      />
      <path stroke="#333" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M24 24v10" />
      <path fill="null" stroke="#000" strokeLinejoin="round" strokeWidth={4} d="M20 5h9v4h-9zm9 0 9-1v6l-9-1V5Z" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M20 7c-3 0-7.5-.5-10 2-2.417 2.417-2 5-2 9"
      />
    </svg>
  );
};

FireExtinguisherOneIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const FireExtinguisherOneIcon = withWrapper(FireExtinguisherOneIconComponent);
export default FireExtinguisherOneIcon;
