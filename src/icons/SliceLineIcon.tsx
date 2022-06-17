/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const SliceLineIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="currentColor"
      {...props}
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="m15.69 12.918 1.769 1.768c-6.01 6.01-10.96 6.01-15.203 4.596L17.812 3.726l3.536 3.535-5.657 5.657zm-2.828 0 5.657-5.657-.707-.707L6.314 18.052c2.732.107 5.358-.907 8.267-3.416l-1.719-1.718z" />
    </svg>
  );
};

SliceLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const SliceLineIcon = withWrapper(SliceLineIconComponent);
export default SliceLineIcon;
