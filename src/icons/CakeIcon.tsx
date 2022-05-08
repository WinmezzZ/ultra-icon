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
const CakeIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M24 12v5M8 27v13a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V27"
      />
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M4 21.97A4.97 4.97 0 0 1 8.97 17h30.06A4.969 4.969 0 0 1 44 21.97v.278a4.557 4.557 0 0 1-2.864 4.231 3.038 3.038 0 0 1-2.544-.132l-.342-.18a3.4 3.4 0 0 0-3.167 0 3.4 3.4 0 0 1-3.166 0 3.4 3.4 0 0 0-3.167 0 3.4 3.4 0 0 1-3.167 0 3.4 3.4 0 0 0-3.166 0 3.4 3.4 0 0 1-3.167 0 3.4 3.4 0 0 0-3.167 0 3.4 3.4 0 0 1-3.166 0 3.4 3.4 0 0 0-3.167 0l-.342.18a3.038 3.038 0 0 1-2.543.132A4.557 4.557 0 0 1 4 22.25v-.28Z"
      />
      <path stroke="#000" strokeWidth={4} d="M27 8c-.8-4-3-4-3-4s-2.2 0-3 4c-1 5 7 5 6 0Z" />
    </svg>
  );
};

CakeIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const CakeIcon = withWrapper(CakeIconComponent);
export default CakeIcon;
