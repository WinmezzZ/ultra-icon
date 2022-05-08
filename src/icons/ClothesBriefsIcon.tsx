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
const ClothesBriefsIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M22.158 37s-.9-8.075-4.158-12c-3.044-3.669-12-6-12-6v-5h36v5s-8.956 2.331-12 6c-3.257 3.925-4.158 12-4.158 12h-3.684Z"
      />
    </svg>
  );
};

ClothesBriefsIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const ClothesBriefsIcon = withWrapper(ClothesBriefsIconComponent);
export default ClothesBriefsIcon;
