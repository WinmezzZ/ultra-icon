/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const CriminalFillIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M12 2a9 9 0 0 1 6.894 14.786c1.255.83 2.033 1.89 2.101 3.049L21 20l-9 2-9-2 .005-.165c.067-1.16.846-2.22 2.1-3.05A8.965 8.965 0 0 1 3 11a9 9 0 0 1 9-9zm0 11c-1.38 0-2.5.672-2.5 1.5S10.62 16 12 16s2.5-.672 2.5-1.5S13.38 13 12 13zM9 8c-1.105 0-2 .672-2 1.5S7.895 11 9 11s2-.672 2-1.5S10.105 8 9 8zm6 0c-1.105 0-2 .672-2 1.5s.895 1.5 2 1.5 2-.672 2-1.5S16.105 8 15 8z" />
    </svg>
  );
};

CriminalFillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const CriminalFillIcon = withWrapper(CriminalFillIconComponent);
export default CriminalFillIcon;
