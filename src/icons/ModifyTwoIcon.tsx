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
const ModifyTwoIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <rect width={40} height={30} x={4} y={9} fill="null" stroke="#000" strokeWidth={4} rx={2} />
      <path stroke="#333" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M16 9v30" />
      <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M20 9h-8m8 30h-8" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="m23 31 14-14m-12 2-2-2m14 14-2-2"
      />
    </svg>
  );
};

ModifyTwoIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const ModifyTwoIcon = withWrapper(ModifyTwoIconComponent);
export default ModifyTwoIcon;
