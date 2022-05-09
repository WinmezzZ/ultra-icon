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
const AddLineIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" />
    </svg>
  );
};

AddLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const AddLineIcon = withWrapper(AddLineIconComponent);
export default AddLineIcon;
