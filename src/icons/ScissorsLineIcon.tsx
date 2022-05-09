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
const ScissorsLineIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M9.446 8.032 12 10.586l6.728-6.728a2 2 0 0 1 2.828 0l-12.11 12.11a4 4 0 1 1-1.414-1.414L10.586 12 8.032 9.446a4 4 0 1 1 1.414-1.414zm5.38 5.38 6.73 6.73a2 2 0 0 1-2.828 0l-5.317-5.316 1.415-1.415zm-7.412 3.174a2 2 0 1 0-2.828 2.828 2 2 0 0 0 2.828-2.828zm0-9.172a2 2 0 1 0-2.828-2.828 2 2 0 0 0 2.828 2.828z" />
    </svg>
  );
};

ScissorsLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const ScissorsLineIcon = withWrapper(ScissorsLineIconComponent);
export default ScissorsLineIcon;
