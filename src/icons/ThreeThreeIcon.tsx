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
const ThreeThreeIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M25.745 44h-.896c-5.21 0-10.07-2.626-12.925-6.984l-2.195-3.35a5.629 5.629 0 0 1 1.072-7.382l2.288-1.936c.26-.22.411-.545.411-.887V7.25a3.25 3.25 0 0 1 6.5 0v-1a3.25 3.25 0 0 1 6.5 0v1a3.25 3.25 0 0 1 6.5 0v14.5a3.25 3.25 0 0 1 6.5 0v10.219c0 1.649-.498 3.26-1.43 4.62l-.973 1.423A13.755 13.755 0 0 1 25.745 44Z"
      />
    </svg>
  );
};

ThreeThreeIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const ThreeThreeIcon = withWrapper(ThreeThreeIconComponent);
export default ThreeThreeIcon;
