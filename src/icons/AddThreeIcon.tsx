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
const AddThreeIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M24 32V16m18 11v-6M6 27v-6m8-15H8a2 2 0 0 0-2 2v6m28-8h6a2 2 0 0 1 2 2v6m-8 28h6a2 2 0 0 0 2-2v-6m-28 8H8a2 2 0 0 1-2-2v-6M27 6h-6m11 18H16m11 18h-6"
      />
    </svg>
  );
};

AddThreeIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const AddThreeIcon = withWrapper(AddThreeIconComponent);
export default AddThreeIcon;
