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
const NextIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        fill="null"
        fillRule="evenodd"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M4 40.836c4.893-5.973 9.238-9.362 13.036-10.168 3.797-.805 7.412-.927 10.846-.365V41L44 23.545 27.882 7v10.167c-6.349.05-11.746 2.328-16.192 6.833C7.245 28.505 4.681 34.117 4 40.836Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

NextIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const NextIcon = withWrapper(NextIconComponent);
export default NextIcon;
