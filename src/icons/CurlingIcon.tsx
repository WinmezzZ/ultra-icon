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
const CurlingIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeLinejoin="round"
        strokeMiterlimit={2}
        strokeWidth={4}
        d="M38 42H10c-3.31 0-6-2.68-6-6v-8c0-3.31 2.68-6 6-6h28c3.31 0 6 2.68 6 6v8c0 3.32-2.68 6-6 6Z"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={2}
        strokeWidth={4}
        d="M4 32h40"
      />
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={2}
        strokeWidth={4}
        d="m10 22 6.48-14.8A1.98 1.98 0 0 1 18.31 6H35.5C37.43 6 39 7.57 39 9.5S37.43 13 35.5 13H22v9H10Z"
      />
    </svg>
  );
};

CurlingIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const CurlingIcon = withWrapper(CurlingIconComponent);
export default CurlingIcon;
