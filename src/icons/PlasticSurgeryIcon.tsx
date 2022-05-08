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
const PlasticSurgeryIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4.667}
        d="M19.036 44c-.98-3.196-2.458-5.578-4.435-7.147-2.965-2.353-7.676-.89-9.416-3.318-1.74-2.428 1.219-6.892 2.257-9.526 1.039-2.634-3.98-3.566-3.394-4.313.39-.499 2.927-1.937 7.609-4.316C12.987 7.793 17.9 4 26.398 4 39.144 4 44 14.806 44 21.679c0 6.873-5.88 14.277-14.256 15.874-.749 1.09.331 3.24 3.24 6.447"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeWidth={4}
        d="M21.022 4.59c-1.188 5.228-1.188 9.297 0 12.205 1.782 4.362 9.659 3.692 9.659 7.761 0 4.07-4.59 4.852-3.978 7.676.409 1.882 1.317 4.324 2.725 7.324M17 30.55c.235 0 2.4-.138 3.959-1.75 1.039-1.076 1.558-2.343 1.558-3.8"
      />
    </svg>
  );
};

PlasticSurgeryIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const PlasticSurgeryIcon = withWrapper(PlasticSurgeryIconComponent);
export default PlasticSurgeryIcon;
