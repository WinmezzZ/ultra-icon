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
const MedicineBottleIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        fill="null"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M34 10H14a2 2 0 0 0-2 2v30a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2Z"
      />
      <path stroke="#333" strokeLinecap="round" strokeWidth={4} d="M12 18h24" />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M12 15v6m24-6v6" />
      <path fill="null" stroke="#000" strokeLinejoin="round" strokeWidth={4} d="M32 4H16v6h16V4Z" />
      <path stroke="#333" strokeLinecap="round" strokeWidth={4} d="M20 31h8m-4-4v8" />
    </svg>
  );
};

MedicineBottleIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const MedicineBottleIcon = withWrapper(MedicineBottleIconComponent);
export default MedicineBottleIcon;
