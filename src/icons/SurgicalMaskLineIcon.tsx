/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const SurgicalMaskLineIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="m12.485 3.121 7.758 1.94c.445.11.757.51.757.97V7h1c1.1 0 2 .9 2 2v3a3 3 0 0 1-3 3h-.421a6.001 6.001 0 0 1-2.896 3.158l-4.789 2.395a2.002 2.002 0 0 1-1.788 0l-4.79-2.395A6.005 6.005 0 0 1 3.422 15H3a3 3 0 0 1-3-3V9a2 2 0 0 1 2-2h1v-.97c0-.458.312-.858.757-.97l7.758-1.939c.318-.08.652-.08.97 0zM12 5.061l-7 1.75v5.98c0 1.516.856 2.9 2.211 3.579L12 18.764l4.789-2.394A4.001 4.001 0 0 0 19 12.792v-5.98l-7-1.75zM3 9H2v3a1 1 0 0 0 1 1V9zm19 0h-1v4a1 1 0 0 0 1-1V9z" />
    </svg>
  );
};

SurgicalMaskLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const SurgicalMaskLineIcon = withWrapper(SurgicalMaskLineIconComponent);
export default SurgicalMaskLineIcon;
