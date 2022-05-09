/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const DeleteBack2FillIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M6.535 3H21a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6.535a1 1 0 0 1-.832-.445l-5.333-8a1 1 0 0 1 0-1.11l5.333-8A1 1 0 0 1 6.535 3zM13 10.586l-2.828-2.829-1.415 1.415L11.586 12l-2.829 2.828 1.415 1.415L13 13.414l2.828 2.829 1.415-1.415L14.414 12l2.829-2.828-1.415-1.415L13 10.586z" />
    </svg>
  );
};

DeleteBack2FillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const DeleteBack2FillIcon = withWrapper(DeleteBack2FillIconComponent);
export default DeleteBack2FillIcon;
