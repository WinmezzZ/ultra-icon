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
const RocketOneIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="m20.906 6.063 1.43-.954a3 3 0 0 1 3.328 0l1.43.954A20 20 0 0 1 36 22.703V33H12V22.704a20 20 0 0 1 8.906-16.641Z"
      />
      <circle cx={24} cy={20} r={6} fill="null" stroke="#000" strokeWidth={4} />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="m12 22-6 6.217V33h36v-4.783L36 22M24 38v6m-8-4v2m16-2v2"
      />
    </svg>
  );
};

RocketOneIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const RocketOneIcon = withWrapper(RocketOneIconComponent);
export default RocketOneIcon;
