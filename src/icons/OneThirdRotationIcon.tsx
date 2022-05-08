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
const OneThirdRotationIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path fill="#fff" fillOpacity={0.01} d="M48 0H0v48h48V0Z" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M36 40.015A19.989 19.989 0 0 1 24 44c-7.403 0-13.866-4.022-17.324-10H15M32 5.664C39.064 8.75 44 15.8 44 24c0 3.643-.974 7.058-2.676 10l-4.042-7M4.099 26A20.239 20.239 0 0 1 4 24C4 12.954 12.954 4 24 4l-4.042 7"
      />
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M24 30a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"
      />
    </svg>
  );
};

OneThirdRotationIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const OneThirdRotationIcon = withWrapper(OneThirdRotationIconComponent);
export default OneThirdRotationIcon;
