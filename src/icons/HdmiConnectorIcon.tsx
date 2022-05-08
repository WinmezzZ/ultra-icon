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
const HdmiConnectorIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <circle
        cx={24}
        cy={24}
        r={20}
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
      />
      <path stroke="#333" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M29 43a5 5 0 0 0-10 0" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M15.5 42.11A19.924 19.924 0 0 0 24 44c3.04 0 5.92-.678 8.5-1.89"
      />
      <circle cx={15} cy={15} r={3} fill="#fff" />
      <circle cx={11} cy={23} r={3} fill="#fff" />
      <circle cx={24} cy={11} r={3} fill="#fff" />
      <circle cx={33} cy={15} r={3} fill="#fff" />
      <circle cx={37} cy={23} r={3} fill="#fff" />
    </svg>
  );
};

HdmiConnectorIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const HdmiConnectorIcon = withWrapper(HdmiConnectorIconComponent);
export default HdmiConnectorIcon;
