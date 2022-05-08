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
const BoneIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M43.523 17.315c0-4.243-3.535-4.243-6.01-6.718-2.475-2.475-2.475-6.01-6.718-6.01-2.828 0-5.303 3.182-5.303 5.303s.707 3.536 2.121 4.95L14.886 27.568c-1.415-1.414-2.829-2.122-4.95-2.122s-5.304 2.475-5.304 5.304c-.353 4.596 3.89 4.596 6.01 6.717 2.122 2.122 2.122 6.364 6.718 6.01 2.829 0 5.304-3.181 5.304-5.303 0-2.121-.707-3.535-2.122-4.95L33.27 20.498c1.414 1.414 2.829 2.121 4.95 2.121s5.303-2.475 5.303-5.303Z"
      />
    </svg>
  );
};

BoneIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const BoneIcon = withWrapper(BoneIconComponent);
export default BoneIcon;
