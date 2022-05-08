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
const IcecreamFourIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <g stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} clipPath="url(#prefix__a)">
        <path d="m18.843 13.723 13.435 13.434L11.679 40.5l-6.045-6.046 13.209-20.732Z" />
        <path
          fill="null"
          d="M38.773 19.51c-1.06 1.061-1.76 1.07-2.812 1.43-.033 2.797.006 5.61-3.542 6.305L18.603 13.429s-.009-1.37 1.396-2.086c.495-.232 1.499-.122 2.097-.024 1.406-3.025 3.535-3.536 5.903-2.558 1.135-1.718 3.94-2.45 6.028-1.775 2.089.675 2.072 2.073 3.462 2.755 1.39.683 2.804-.731 2.812-1.43.008-.7-.114-2.036.828-1.794.575.155 1.038.715 1.596 3.044.31 1.308.13 3.242-.987 4.429-.686.729-2.217 1.11-2.916 1.327.066.19 1.012 3.133-.05 4.193Z"
        />
        <path d="M38.822 15.316c-2.813 1.43-4.901.756-6.974-1.316" />
      </g>
      <defs>
        <clipPath id="prefix__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

IcecreamFourIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const IcecreamFourIcon = withWrapper(IcecreamFourIconComponent);
export default IcecreamFourIcon;
