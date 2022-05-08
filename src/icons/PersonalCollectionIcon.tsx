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
const PersonalCollectionIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <circle
        cx={24}
        cy={11}
        r={7}
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M4 41c0-8.837 8.059-16 18-16"
      />
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M31.85 28C29.724 28 28 30.009 28 32.486c0 4.487 4.55 8.565 7 9.514 2.45-.949 7-5.027 7-9.514C42 30.01 40.276 28 38.15 28c-1.302 0-2.453.753-3.15 1.906C34.303 28.753 33.152 28 31.85 28Z"
      />
    </svg>
  );
};

PersonalCollectionIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const PersonalCollectionIcon = withWrapper(PersonalCollectionIconComponent);
export default PersonalCollectionIcon;
