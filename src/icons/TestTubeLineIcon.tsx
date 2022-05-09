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
const TestTubeLineIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M17 2v2h-1v14c0 2.21-1.79 4-4 4s-4-1.79-4-4V4H7V2h10zm-3 8h-4v8a2 2 0 1 0 4 0v-8zm-1 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-2-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3-8h-4v4h4V4z" />
    </svg>
  );
};

TestTubeLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const TestTubeLineIcon = withWrapper(TestTubeLineIconComponent);
export default TestTubeLineIcon;
