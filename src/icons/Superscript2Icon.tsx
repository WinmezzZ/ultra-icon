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
const Superscript2IconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M11 7v13H9V7H3V5h12v2h-4zm8.55-.42a.8.8 0 1 0-1.32-.36l-1.154.33A2.001 2.001 0 0 1 19 4a2 2 0 0 1 1.373 3.454L18.744 9H21v1h-4V9l2.55-2.42z" />
    </svg>
  );
};

Superscript2IconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const Superscript2Icon = withWrapper(Superscript2IconComponent);
export default Superscript2Icon;
