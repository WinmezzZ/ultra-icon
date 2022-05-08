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
const GeneralBranchIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        fill="null"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M40 9H8a2 2 0 0 0-2 2v30a2 2 0 0 0 2 2h32a2 2 0 0 0 2-2V11a2 2 0 0 0-2-2Z"
      />
      <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M15 5v4m18-4v4" />
      <path stroke="#333" strokeLinecap="round" strokeWidth={4} d="M6 17h36M18 30h12m-6-6v12" />
      <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M6 11v12m36-12v12" />
    </svg>
  );
};

GeneralBranchIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const GeneralBranchIcon = withWrapper(GeneralBranchIconComponent);
export default GeneralBranchIcon;
