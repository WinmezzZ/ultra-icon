/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const ScalesLineIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M13 2v1h7v2h-7v14h4v2H7v-2h4V5H4V3h7V2h2zM5 6.343l2.828 2.829A3.999 3.999 0 0 1 5 16a3.999 3.999 0 0 1-2.828-6.828L5 6.343zm14 0 2.828 2.829A3.999 3.999 0 0 1 19 16a3.999 3.999 0 0 1-2.828-6.828L19 6.343zM5 9.172l-1.414 1.414a2 2 0 1 0 2.828 0L5 9.172zm14 0-1.414 1.414a2 2 0 1 0 2.828 0L19 9.172z" />
    </svg>
  );
};

ScalesLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const ScalesLineIcon = withWrapper(ScalesLineIconComponent);
export default ScalesLineIcon;
