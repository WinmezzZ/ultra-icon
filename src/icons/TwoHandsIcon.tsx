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
const TwoHandsIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 59 49" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M6 0h48v48H6z" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="m43 19.976-.983 3.957-8.706 6.307.05 11.718L40 42l-.373-8.485c6.922-4.33 10.383-7.5 10.383-9.515V6.06M17 20.051l1.033 3.95 8.367 6.415.36 11.712L20 42l.203-8.091c-6.794-3.908-10.19-6.884-10.19-8.928V6.03"
      />
    </svg>
  );
};

TwoHandsIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const TwoHandsIcon = withWrapper(TwoHandsIconComponent);
export default TwoHandsIcon;
